package io.framed.linker

import de.westermann.kobserve.property.property
import io.framed.framework.*
import io.framed.framework.linker.ConnectionLinker
import io.framed.framework.linker.Linker
import io.framed.framework.linker.LinkerInfoConnection
import io.framed.framework.linker.LinkerManager
import io.framed.framework.model.ModelConnection
import io.framed.framework.pictogram.*
import io.framed.framework.util.trackHistory
import io.framed.framework.view.FramedIcon
import io.framed.framework.view.MaterialIcon
import io.framed.framework.view.contextMenu
import io.framed.framework.view.sidebar
import io.framed.model.CreateRelationship

class CreateRelationshipLinker(
        override val model: CreateRelationship,
        override val manager: ConnectionManager
) : ConnectionLinker<CreateRelationship> {

    override val nameProperty = property(model::name).trackHistory()
    override val name by nameProperty

    override val sourceIdProperty = property(model::sourceId).trackHistory()
    override val targetIdProperty = property(model::targetId).trackHistory()

    override val pictogram = connection(sourceIdProperty, targetIdProperty) {
        line(ConnectionLine.Type.RECTANGLE) {
            stroke = Color(0, 0, 0)
            strokeWidth = 1

            dashArray = arrayOf(3, 3)
        }
        sourceStyle = null
        targetStyle = connectionEnd {
            width = 10
            length = 20
            foldback = 0.85
            paintStyle {
                stroke = Color(0, 0, 0)
                strokeWidth = 1
                fill = Color(0, 0, 0)
            }
        }
    }

    override val sidebar = sidebar {
        title("Create Relationship")

        group("General") {
            input("Name", nameProperty)
        }

        group("Structure") {
            button("Convert to destroy") {
                val source = sourceIdProperty.get()
                val target = targetIdProperty.get()
                val manager = manager
                delete()

                manager.createConnection(target, source, DestroyRelationshipLinker.info).focus()
            }
        }
    }

    override val contextMenu = contextMenu {
        title = "Connection"
        addItem(MaterialIcon.DELETE, "Delete") {
            delete()
        }
    }

    override fun updateLabelBindings() {
        val ids = pictogram.labels.mapNotNull { it.id }.distinct().toSet()
        if ("name" !in ids) {
            pictogram.labels += Label(id = "name", position = 0.5)
        }

        for (label in pictogram.labels) {
            if (label.textProperty.isBound) {
                label.textProperty.unbind()
            }
            when {
                label.id == "name" -> label.textProperty.bindBidirectional(nameProperty)
            }
        }

        super.updateLabelBindings()
    }

    init {
        LinkerManager.setup(this, RelationshipLinker)
    }

    companion object : LinkerInfoConnection {
        override val info = ElementInfo("Create Relationship", FramedIcon.EVENTRELATIONSHIP)

        override fun canStart(source: Linker<*, *>): Boolean {
            return source is EventLinker || source is ReturnEventLinker
        }

        override fun canCreate(source: Linker<*, *>, target: Linker<*, *>): Boolean {
            return (source is EventLinker && (target is RoleTypeLinker || target is SceneLinker) && source isSibling target) ||
                    (source is ReturnEventLinker && (target is RoleTypeLinker || target is SceneLinker) && source.parent.parent == target.parent)
        }

        override fun isLinkerFor(element: ModelConnection): Boolean = element is CreateRelationship
        override fun isLinkerFor(linker: Linker<*, *>): Boolean = linker is CreateRelationshipLinker

        override fun createModel(source: Long, target: Long): ModelConnection = CreateRelationship(source, target)
        override fun createLinker(model: ModelConnection, connectionManager: ConnectionManager): ConnectionLinker<*> =
                if (model is CreateRelationship) CreateRelationshipLinker(model, connectionManager)
                else throw IllegalArgumentException("Cannot create ${info.name} linker for model element ${model::class}")
    }
}