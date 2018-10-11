package io.framed.framework

import io.framed.framework.pictogram.Connection
import io.framed.framework.pictogram.ConnectionInfo
import io.framed.framework.pictogram.Pictogram
import io.framed.framework.pictogram.Shape
import io.framed.framework.util.History
import io.framed.framework.util.Property

/**
 * @author lars
 */
interface ConnectionLinker<M : ModelElement> : Linker<M, Connection> {
    override val parent: ModelLinker<*, *, *>

    val sourceIdProperty: Property<Long>
    val sourceShapeProperty: Property<Shape>

    val targetIdProperty: Property<Long>
    val targetShapeProperty: Property<Shape>

    fun canSwap(info: ConnectionInfo): Boolean =
            parent.canConnectionCreate(targetShapeProperty.get(), sourceShapeProperty.get()).contains(info)

    fun swap() {
        History.startGroup()
        val h = sourceIdProperty.get()
        sourceIdProperty.set(targetIdProperty.get())
        targetIdProperty.set(h)
        History.endGroup()
    }

    fun canConvert() = parent.canConnectionCreate(sourceShapeProperty.get(), targetShapeProperty.get())
    operator fun contains(shape: Shape): Boolean = sourceShapeProperty.get() == shape || targetShapeProperty.get() == shape
}