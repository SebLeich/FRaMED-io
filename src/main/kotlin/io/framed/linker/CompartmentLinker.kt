package io.framed.linker

import Layouting
import de.westermann.kobserve.basic.FunctionAccessor
import de.westermann.kobserve.basic.join
import de.westermann.kobserve.basic.property
import de.westermann.kobserve.basic.validate
import io.framed.framework.*
import io.framed.framework.pictogram.*
import io.framed.framework.util.Point
import io.framed.framework.util.RegexValidator
import io.framed.framework.util.shapeBox
import io.framed.framework.util.trackHistory
import io.framed.framework.view.*
import io.framed.model.Attribute
import io.framed.model.Compartment
import io.framed.model.Method
import io.framed.model.Package
import kotlin.math.max
import kotlin.math.roundToInt

/**
 * @author lars
 */
class CompartmentLinker(
        override val model: Compartment,
        override val connectionManager: ConnectionManager,
        override val parent: ModelLinker<*, *, *>
) : ModelLinker<Compartment, BoxShape, TextShape> {

    override val nameProperty = property(model::name)
            .validate(RegexValidator.IDENTIFIER::validate)
            .trackHistory()
    override var name by nameProperty

    override val container: BoxShape = boxShape(BoxShape.Position.ABSOLUTE) { }

    private val attributes = shapeBox<Attribute, AttributeLinker>(model::attributes, connectionManager)
    private val methods = shapeBox<Method, MethodLinker>(model::methods, connectionManager)

    private val children = shapeBox(model::children, connectionManager) { box ->
        box.view = container
        box.onChildrenChange {
            updateSize()
        }
    }
    override val shapeLinkers: Set<ShapeLinker<*, *>>
        get() = children.linkers.toSet()

    override val subTypes: Set<String>
        get() = (attributes.linkers.flatMap { it.subTypes } + methods.linkers.flatMap { it.subTypes } + shapeLinkers.flatMap { it.subTypes }).toSet() + model.name

    private lateinit var autoLayoutBox: BoxShape
    override lateinit var borderBox: BoxShape
    override val borderShapes = mutableListOf<Shape>()

    override val pictogram = boxShape {
        boxShape {
            textShape(nameProperty)
            style {
                padding = box(8.0)
            }
        }

        attributes.view = boxShape {
            style {
                border {
                    style = Border.BorderStyle.SOLID
                    width = box(1.0, 0.0, 0.0, 0.0)
                    color = box(color(0, 0, 0, 0.3))
                }
                padding = box(8.0)
            }
        }
        methods.view = boxShape {
            style {
                border {
                    style = Border.BorderStyle.SOLID
                    width = box(1.0, 0.0, 0.0, 0.0)
                    color = box(color(0, 0, 0, 0.3))
                }
                padding = box(8.0)
            }
        }

        autoLayoutBox = boxShape(BoxShape.Position.VERTICAL) {
            style {
                border {
                    style = Border.BorderStyle.SOLID
                    width = box(1.0, 0.0, 0.0, 0.0)
                    color = box(color(0, 0, 0, 0.3))
                }
                padding = box(8.0)
                stretchHeight = true
            }
        }
        children.previewBox = autoLayoutBox

        borderBox = boxShape(BoxShape.Position.BORDER) {}

        children.conditionalContainer(borderBox) {
            it is ReturnEventLinker
        }

        style {
            background = linearGradient("to bottom") {
                add(color("#fffbd9"), 0.0)
                add(color("#fff7c4"), 1.0)
            }
            border {
                style = Border.BorderStyle.SOLID
                width = box(1.0)
                color = box(color(0, 0, 0, 0.3))
            }
        }

        resizeable = true

        layerProperty.onChange {
            updatePreviewType()
        }
    }

    override val preview = textShape(nameProperty)

    private val isCompleteViewStringProperty = pictogram.data("complete-view")
    private val isCompleteViewProperty = property(object : FunctionAccessor<Boolean> {
        val default: Boolean
            get() = pictogram.parent?.parent == null

        override fun set(value: Boolean): Boolean {
            if (value == default) {
                isCompleteViewStringProperty.value = null
            } else {
                isCompleteViewStringProperty.value = value.toString()
            }
            return true
        }

        override fun get(): Boolean {
            return isCompleteViewStringProperty.value?.toBoolean() ?: default
        }
    }, isCompleteViewStringProperty)

    private val isFlatPreviewStringProperty = pictogram.data("flat-preview")
    private val isFlatPreviewProperty = property(object : FunctionAccessor<Boolean> {
        override fun set(value: Boolean): Boolean {
            isFlatPreviewStringProperty.value = value.toString()
            updatePreviewType()
            return true
        }

        override fun get(): Boolean = isFlatPreviewStringProperty.value?.toBoolean() ?: false
    }, isFlatPreviewStringProperty)
    private var isFlatPreview by isFlatPreviewProperty

    private lateinit var sidebarActionsGroup: SidebarGroup
    private lateinit var sidebarPreviewGroup: SidebarGroup
    private lateinit var sidebarViewGroup: SidebarGroup

    private lateinit var sidebarAttributes: SidebarGroup
    private lateinit var sidebarAttributesAdd: ListView
    private val sidebarAttributesList: MutableList<SidebarEntry<Attribute>> = mutableListOf()
    private lateinit var sidebarMethods: SidebarGroup
    private lateinit var sidebarMethodsAdd: ListView
    private val sidebarMethodsList: MutableList<SidebarEntry<Method>> = mutableListOf()

    private fun updatePreviewType() {
        val shapeIsFlat = autoLayoutBox.position == BoxShape.Position.ABSOLUTE
        if (shapeIsFlat == isFlatPreview) return

        autoLayoutBox.position = if (isFlatPreview) {
            BoxShape.Position.ABSOLUTE
        } else {
            BoxShape.Position.VERTICAL
        }

        autoLayoutBox.clear()
        children.addAllPreviews()

        parent.redraw(this)
    }

    override val sidebar = sidebar {
        title("Compartment")
        group("General") {
            input("Name", nameProperty)

            /*
            button("Log") {
                fun log(shape: Shape): dynamic {
                    val h = js("{}")
                    h.type = shape::class.simpleName
                    h.width = shape.width
                    h.height = shape.height
                    h.id = shape.id?.toInt()
                    if (shape is BoxShape) {
                        h.children = js("[]")
                        for (s in shape.shapes) {
                            h.children.push(log(s))
                        }
                    }
                    return h
                }

                console.log(log(pictogram))
            }
            */
        }
        sidebarAttributes = group("Attributes") {
            collapse()
            sidebarAttributesAdd = custom {
                iconView(MaterialIcon.ADD)
                textView("Add attribute")
                onClick {
                    attributes += AttributeLinker(Attribute(), this@CompartmentLinker)
                }
            }
        }
        sidebarMethods = group("Methods") {
            collapse()
            sidebarMethodsAdd = custom {
                iconView(MaterialIcon.ADD)
                textView("Add method")
                onClick {
                    methods += MethodLinker(Method(), this@CompartmentLinker)
                }
            }
        }
        sidebarActionsGroup = group("Actions") {
            button("Auto layout") {
                Layouting.autoLayout(
                        container,
                        connectionManager.connections.asSequence().map { it.pictogram }.toSet()
                )
            }
            button("Reset zoom") {
                Application.renderer.zoom = 1.0
            }
            button("Reset pan") {
                Application.renderer.panTo(Point.ZERO)
            }
        }
        sidebarPreviewGroup = group("Preview") {
            checkBox("Flat preview", isFlatPreviewProperty, CheckBox.Type.SWITCH)
            button("Auto layout") {
                Layouting.autoLayout(
                        autoLayoutBox,
                        connectionManager.connections.asSequence().map { it.pictogram }.toSet()
                )
            }
        }
        sidebarViewGroup = group("Layout") {
            input("Position", pictogram.leftProperty.join(pictogram.topProperty) { left, top ->
                "x=${left.roundToInt()}, y=${top.roundToInt()}"
            })
            input("Size", pictogram.widthProperty.join(pictogram.heightProperty) { width, height ->
                "width=${width.roundToInt()}, height=${height.roundToInt()}"
            })
            checkBox("Autosize", pictogram.autosizeProperty, CheckBox.Type.SWITCH)
            checkBox("Complete view", isCompleteViewProperty, CheckBox.Type.SWITCH)
        }
    }

    override fun Sidebar.onOpen(event: SidebarEvent) {
        val isTargetRoot = event.target == pictogram
        sidebarActionsGroup.display = event.target == container
        sidebarViewGroup.display = isTargetRoot
        sidebarPreviewGroup.display = isTargetRoot
    }

    private lateinit var contextStepIn: ListView
    private lateinit var contextStepOut: ListView

    override val contextMenu = defaultContextMenu {
        contextStepIn = addItem(MaterialIcon.ARROW_FORWARD, "Step in") {
            ControllerManager.display(this@CompartmentLinker)
        }
        contextStepOut = addItem(MaterialIcon.ARROW_BACK, "Step out") {
            ControllerManager.display(parent)
        }
    }

    override fun remove(linker: ShapeLinker<*, *>) {
        if (linker is ClassLinker || linker is RoleTypeLinker || linker is EventLinker) {
            children -= linker
        } else super.remove(linker)
        checkBorder()
    }

    override fun add(model: ModelElement<*>): ShapeLinker<*, *> {
        val linker = LinkerManager.createLinker<ShapeLinker<*, *>>(model, this, connectionManager)
        when (linker) {
            is AttributeLinker -> attributes.add(linker)
            is MethodLinker -> methods.add(linker)
            else -> children += linker
        }
        checkBorder()
        return linker
    }

    override fun redraw(linker: ShapeLinker<*, *>) {
        children.redraw(linker)
        checkBorder()
    }

    override fun ContextMenu.onOpen(event: ContextEvent) {
        contextStepIn.display = event.target == pictogram
        contextStepOut.display = event.target != pictogram
    }


    private fun updateSidebarAttributes() {
        while (sidebarAttributesList.size > attributes.linkers.size) {
            val last = sidebarAttributesList.last()
            last.remove()
            sidebarAttributesList -= last
        }

        for (i in 0 until sidebarAttributesList.size) {
            sidebarAttributesList[i].bind(attributes.linkers[i])
        }

        for (i in sidebarAttributesList.size until attributes.linkers.size) {
            sidebarAttributesList += SidebarEntry(sidebarAttributes, attributes.linkers[i])
        }

        sidebarAttributes.toForeground(sidebarAttributesAdd)
    }

    private fun updateSidebarMethods() {
        while (sidebarMethodsList.size > methods.linkers.size) {
            val last = sidebarMethodsList.last()
            last.remove()
            sidebarMethodsList -= last
        }

        for (i in 0 until sidebarMethodsList.size) {
            sidebarMethodsList[i].bind(methods.linkers[i])
        }

        for (i in sidebarMethodsList.size until methods.linkers.size) {
            sidebarMethodsList += SidebarEntry(sidebarMethods, methods.linkers[i])
        }

        sidebarMethods.toForeground(sidebarMethodsAdd)
    }

    override fun updateSize() {
        // Get size of top views
        val headlineHeight = autoLayoutBox.topOffset - this.pictogram.topOffset

        // Set spacing to left and bottom border
        val spacing = 20

        // Calculate size boundaries
        var contentHeight = pictogram.height - headlineHeight - spacing
        var contentWidth = pictogram.width - spacing

        // Check boundaries of children and increase parent boundaries if necessary
        for (child in autoLayoutBox.shapes) {
            contentHeight = max(contentHeight, child.top + child.height)
            contentWidth = max(contentWidth, child.left + child.width)
        }

        // Set new boundaries
        pictogram.height = contentHeight + spacing + headlineHeight
        pictogram.width = contentWidth + spacing
    }

    /**
     * The model initializes a new instance of the linker
     */
    init {
        attributes.view.visibleProperty.bind(isCompleteViewProperty)
        methods.view.visibleProperty.bind(isCompleteViewProperty)
        children.view.visibleProperty.bind(isCompleteViewProperty)
        children.previewBox?.visibleProperty?.bind(isCompleteViewProperty)

        model.attributes.forEach { attributes += AttributeLinker(it, this) }
        model.methods.forEach { methods += MethodLinker(it, this) }
        for (element in model.children) {
            add(element)
        }

        LinkerManager.setup(this)
        connectionManager.addModel(this)

        connectionManager.onConnectionAdd { checkBorder() }
        connectionManager.onConnectionRemove { checkBorder() }
        checkBorder()

        updateSidebarAttributes()
        updateSidebarMethods()

        attributes.view.onAdd {
            updateSidebarAttributes()
        }
        attributes.view.onRemove {
            updateSidebarAttributes()
        }
        methods.view.onAdd {
            updateSidebarMethods()
        }
        methods.view.onRemove {
            updateSidebarMethods()
        }
    }

    companion object : LinkerInfoItem {
        override fun canCreateIn(container: ModelElement<*>): Boolean {
            return container is Package
        }

        override fun isLinkerFor(element: ModelElement<*>): Boolean = element is Compartment
        override fun isLinkerFor(linker: Linker<*, *>): Boolean = linker is CompartmentLinker

        override fun createModel(): ModelElement<*> = Compartment()
        override fun createLinker(model: ModelElement<*>, parent: Linker<*, *>, connectionManager: ConnectionManager?): Linker<*, *> {
            if (model is Compartment && parent is ModelLinker<*, *, *> && connectionManager != null) {
                return CompartmentLinker(model, connectionManager, parent)
            } else throw UnsupportedOperationException()
        }

        override val name: String = "Compartment"
    }
}
