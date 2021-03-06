package io.framed.framework.render.html

import de.westermann.kobserve.event.EventListener
import io.framed.framework.*
import io.framed.framework.pictogram.*
import io.framed.framework.util.Dimension
import io.framed.framework.util.Point
import io.framed.framework.util.point
import io.framed.framework.view.View
import io.framed.framework.view.ViewCollection
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.MouseEvent

/**
 * @author lars
 */
@Suppress("UNUSED")
class HtmlRelation(
        val connection: Connection,
        val renderer: HtmlRenderer
) : Selectable {

    override val id: Long = connection.id!!
    override val pictogram: Pictogram = connection

    override val left: Double
        get() = connections.last().canvas.style.left.replace("px", "").toDouble()
    override val top: Double
        get() = connections.last().canvas.style.top.replace("px", "").toDouble()
    override val width: Double
        get() = connections.last().canvas.width.baseVal.value.toDouble()
    override val height: Double
        get() = connections.last().canvas.height.baseVal.value.toDouble()

    override val positionView: View<*>? = null

    override fun select() {
        isSelected = true
        connection.onSidebar.emit(SidebarEvent(connection))
        draw()
    }

    override fun unselect() {
        isSelected = false
        draw()
    }

    override fun selectArea(area: Dimension) {
        val old = isSelected
        isSelected = Dimension(left, top, width, height) in area
        if (isSelected != old) {
            draw()
        }
    }

    override var isSelected: Boolean = false
    override val isDraggable: Boolean = false

    override fun drag(delta: Point) {
        // Ignore
    }

    override fun setZoom(zoom: Double) {
        // Ignore
    }

    override fun highlightSnap() {
        // Ignore
    }

    override fun unhighlightSnap() {
        // Ignore
    }

    override fun isChildOf(container: ViewCollection<View<*>, *>): Boolean = false

    private val references: MutableList<EventListener<*>> = mutableListOf()
    private var connections: List<ConnlibConnection> = emptyList()
    private var labels: List<HtmlLabel> = emptyList()

    fun remove(complete: Boolean = false) {
        if (this::connlibInstance.isInitialized) {
            connections.forEach {
                connlibInstance.deleteConnection(it)
            }
            connections = emptyList()
        }

        for (label in labels) {
            label.remove()
        }
        labels = emptyList()

        if (complete) {
            references.forEach {
                it.detach()
            }
            references.clear()
            renderer.selectable -= this
            renderer.htmlConnections.relations -= connection
        }
    }

    fun draw() {
        val sourceId = connection.source.value
        val targetId = connection.target.value

        val instance = renderer.htmlConnections.findInstance(listOf(sourceId, targetId))
        val box = renderer.htmlConnections.connlibList.first { it.first == instance }.second

        remove()

        connlibInstance = instance
        container = box

        val sourceViewNew = renderer[sourceId, connlibInstance] ?: return
        val targetViewNew = renderer[targetId, connlibInstance] ?: return

        if (!this::sourceView.isInitialized || sourceView != sourceViewNew) {
            sourceView = sourceViewNew
        }
        if (!this::targetView.isInitialized || targetView != targetViewNew) {
            targetView = targetViewNew
        }

        val zIndex = listOfNotNull(sourceView.zIndex, targetView.zIndex).max() ?: 0

        // Click area
        connections += connlibInstance.connect(connlibConnect {
            source = sourceView.html
            target = targetView.html

            anchors = arrayOf(sourceAnchorString, targetAnchorString)
            connector = arrayOf("Flowchart", object {
                val cornerRadius = 5
            })
            endpoint = "Blank"

            paintStyle = connlibPaintStyle {
                stroke = "transparent"
                strokeWidth = 15
            }
        }).also {
            it.canvas.style.zIndex = zIndex.toString()
        }

        connection.lines.dropLast(1).forEach { line ->
            connections += connlibInstance.connect(createConnlibConnection(line, sourceView, targetView)).also {
                it.canvas.style.zIndex = zIndex.toString()
            }
        }
        connection.lines.lastOrNull()?.let { line ->
            val init = createConnlibConnection(line, sourceView, targetView)
            createEndStyle(init)
            connections += connlibInstance.connect(init).also {
                it.canvas.style.zIndex = zIndex.toString()
            }
        }

        connections.forEach { c ->
            if (connection.hasSidebar) {
                c.bind("mousedown") { _, event ->
                    if (!event.defaultPrevented && event is MouseEvent) {
                        event.preventDefault()
                        event.stopPropagation()
                        renderer.selectView(this, event.ctrlKey, false)
                    }
                }
            }

            if (connection.hasContextMenu) {
                c.bind("contextmenu") { _, event ->
                    (event as? MouseEvent)?.let { e ->
                        e.stopPropagation()
                        e.preventDefault()
                        val diagram = renderer.snapPoint(renderer.navigationView.mouseToCanvas(e.point())).point
                        connection.onContextMenu.emit(ContextEvent(e.point(), diagram, connection))
                    }
                }
            }
        }
    }

    private fun createConnlibConnection(line: ConnectionLine, sourceView: View<*>, targetView: View<*>) = connlibConnect {
        source = sourceView.html
        target = targetView.html

        anchors = arrayOf(sourceAnchorString, targetAnchorString)

        connector = when (line.type) {
            ConnectionLine.Type.STRAIGHT -> {
                arrayOf("Straight")
            }
            ConnectionLine.Type.RECTANGLE -> {
                arrayOf("Flowchart", object {
                    val cornerRadius = 5
                })
            }
        }
        endpoint = "Blank"

        paintStyle = connlibPaintStyle {
            stroke = if (isSelected) "#2980b9" else line.paintStyle.stroke.toCss()
            strokeWidth = line.paintStyle.strokeWidth

            dashstyle = line.paintStyle.dashArray.joinToString(" ")
        }
    }

    private fun createEndStyle(connectInit: ConnlibConnectInit) {
        labels = connection.labels.map { label ->
            HtmlLabel(renderer, label, container).also {
                it.view.onMouseDown { event ->
                    if (!event.defaultPrevented) {
                        event.stopPropagation()
                        connection.onSidebar.emit(SidebarEvent(connection))
                    }
                }

                it.focus = isSelected
            }
        }

        var overlays = labels.map { label ->
            arrayOf("Custom", object {
                val create: (dynamic) -> HTMLElement = {
                    label.view.html
                }
                val cssClass = label.view.classes.toString()
                val location = label.label.positionProperty.value
            })
        }

        connection.sourceStyle?.let { style ->
            overlays += listOf(arrayOf("Arrow", object {
                val width = style.width
                val length = style.length
                val foldback = style.foldback
                val paintStyle = connlibPaintStyle {
                    stroke = style.paintStyle.stroke.toCss()
                    strokeWidth = style.paintStyle.strokeWidth
                    fill = style.paintStyle.fill.toCss()
                }
                val location = style.length * style.foldback + 1
            }))
        }

        connection.targetStyle?.let { style ->
            overlays += listOf(arrayOf("Arrow", object {
                val width = style.width
                val length = style.length
                val foldback = style.foldback
                val paintStyle = connlibPaintStyle {
                    stroke = style.paintStyle.stroke.toCss()
                    strokeWidth = style.paintStyle.strokeWidth
                    fill = style.paintStyle.fill.toCss()
                }
                val location = 1
            }))
        }

        connectInit.overlays = overlays.toTypedArray()
    }

    @Suppress("UNCHECKED_CAST")
    private val sourceAnchorString: Array<Any>
        get() {
            val array = if (this::sourceView.isInitialized) {
                renderer.htmlConnections.anchors[sourceView]?.map { it.connlib }?.toTypedArray()
            } else null
            return (array ?: ALL_SIDES_ARRAY) as Array<Any>
        }

    @Suppress("UNCHECKED_CAST")
    private val targetAnchorString: Array<Any>
        get() {
            val array = if (this::targetView.isInitialized) {
                renderer.htmlConnections.anchors[targetView]?.map { it.connlib }?.toTypedArray()
            } else null
            return (array ?: ALL_SIDES_ARRAY) as Array<Any>
        }

    lateinit var sourceView: View<*>
    lateinit var targetView: View<*>
    lateinit var connlibInstance: ConnlibInstance
    lateinit var container: ViewCollection<View<*>, *>

    init {
        draw()

        references += connection.source.onChange.reference {
            draw()
        }
        references += connection.target.onChange.reference {
            draw()
        }
        references += connection.onStyleChange.reference {
            draw()
        }

        renderer.selectable += this
        setZoom(renderer.zoom)
    }

    companion object {
        val ALL_SIDES = setOf(RelationSide.TOP, RelationSide.LEFT, RelationSide.BOTTOM, RelationSide.RIGHT)
        val ALL_SIDES_ARRAY = ALL_SIDES.flatMap { side ->
            listOf(
                    side.connlib.map { if (it == 0.5) 0.25 else it }.toTypedArray(),
                    side.connlib,
                    side.connlib.map { if (it == 0.5) 0.75 else it }.toTypedArray()
            )
        }.toTypedArray()
    }
}

enum class RelationSide(val connlib: Array<Double>) {
    TOP(arrayOf(0.5, 0.0, 0.0, -1.0)),
    LEFT(arrayOf(0.0, 0.5, -1.0, 0.0)),
    BOTTOM(arrayOf(0.5, 1.0, 0.0, 1.0)),
    RIGHT(arrayOf(1.0, 0.5, 1.0, 0.0))
}
