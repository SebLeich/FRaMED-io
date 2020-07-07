package io.framed.framework.render.html

import io.framed.framework.ConnlibInstance
//import io.framed.framework.JsPlumbInstance
import io.framed.framework.pictogram.Shape
import io.framed.framework.view.View
import io.framed.framework.view.ViewCollection

abstract class HtmlContentShape(
        htmlRenderer: HtmlRenderer,
        shape: Shape,
        parent: HtmlContentShape?,
        parentContainer: HtmlShapeContainer,
        container: ViewCollection<View<*>, *>,
        connlibInstance: ConnlibInstance?
) : HtmlShape(htmlRenderer, shape, parent, parentContainer, container, connlibInstance) {
    abstract val content: HtmlShapeContainer
}