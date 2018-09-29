package io.framed.linker

import io.framed.model.Attribute
import io.framed.picto.ContextEvent
import io.framed.picto.TextShape
import io.framed.picto.textShape
import io.framed.util.RegexValidator
import io.framed.util.Validator
import io.framed.util.property
import io.framed.view.ContextMenu
import io.framed.view.MaterialIcon
import io.framed.view.Sidebar
import io.framed.view.contextMenu

/**
 * @author lars
 */
class AttributeLinker(
        val attribute: Attribute,
        override val parent: ClassLinker
) : Linker<TextShape>(attribute, parent) {

    private val nameProperty = property(attribute::name, RegexValidator("[a-zA-Z]([a-zA-Z0-9])*".toRegex()))
    private val typeProperty = property(attribute::type, RegexValidator("[a-zA-Z]([a-zA-Z0-9])*".toRegex()))

    private val lineProperty = property(nameProperty, typeProperty,
            getter = {
                attribute.name + attribute.type.let {
                    if (it.isBlank()) "" else ": $it"
                }.trim()
            },
            setter = { input ->
                var state = State.NAME

                var name = ""
                var type = ""

                input.forEach { char ->
                    state = when (state) {
                        State.NAME -> {
                            when (char) {
                                ':' -> {
                                    State.TYPE
                                }
                                '(', ')' -> return@property Validator.Result.ERROR
                                else -> {
                                    name += char
                                    State.NAME
                                }
                            }
                        }
                        State.TYPE -> {
                            when (char) {
                                ':', '(', ')' -> return@property Validator.Result.ERROR
                                else -> {
                                    type += char
                                    State.TYPE
                                }
                            }
                        }
                    }
                }

                attribute.name = name.trim()
                attribute.type = type.trim()

                Validator.Result.VALID
            }
    )

    private enum class State {
        NAME, TYPE
    }

    override val picto = textShape(lineProperty) {
        hasSidebar = true
        hasContext = true
    }.also(this::initPicto)


    override fun createSidebar(sidebar: Sidebar) = sidebar.setup {
        title("Attribute")

        group("General") {
            input("Name", nameProperty)
            input("Type", typeProperty)
        }
    }

    override fun createContextMenu(event: ContextEvent): ContextMenu? = contextMenu {
        title = "Attribute: " + attribute.name
        addItem(MaterialIcon.DELETE, "Delete") {
            parent.removeAttribute(attribute)
        }
    }
}