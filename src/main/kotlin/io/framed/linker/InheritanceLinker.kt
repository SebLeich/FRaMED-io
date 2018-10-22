package io.framed.linker

import io.framed.framework.*
import io.framed.framework.pictogram.*
import io.framed.framework.util.*
import io.framed.framework.view.MaterialIcon
import io.framed.framework.view.contextMenu
import io.framed.framework.view.sidebar
import io.framed.model.Association
import io.framed.model.Inheritance

/**
 * @author lars
 */

class InheritanceLinker(
        override val model: Inheritance,
        override val manager: ConnectionManager
) : ConnectionLinker<Inheritance> {

    private val nameProperty = property(model::name, TrueValidator()).trackHistory()
    private val sourceCardinalityProperty = property(model::sourceCardinality).trackHistory()
    private val targetCardinalityProperty = property(model::targetCardinality).trackHistory()

    override val sourceIdProperty = property(model::sourceId).trackHistory()
    override val sourceShapeProperty = property(sourceIdProperty, getter = {
        manager.getShapeById(model.sourceId)!!
    }, setter = { Validator.Result.ERROR })

    override val targetIdProperty = property(model::targetId).trackHistory()
    override val targetShapeProperty = property(targetIdProperty, getter = {
        manager.getShapeById(model.targetId)!!
    }, setter = { Validator.Result.ERROR })

    override val pictogram = connection(sourceShapeProperty, targetShapeProperty) {
        labels += textShape(nameProperty) to 0.5
        labels += textShape(sourceCardinalityProperty, CardinalityPreset.STRING_VALUES) to -30.0
        labels += textShape(targetCardinalityProperty, CardinalityPreset.STRING_VALUES) to 31.0

        line(ConnectionLine.Type.RECTANGLE) {
            stroke = Color(0, 0, 0)
            strokeWidth = 1
        }

        sourceStyle = null
        targetStyle = connectionEnd {
            width = 20
            length = 20
            foldback = 1.0
            paintStyle {
                stroke = Color(0, 0, 0)
                strokeWidth = 1
                fill = Color(255, 255, 255)
            }
        }
    }

    override val sidebar = sidebar {
        title("Connection")

        group("General") {
            input("Name", nameProperty)
            input("Source cardinality", sourceCardinalityProperty)
            input("Target cardinality", targetCardinalityProperty)
        }
    }

    override val contextMenu = contextMenu {
        title = "Connection"
        addItem(MaterialIcon.DELETE, "Delete") {
            delete()
        }
    }

    init {
        LinkerManager.setup(this, InheritanceLinker)
    }

    companion object : LinkerInfoConnection {
        override val info = ConnectionInfo("Inheritance", MaterialIcon.ADD)

        override fun canStart(source: Linker<*, *>): Boolean {
            return source is ClassLinker || source is RoleTypeLinker || source is EventLinker
        }

        override fun canCreate(source: Linker<*, *>, target: Linker<*, *>): Boolean {
            return canStart(source) && (target is ClassLinker || target is RoleTypeLinker || target is EventLinker)
        }
    }
}