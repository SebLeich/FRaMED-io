package io.framed.framework.util

import io.framed.framework.pictogram.Layer
import io.framed.framework.pictogram.Shape

class HistoryLayer(
        val layer: Layer,
        val shape: Shape,
        var map: Map<Layer.Prop, Value>
) : HistoryItem {

    override val description: String = "Move shape ${shape.id}"

    constructor(layer: Layer, shape: Shape, prop: Layer.Prop, oldValue: Double?, newValue: Double?) :
            this(layer, shape, mapOf(prop to Value(oldValue, newValue)))

    override fun undo() {
        map.entries.forEach { (prop, value) ->
            layer[shape, prop] = value.oldValue
        }
        layer.onUpdate(shape)?.emit(true)
    }

    override fun redo() {
        map.entries.forEach { (prop, value) ->
            layer[shape, prop] = value.newValue
        }
        layer.onUpdate(shape)?.emit(true)
    }

    override fun canApply(item: HistoryItem): Boolean {
        return item is HistoryLayer && item.shape.id == shape.id
    }

    override fun apply(item: HistoryItem) {
        if (canApply(item)) {
            push((item as HistoryLayer).map)
        }
    }

    private fun push(newMap: Map<Layer.Prop, Value>) {
        newMap.entries.forEach { (prop, value) ->
            val item = map[prop]?.copy(newValue = value.newValue) ?: value
            map += prop to item
        }
    }

    data class Value(
            val oldValue: Double?,
            val newValue: Double?
    )
}
