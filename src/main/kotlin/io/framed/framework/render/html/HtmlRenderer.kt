package io.framed.framework.render.html

import io.framed.framework.JsPlumb
import io.framed.framework.JsPlumbInstance
import io.framed.framework.jsPlumbEndpointOptions
import io.framed.framework.pictogram.*
import io.framed.framework.render.Renderer
import io.framed.framework.util.*
import io.framed.framework.view.*
import org.w3c.dom.HTMLElement

/**
 * @author lars
 */
class HtmlRenderer(
        private val workspace: ListView
) : Renderer {
    private lateinit var viewModel: ViewModel

    private val layerChangeListener = { _: Unit ->
        draw()
    }

    override fun render(viewModel: ViewModel) {
        if (this::viewModel.isInitialized) {
            this.viewModel.onLayerChange -= layerChangeListener
        }

        this.viewModel = viewModel
        reset()

        this.viewModel.onLayerChange += layerChangeListener
        draw()
    }

    private var removerList: List<EventHandler<*>.Remover> = emptyList()
    fun reset() {
        jsPlumbList.forEach { it.deleteEveryConnection() }
        jsPlumbList.forEach { it.deleteEveryEndpoint() }

        endpointMap.clear()
        shapeMap = emptyMap()

        removerList.forEach { it.remove() }
        removerList = emptyList()
    }

    private var draggableViews: List<View<*>> = emptyList()
    private val selectedViews: List<View<*>>
        get() = draggableViews.filter { it.selectedView }

    private val navigationView = NavigationView().also { navigationView ->
        workspace += navigationView

        navigationView.onSelect { dimension ->
            if (dimension == null) {
                selectedViews.forEach { it.selectedView = false }
            } else {
                draggableViews.forEach {
                    it.selectedView = (it.dimension in dimension)
                }
            }
        }
    }

    private fun createConnection(source: Long, target: Long) {
        viewModel.handler.createConnection(source, target)
    }

    private var jsPlumbList: List<JsPlumbInstance> = emptyList()

    private fun createJsPlumb(container: HTMLElement): JsPlumbInstance {
        println("create instance")
        val instance = JsPlumb.getInstance().apply {
            setContainer(container)

            setZoom(1.0)
            bind("beforeDrop") { info: dynamic ->
                val source = getShapeById(info.sourceId as String)?.id ?: return@bind false
                val target = getShapeById(info.targetId as String)?.id ?: return@bind false

                createConnection(source, target)

                return@bind false
            }

            bind("beforeDrag") { info: dynamic ->
                val source = getShapeById(info.sourceId as String) ?: return@bind true
                updateEndpoints(source)
                true
            }

            bind("connectionDragStop") { _ ->
                updateEndpoints()
            }

            navigationView.onZoom { zoom ->
                setZoom(zoom)
                draggableViews.forEach { it.dragZoom = zoom }
                updateViewBox()
            }
            navigationView.onPan {
                updateViewBox()
            }
        }

        jsPlumbList += instance

        return instance
    }

    private fun updateViewBox() {
        val box = navigationView.viewBox

        viewModel.container.left = box.left
        viewModel.container.top = box.top
        viewModel.container.width = box.width
        viewModel.container.height = box.height
    }

    private fun loadViewBox() {
        val left = viewModel.container.left
        val top = viewModel.container.top
        val width = viewModel.container.width
        val height = viewModel.container.height

        if (left != null && top != null) {
            navigationView.viewBox = Dimension(left, top, width, height)
        }
    }

    private fun draw() {
        draggableViews = emptyList()

        loadViewBox()
        viewModel.container.onPositionChange { force ->
            if (force) loadViewBox()
        }

        navigationView.container.clear()

        navigationView.onContext.clearListeners()
        if (viewModel.container.hasContextMenu) {
            navigationView.onContext {
                viewModel.container.onContextMenu.fire(ContextEvent(it.point(), viewModel.container))
            }
        }
        navigationView.onMouseDown.clearListeners()
        if (viewModel.container.hasSidebar) {
            navigationView.onMouseDown {
                viewModel.container.onSidebar.fire(SidebarEvent(viewModel.container))
            }
        }

        val jsPlumbInstance = createJsPlumb(navigationView.container.html)

        viewModel.container.shapes.forEach { drawShape(it, navigationView.container, viewModel.container.position, jsPlumbInstance) }
        removerList += viewModel.container.onAdd.withRemover {
            drawShape(it, navigationView.container, viewModel.container.position, jsPlumbInstance)
        }
        removerList += viewModel.container.onRemove.withRemover {
            removeShape(it)
        }

        viewModel.connections.forEach {
            drawRelation(findInstance(listOf(it.source.get(), it.target.get())) ?: throw IllegalArgumentException("Shapes are not in the same layer!"), it)
        }
        removerList += viewModel.onConnectionAdd.withRemover {
            drawRelation(findInstance(listOf(it.source.get(), it.target.get())) ?: throw IllegalArgumentException("Shapes are not in the same layer!"), it)
        }
        removerList += viewModel.onConnectionRemove.withRemover { r ->
            relations[r]?.let { relation ->
                relations -= r
                relation.remove()
            }
        }
    }

    private fun findInstance(idList: List<Long>): JsPlumbInstance? {
        val list = shapeMap.filterKeys { it.id in idList }.values.map { it.jsPlumbInstance }.distinct()
        return if (list.size == 1) {
            list.first()
        } else {
            null
        }
    }

    private fun updateEndpoints(source: Shape? = null) {
        (endpointMap.keys - shapeMap.keys).forEach {
            deleteEndpoint(it)
        }

        if (source == null) {
            shapeMap.keys.forEach {
                if (viewModel.handler.canConnectionStart(it.id ?: return)) {
                    createEndpoint(it)
                } else {
                    deleteEndpoint(it)
                }
            }
        } else {
            (shapeMap.keys - source).forEach {
                if (viewModel.handler.canConnectionCreate(source.id ?: return, it.id ?: return)) {
                    createEndpoint(it)
                } else {
                    deleteEndpoint(it)
                }
            }
        }
    }

    fun createEndpoint(shape: Shape) {
        if (endpointMap.containsKey(shape)) return
        val html = shapeMap[shape]?.view?.html ?: return
        val jsPlumbInstance = shapeMap[shape]?.jsPlumbInstance ?: return

        endpointMap[shape] = jsPlumbInstance.addEndpoint(html, jsPlumbEndpointOptions {
            anchors = arrayOf("Bottom")
            isSource = true
            isTarget = true
            endpoint = "Dot"
        })
    }

    /**
     * The model removes the endpoint for the given shape
     */
    fun deleteEndpoint(shape: Shape) {
        val jsPlumbInstance = shapeMap[shape]?.jsPlumbInstance ?: return
        endpointMap[shape]?.let(jsPlumbInstance::deleteEndpoint)
        endpointMap -= shape
    }

    /**
     * The map stores the endpoints for all shapes
     */
    private val endpointMap = mutableMapOf<Shape, HTMLElement>()

    operator fun get(shape: Shape): View<*>? = shapeMap[shape]?.view
    operator fun get(id: Long): View<*>? = shapeMap.filterKeys { it.id == id }.values.firstOrNull()?.view

    private fun getShapeById(id: String): Shape? = shapeMap.entries.find { (_, view) ->
        view.view.id == id
    }?.key

    private var shapeMap: Map<Shape, ShapeItem> = emptyMap()
        set(value) {
            field = value
            async {
                updateEndpoints()
            }
        }

    private var relations: Map<Connection, HtmlRelation> = emptyMap()
    private fun drawRelation(jsPlumbInstance: JsPlumbInstance, relation: Connection) {
        relations += relation to HtmlRelation(relation, jsPlumbInstance, this)
    }

    private fun removeShape(shape: Shape) {
        shapeMap[shape]?.let { v ->
            navigationView.container.remove(v.view)
            if (shape is BoxShape) {
                shape.shapes.forEach(this::removeShape)
            }
            shapeMap -= shape

            removerList -= removerList.asSequence().filter { it.tag == shape.id }.onEach { it.remove() }.toList()
        }
    }

    private fun drawShape(shape: Shape, parent: ViewCollection<View<*>, *>, position: BoxShape.Position, jsPlumbInstance: JsPlumbInstance): View<*> {
        return when (shape) {
            is BoxShape -> drawBoxShape(shape, parent, position, jsPlumbInstance)
            is TextShape -> drawTextShape(shape, parent)
            is IconShape -> drawIconShape(shape, parent, position, jsPlumbInstance)
            else -> throw UnsupportedOperationException()
        }.also { view ->
            if (shape.id != null) {
                shapeMap += shape to ShapeItem(view, jsPlumbInstance)
            }
        }
    }

    private fun style(view: View<*>, style: Style) {
        style.background?.let { bg ->
            view.html.style.background = bg.toCss()
        }
        style.border?.let { border ->
            view.html.style.borderStyle = border.style.toString()
            view.html.style.borderWidth = border.width.toCss("px")
            view.html.style.borderColor = border.color.toCss()
            border.radius?.let { radius ->
                view.html.style.borderRadius = radius.toCss("px")
            }
        }
        style.padding?.let { padding ->
            view.html.style.padding = padding.toCss("px")
        }
    }

    private fun selectView(view: View<*>, ctrlKey: Boolean, dblClick: Boolean) {
        if (ctrlKey) {
            view.selectedView = !view.selectedView
        } else {
            if (view.selectedView) {
                if (dblClick) {
                    (selectedViews - view).forEach { it.selectedView = false }
                }
            } else {
                (selectedViews - view).forEach { it.selectedView = false }
                view.selectedView = true
            }
        }
    }

    private fun events(view: View<*>, shape: Shape, parent: ViewCollection<View<*>, *>) {
        if (shape.hasContextMenu) {
            view.onContext {
                it.stopPropagation()
                it.preventDefault()
                shape.onContextMenu.fire(ContextEvent(it.point(), shape))
            }
        }
        if (shape.hasSidebar) {
            view.onMouseDown {
                if (!it.defaultPrevented) {
                    it.preventDefault()
                    shape.onSidebar.fire(SidebarEvent(shape))
                }
            }
            view.onClick { it.stopPropagation() }
        }
        view.onDrag {
            if (it.direct) parent.toForeground(view)
        }
    }

    private fun checkDrop(shape: Shape? = null): Shape? {
        shapeMap.values.filter { "drop-target" in it.view.classes }.forEach {
            it.view.classes -= "drop-target"
        }

        if (shape != null) {
            val mouse = navigationView.mouseToCanvas(Root.mousePosition)
            val targets = shapeMap.filter { (s, view) ->
                mouse in view.view.dimension && shape != s
            }.filterKeys { target ->
                viewModel.handler.canDropShape(shape.id ?: return null, target.id ?: return null)
            }

            if (targets.size == 1) {
                val (target, view) = targets.entries.first()
                view.view.classes += "drop-target"
                return target
            }
        }
        return null
    }

    private fun absolutePosition(view: View<*>, shape: Shape, parent: ViewCollection<View<*>, *>, jsPlumbInstance: JsPlumbInstance) = with(view) {
        left = shape.left ?: 0.0
        top = shape.top ?: 0.0
        classes += "absolute-view"
        var canDrop: Shape? = null

        removerList += shape.onPositionChange.withRemover(shape.id) { force ->
            if (force) {
                left = shape.left ?: 0.0
                top = shape.top ?: 0.0
                shape.width?.let { width = it } ?: autoWidth()
                shape.height?.let { height = it } ?: autoHeight()

                jsPlumbInstance.revalidate(html)
            }
        }

        dragType = View.DragType.ABSOLUTE
        onMouseDown { event ->
            event.stopPropagation()
            selectView(this, event.ctrlKey, false)
        }
        onClick { event ->
            event.stopPropagation()
        }
        onDblClick { event ->
            event.stopPropagation()
            selectView(this, event.ctrlKey, true)
        }
        onDrag { event ->
            if (event.direct) {
                (selectedViews - this).forEach {
                    it.performDrag(event.indirect)
                }
            }
            jsPlumbInstance.revalidate(html)

            shape.left = event.newPosition.x
            shape.top = event.newPosition.y

            canDrop = checkDrop(shape)
        }
        onMouseUp {
            canDrop?.let { target ->
                viewModel.handler.dropShape(shape.id ?: return@onMouseUp, target.id ?: return@onMouseUp)
            }
            checkDrop()
        }
        draggableViews += this

        if (parent != navigationView.container) {
            minTop = 0.0
            minLeft = 0.0
        }
    }

    private fun drawBoxShape(
            shape: BoxShape,
            parent: ViewCollection<View<*>, *>,
            position: BoxShape.Position,
            jsPlumbInstance: JsPlumbInstance
    ): View<*> = parent.listView {
        style(this, shape.style)
        events(this, shape, parent)

        if (shape.position == BoxShape.Position.ABSOLUTE) {
            this.html.style.position = "relative"
        }

        if (shape.resizeable) {
            this.resizeable { event ->
                jsPlumbInstance.revalidate(html)

                shape.width = event.width
                shape.height = event.height
            }

            shape.width?.let { width = it }
            shape.height?.let { height = it }
        }

        if (position == BoxShape.Position.ABSOLUTE) {
            absolutePosition(this, shape, parent, jsPlumbInstance)
        }

        val childJsPlumbInstance = if (shape.position == BoxShape.Position.ABSOLUTE) {
            createJsPlumb(this.html)
        } else jsPlumbInstance

        var map = shape.shapes.map {
            it to drawShape(it, this, shape.position, childJsPlumbInstance)
        }.toMap()

        removerList += shape.onAdd.withRemover(shape.id) {
            map += it to drawShape(it, this, shape.position, childJsPlumbInstance)
        }
        removerList += shape.onRemove.withRemover(shape.id) { s ->
            map[s]?.let { v ->
                remove(v)
            }
            removerList -= removerList.asSequence().filter { it.tag == s.id }.onEach { it.remove() }.toList()
        }
    }

    private fun drawTextShape(shape: TextShape, parent: ViewCollection<View<*>, *>): View<*> =
            parent.inputView(shape.property) {
                style(this, shape.style)
                events(this, shape, parent)

                autocomplete = shape.autocomplete

                onMouseDown {
                    focus()
                }
            }

    private fun drawIconShape(
            shape: IconShape,
            parent: ViewCollection<View<*>, *>,
            position: BoxShape.Position,
            jsPlumbInstance: JsPlumbInstance
    ): View<*> = parent.iconView(shape.property) {
        style(this, shape.style)
        events(this, shape, parent)

        if (position == BoxShape.Position.ABSOLUTE) {
            absolutePosition(this, shape, parent, jsPlumbInstance)
        }
    }

    override var zoom: Double
        get() = navigationView.zoom
        set(value) {
            navigationView.zoomTo(value)
        }

    override val onZoom: EventHandler<Double> = navigationView.onZoom

    override fun panTo(point: Point) {
        navigationView.panTo(point)
    }

    class ShapeItem(
            val view: View<*>,
            val jsPlumbInstance: JsPlumbInstance
    )
}