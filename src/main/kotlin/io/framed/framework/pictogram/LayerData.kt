package io.framed.framework.pictogram

import de.westermann.kobserve.Property
import de.westermann.kobserve.basic.property
import io.framed.framework.util.trackHistory
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient

@Serializable
data class LayerData(
        private var left: Double = 0.0,
        private var top: Double = 0.0,
        private var width: Double = 0.0,
        private var height: Double = 0.0,
        private var autosize: Boolean = true,
        private val data: MutableMap<String, String> = mutableMapOf()
) {

    @Transient
    val leftProperty = property(this::left).trackHistory()

    @Transient
    val topProperty = property(this::top).trackHistory()

    @Transient
    val widthProperty = property(this::width).trackHistory()

    @Transient
    val heightProperty = property(this::height).trackHistory()

    @Transient
    val autosizeProperty = property(this::autosize).trackHistory()

    @Transient
    val propertyMap: MutableMap<String, Property<String?>> = mutableMapOf()

    fun data(name: String): Property<String?> {
        return propertyMap.getOrPut(name) {
            val prop = property(data[name]).trackHistory()
            prop.onChange {
                val value = prop.value
                if (value == null) {
                    data -= name
                } else {
                    data[name] = value
                }
            }
            prop
        }
    }
}