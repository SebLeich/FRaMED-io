package io.framed.linker

import io.framed.framework.*
import io.framed.framework.pictogram.*
import io.framed.framework.util.*
import io.framed.framework.view.*
import io.framed.model.*
import kotlin.browser.document
import kotlin.browser.window

/**
 * @author lars
 */
class ContainerLinker(
        override val model: Container,
        override val connectionManager: ConnectionManager,
        override val parent: ModelLinker<*, *, *>? = null
) : ModelLinker<Container, BoxShape, TextShape> {

    override val nameProperty = property(model::name, RegexValidator("[a-zA-Z]([a-zA-Z0-9 ])*".toRegex())).trackHistory()
    override var name by nameProperty

    override val container: BoxShape = boxShape(BoxShape.Position.ABSOLUTE) { }

    private val classes = shapeBox<Class, ClassLinker>(model::classes, connectionManager) { box ->
        box.view = container
    }
    private val compartments = shapeBox<Compartment, CompartmentLinker>(model::compartments, connectionManager) { box ->
        box.view = container
    }
    private val containers = shapeBox<Container, ContainerLinker>(model::containers, connectionManager) { box ->
        box.view = container
    }
    private val roleTypes = shapeBox<RoleType, RoleTypeLinker>(model::roleTypes, connectionManager) { box ->
        box.view = container
    }
    private val events = shapeBox<Event, EventLinker>(model::events, connectionManager) { box ->
        box.view = container
    }

    override val shapeLinkers: Set<ShapeLinker<*, *>>
        get() = classes.linkers + containers.linkers + roleTypes.linkers + events.linkers + compartments.linkers

    override val pictogram = boxShape {
        boxShape {
            textShape(nameProperty)
            style {
                padding = box(8.0)
            }
        }

        val box = boxShape(BoxShape.Position.ABSOLUTE) {
            style {
                border {
                    style = Border.BorderStyle.SOLID
                    width = box(1.0, 0.0, 0.0, 0.0)
                    color = box(color(0, 0, 0, 0.3))
                }
                padding = box(8.0)
            }
        }
        classes.previewBox = box
        containers.previewBox = box
        roleTypes.previewBox = box
        //events.previewBox = box

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
    }

    override val listPreview = textShape(nameProperty)

    override val flatPreview = boxShape {
        textShape(nameProperty)

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
    }

    private lateinit var sidebarActionsGroup: SidebarGroup

    private val creationProperty = property(model.metadata::creationDate)
    private val creationStringProperty = property(creationProperty,
            getter = {
                creationProperty.get().toUTCString()
            }
    )

    private val modifiedProperty = property(model.metadata::modifiedDate)
    private val modifiedStringProperty = property(modifiedProperty,
            getter = {
                modifiedProperty.get().toUTCString()
            }
    )

    private val authorProperty = property(model.metadata::author)

    override val sidebar = sidebar {
        title("Container")
        group("General") {
            input("Name", nameProperty)
        }
        sidebarActionsGroup = group("Actions") {
            button("Auto layout") {
                //autoLayout()
            }
            button("Reset zoom") {
                //application.renderer.zoomTo(1.0)
            }
            button("Reset pan") {
                //application.renderer.panTo(Point.ZERO)
            }
        }

        group("Metadata") {
            input("Creation date", creationStringProperty)
            input("Modified date", modifiedStringProperty)
            input("Author", authorProperty)

            collapse()
        }
    }

    override fun Sidebar.onOpen(event: SidebarEvent) {
        val h = event.target != pictogram
        sidebarActionsGroup.visible = h
    }

    private lateinit var contextStepIn: ListView
    private lateinit var contextStepOut: ListView
    private lateinit var contextDelete: ListView

    override val contextMenu = contextMenu {
        title = "Package: $name"

        contextStepIn = addItem(MaterialIcon.ARROW_FORWARD, "Step in") {
            ControllerManager.display(this@ContainerLinker)
        }
        contextStepOut = addItem(MaterialIcon.ARROW_BACK, "Step out") {
            parent?.let(ControllerManager::display)
        }

        addItem(MaterialIcon.ADD, "Add class") { event ->
            this@ContainerLinker.classes += ClassLinker(Class(), this@ContainerLinker).also {
                setPosition.fire(SetPosition(it, event.position))
                it.focus()
            }
        }
        addItem(MaterialIcon.ADD, "Add package") { event ->
            containers += ContainerLinker(Container(), connectionManager, this@ContainerLinker).also {
                setPosition.fire(SetPosition(it, event.position))
                it.focus()
            }
        }

        contextDelete = addItem(MaterialIcon.DELETE, "Delete") { _ ->
            delete()
        }
    }

    override fun remove(linker: ShapeLinker<*, *>) {
        when (linker) {
            is ClassLinker -> classes -= linker
            is CompartmentLinker -> compartments -= linker
            is ContainerLinker -> containers -= linker
            is RoleTypeLinker -> roleTypes -= linker
            is EventLinker -> events -= linker

            else -> super.remove(linker)
        }
    }


    override fun add(model: ModelElement<*>) {
        when (model) {
            is Class -> classes += ClassLinker(model, this)
            is Compartment -> compartments += CompartmentLinker(model, connectionManager, this)
            is Container -> containers += ContainerLinker(model, connectionManager, this)
            is RoleType -> roleTypes += RoleTypeLinker(model, this)
            is Event -> events += EventLinker(model, this)
            else -> super.add(model)
        }
    }

    override fun ContextMenu.onOpen(event: ContextEvent) {
        contextStepIn.visible = event.target == pictogram
        contextStepOut.visible = event.target != pictogram && parent != null
        contextDelete.visible = parent != null
    }

    override val setPosition = EventHandler<SetPosition>()

    override fun dropShape(shape: Shape, target: Shape) {
        val elementLinker = getLinkerByShape(shape) ?: throw IllegalArgumentException()
        val targetLinker = getLinkerByShape(target) ?: throw IllegalArgumentException()

        val connectionCount = connectionManager.listConnections(elementLinker.id).size

        val elementName = elementLinker.model::class.simpleName?.toLowerCase() ?: "element"
        val targetName = targetLinker.model::class.simpleName?.toLowerCase() ?: "container"

        if (connectionCount > 0) {
            dialog {
                title = "Move $elementName to $targetName"
                contentView.textView("This will delete $connectionCount connection(s).")
                closable = true
                addButton("Move and delete", true) {
                    History.group {
                        remove(elementLinker)
                        targetLinker.add(elementLinker.model.copy())
                    }
                }
                addButton("Abort")
            }.open()
        } else {
            History.group {
                remove(elementLinker)
                targetLinker.add(elementLinker.model.copy())
            }
        }
    }

    /**
     * The model initializes a new instance of the linker
     */
    init {
        model.classes.forEach { classes += ClassLinker(it, this) }
        model.containers.forEach { containers += ContainerLinker(it, connectionManager, this) }
        model.roleTypes.forEach { roleTypes += RoleTypeLinker(it, this) }
        model.events.forEach { events += EventLinker(it, this) }
        model.compartments.forEach { compartments += CompartmentLinker(it, connectionManager, this) }

        LinkerManager.setup(this)
        connectionManager.addModel(this)
    }

    companion object : LinkerInfoItem {
        override fun canCreate(container: Linker<*, *>): Boolean = container is ContainerLinker
        override fun contains(linker: Linker<*, *>): Boolean = linker is ContainerLinker

        override val name: String = "Container"
    }
}
