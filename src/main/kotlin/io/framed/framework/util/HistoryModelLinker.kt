package io.framed.framework.util

import io.framed.framework.ControllerManager
import io.framed.framework.ModelLinker

class HistoryModelLinker(
        val oldModel: ModelLinker<*, *, *>,
        val newModel: ModelLinker<*, *, *>
) : HistoryItem {
    override val description: String = "CheckBox tab"

    override fun undo() {
        ControllerManager.display(oldModel)
    }

    override fun redo() {
        ControllerManager.display(newModel)
    }
}