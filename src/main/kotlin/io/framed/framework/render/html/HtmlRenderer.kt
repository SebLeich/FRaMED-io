package io.framed.framework.render.html

import io.framed.framework.JsPlumb
import io.framed.framework.jsPlumbEndpointOptions
import io.framed.framework.pictogram.*
import io.framed.framework.render.Renderer
import io.framed.framework.util.Dimension
import io.framed.framework.util.EventHandler
import io.framed.framework.util.Point
import io.framed.framework.util.point
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

        this.viewModel.onLayerChange += layerChangeListener
        draw()
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

    private val jsPlumbInstance = JsPlumb.getInstance().apply {
        setContainer(navigationView.container.html)

        setZoom(1.0)
        bind("beforeDrop") { info: dynamic ->
            val source = getShapeById(info.sourceId as String)
            val target = getShapeById(info.targetId as String)

            if (source != null && target != null) {
                viewModel.onRelationDraw.fire(source to target)
            }

            return@bind false
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

    private fun updateViewBox() {
        val box = navigationView.viewBox
        println("update view box $box")
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
            println("load view box ${Dimension(left, top, width, height)}")
            navigationView.viewBox = Dimension(left, top, width, height)
        }
    }

    private fun draw() {
        draggableViews = emptyList()

        loadViewBox()
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

        // Draw children
        var map = viewModel.container.shapes.map {
            it to drawShape(it, navigationView.container, BoxShape.Position.ABSOLUTE)
        }.toMap()

        viewModel.container.onAdd {
            map += it to drawShape(it, navigationView.container, BoxShape.Position.ABSOLUTE)
        }
        viewModel.container.onRemove {
            map[it]?.let { v ->
                navigationView.container.remove(v)
            }
            this.deleteEndpoint(it)
        }

        viewModel.connections.forEach {
            drawRelation(it)
        }
        viewModel.onRelationAdd {
            drawRelation(it)
        }
        viewModel.onRelationRemove { r ->
            relations[r]?.let { relation ->
                relations -= r
                relation.remove()
            }
        }
    }

    /**
     * The model removes the endpoint for the given shape
     */
    fun deleteEndpoint(shape: Shape) {
        this.endpointMap[shape]?.let(jsPlumbInstance::deleteEndpoint)
    }

    /**
     * The map stores the endpoints for all shapes
     */
    private val endpointMap = mutableMapOf<Shape, HTMLElement>()

    operator fun get(shape: Shape): View<*> = shapeMap[shape] ?: throw IllegalArgumentException()

    private fun getShapeById(id: String): Shape? = shapeMap.entries.find { (_, view) ->
        view.id == id
    }?.key

    private var shapeMap: Map<Shape, View<*>> = emptyMap()

    private var relations: Map<Connection, HtmlRelation> = emptyMap()
    private fun drawRelation(relation: Connection) {
        relations += relation to HtmlRelation(relation, jsPlumbInstance, this)
    }

    private fun drawShape(shape: Shape, parent: ViewCollection<View<*>, *>, position: BoxShape.Position): View<*> {
        return when (shape) {
            is BoxShape -> drawBoxShape(shape, parent, position)
            is TextShape -> drawTextShape(shape, parent)
            is IconShape -> drawIconShape(shape, parent)
            else -> throw UnsupportedOperationException()
        }.also { view ->
            shapeMap += shape to view

            if (shape.acceptRelation) {
                this.endpointMap[shape] = jsPlumbInstance.addEndpoint(view.html, jsPlumbEndpointOptions {
                    anchors = arrayOf("Bottom")
                    isSource = true
                    isTarget = true
                    endpoint = "Dot"
                })
            }
        }
    }

    private fun style(view: View<*>, style: Style) {
        style.background?.let {
            view.html.style.background = it.toCss()
        }
        style.border?.let {
            view.html.style.border = it.toCss()
            if (it.radius > 0) {
                view.html.style.borderRadius = "${it.radius}px"
            }
        }
        style.padding?.let {
            view.html.style.padding = it.toCss()
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

    private fun events(view: View<*>, shape: Shape) {
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
    }

    private fun drawBoxShape(
            shape: BoxShape,
            parent: ViewCollection<View<*>, *>,
            position: BoxShape.Position
    ): View<*> = parent.listView {
        style(this, shape.style)
        events(this, shape)

        if (position == BoxShape.Position.ABSOLUTE) {
            left = shape.left ?: 0.0
            top = shape.top ?: 0.0
            classes += "absolute-view"

            shape.onPositionChange { force ->
                if (force) {
                    left = shape.left ?: 0.0
                    top = shape.top ?: 0.0

                    jsPlumbInstance.revalidate(html)
                }
            }

            draggable = View.DragType.ABSOLUTE
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
            }
            draggableViews += this
        } else {
            classes += "content-view"
        }

        var map = shape.shapes.map {
            it to drawShape(it, this, shape.position)
        }.toMap()

        shape.onAdd {
            map += it to drawShape(it, this, shape.position)
        }
        shape.onRemove {
            map[it]?.let { v ->
                remove(v)
            }
        }
    }

    private fun drawTextShape(shape: TextShape, parent: ViewCollection<View<*>, *>): View<*> =
            parent.inputView(shape.property) {
                style(this, shape.style)
                events(this, shape)

                autocomplete = shape.autocomplete

                onMouseDown {
                    focus()
                }
            }

    private fun drawIconShape(
            shape: IconShape,
            parent: ViewCollection<View<*>, *>
    ): View<*> = parent.iconView(shape.property) {
        style(this, shape.style)
        events(this, shape)

        left = shape.left ?: 0.0
        top = shape.top ?: 0.0
        classes += "absolute-view"

        shape.onPositionChange { force ->
            if (force) {
                left = shape.left ?: 0.0
                top = shape.top ?: 0.0

                jsPlumbInstance.revalidate(html)
            }
        }

        draggable = View.DragType.ABSOLUTE
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
        }
        draggableViews += this
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
}