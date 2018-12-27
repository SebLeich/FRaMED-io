package io.framed.framework.view

import de.westermann.kobserve.EventHandler
import de.westermann.kobserve.Property
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLLabelElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener

/**
 * Represents html input element.
 *
 * @author lars
 */
class CheckBox(label: String, property: Property<Boolean>) : View<HTMLDivElement>("div") {

    private val checkbox = View.createView<HTMLInputElement>("input")
    private val htmlLabel = View.createView<HTMLLabelElement>("label")

    var label: String
        get() = htmlLabel.textContent ?: ""
        set(value) {
            htmlLabel.textContent = value
        }

    val onChange = EventHandler<Boolean>()

    var type = Type.CHECKBOX
        set(value) {
            Type.values().forEach {
                classes -= "type-${it.name.toLowerCase()}"
            }
            classes += "type-${value.name.toLowerCase()}"
            field = value
        }

    var state: Boolean
        get() = checkbox.checked
        set(value) {
            if (value != checkbox.checked) {
                checkbox.checked = value
            }
        }

    init {
        html.appendChild(checkbox)
        html.appendChild(htmlLabel)

        checkbox.type = "checkbox"
        checkbox.addEventListener("click", object : EventListener {
            override fun handleEvent(event: Event) {
                onChange.emit(state)
            }
        })

        val id = "checkbox-${lastId++}"
        classes += "type-${Type.CHECKBOX.name.toLowerCase()}"

        checkbox.id = id
        htmlLabel.htmlFor = id

        this.label = label

        state = property.value
        property.onChange {
            state = property.value
        }
        onChange(property::set)
    }

    companion object {
        private var lastId = 0
    }

    enum class Type {
        CHECKBOX, SWITCH
    }
}

fun ViewCollection<in CheckBox, *>.checkBox(label: String, property: Property<Boolean>, init: CheckBox.() -> Unit) =
        CheckBox(label, property).also(this::append).also(init)