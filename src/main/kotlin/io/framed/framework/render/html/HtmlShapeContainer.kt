package io.framed.framework.render.html

import de.westermann.kobserve.event.EventHandler
import de.westermann.kobserve.event.EventListener
import io.framed.framework.ConnlibInstance
//import io.framed.framework.JsPlumbInstance
import io.framed.framework.pictogram.BoxShape
import io.framed.framework.pictogram.IconShape
import io.framed.framework.pictogram.Shape
import io.framed.framework.pictogram.TextShape
import io.framed.framework.view.View
import io.framed.framework.view.ViewCollection

class HtmlShapeContainer(
        private val htmlRenderer: HtmlRenderer,
        private val containerShape: BoxShape,
        private val container: ViewCollection<View<*>, *>,
        connlibInstanceParent: ConnlibInstance? = null,
        private val parent: HtmlContentShape? = null
) {

    val connlibInstance = if (containerShape.position == BoxShape.Position.ABSOLUTE || connlibInstanceParent == null) {
        htmlRenderer.htmlConnections.createConnlib(container)
    } else connlibInstanceParent

    private val shapeMap: MutableMap<Shape, HtmlShape> = mutableMapOf()

    fun create(shape: Shape): HtmlShape = when (shape) {
        is BoxShape -> {
            if (shape.position == BoxShape.Position.BORDER && parent != null) {
                HtmlBorderShape(htmlRenderer, shape, parent, this, container, containerShape.position, connlibInstance)
            } else {
                HtmlBoxShape(htmlRenderer, shape, parent, this, container, containerShape.position, connlibInstance)
            }
        }
        is TextShape -> HtmlTextShape(htmlRenderer, shape, parent, this, container, connlibInstance)
        is IconShape -> HtmlIconShape(htmlRenderer, shape, parent, this, container, containerShape.position, connlibInstance)
        else -> throw UnsupportedOperationException()
    }

    private fun add(shape: Shape) {
        if (shape !in shapeMap) {
            val html = create(shape)
            shapeMap += shape to html
            if (shape.id != null) {
                htmlRenderer.shapeMap += shape to html
            }

            if (html is HtmlContentShape) {
                onParentMove(html.content.onParentMove::emit)
            }

            htmlRenderer.htmlConnections.addShape(shape)
        }
    }

    private fun remove(shape: Shape) {
        shapeMap.remove(shape)?.let { html ->
            if (html is HtmlContentShape) {
                onParentMove.removeListener(html.content.onParentMove::emit)
            }
            html.remove()
        }
        htmlRenderer.shapeMap -= shape
        htmlRenderer.htmlConnections.deleteShape(shape)
    }

    val onParentMove = EventHandler<Shape>()

    private val references: MutableList<EventListener<*>> = mutableListOf()

    init {
        containerShape.shapes.forEach(this::add)
        references += containerShape.onAdd.reference(this::add)
        references += containerShape.onRemove.reference(this::remove)
    }

    fun remove() {
        shapeMap.keys.forEach(this::remove)
        for (it in references) {
            it.detach()
        }
        references.clear()
    }
}