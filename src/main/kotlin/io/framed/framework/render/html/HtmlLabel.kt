package io.framed.framework.render.html

import de.westermann.kobserve.ListenerReference
import io.framed.framework.pictogram.Label
import io.framed.framework.pictogram.Shape
import io.framed.framework.util.Point
import io.framed.framework.util.async
import io.framed.framework.view.*

class HtmlLabel(
        private val htmlRenderer: HtmlRenderer,
        val label: Label,
        val parent: ViewCollection<View<*>, *>,
        boundShape: Shape? = null
) {

    val listeners = mutableListOf<ListenerReference<*>>()

    fun remove() {
        for (reference in listeners) {
            reference.remove()
        }
        listeners.clear()
    }

    val view: View<*> = InputView(label.textProperty).apply {
        classes += "html-label"
        autocomplete = label.autocomplete
        sizeMatchText()

        marginLeft = label.leftProperty.value
        marginTop = label.topProperty.value

        label.leftProperty.onChange.reference {
            marginLeft = label.leftProperty.value
        }?.let(listeners::add)
        label.topProperty.onChange.reference {
            marginTop = label.topProperty.value
        }?.let(listeners::add)

        allowDrag = true
        onMouseDown { event ->
            event.stopPropagation()
            htmlRenderer.deselectAll()
            parent.toForeground(this)
            dragZoom = htmlRenderer.zoom

            var markView = true
            async(200) {
                if (markView) {
                    htmlRenderer.directDragView(View.DragEvent(Point.ZERO, true), this, parent)
                }
            }

            var reference: ListenerReference<*>? = null
            reference = Root.onMouseUp.reference {
                markView = false
                reference?.remove()
                htmlRenderer.stopDragView()
            }
        }
        onClick { event ->
            event.stopPropagation()
        }
        onDblClick { event ->
            event.stopPropagation()
            htmlRenderer.selectView(this, event.ctrlKey, true)
        }
        onDrag { e ->
            val event = htmlRenderer.directDragView(e, this, parent)

            label.leftProperty.value = marginLeft + event.delta.x
            label.topProperty.value = marginTop + event.delta.y

            if (event.direct) {
                (htmlRenderer.selectedViews - this).forEach {
                    it.performDrag(event.indirect)
                }
            }
        }
    }

    init {
        if (boundShape != null) {
            boundShape.topProperty.onChange.reference {
                view.top = boundShape.top
            }?.let(listeners::add)
            boundShape.leftProperty.onChange.reference {
                view.left = boundShape.left
            }?.let(listeners::add)
        }
    }
}
