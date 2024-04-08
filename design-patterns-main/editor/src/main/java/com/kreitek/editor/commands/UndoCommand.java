package com.kreitek.editor.commands;

import com.kreitek.editor.Command;
import com.kreitek.editor.ConsoleEditor;

import java.util.ArrayList;

public class UndoCommand implements Command
{
    private final ConsoleEditor editor;
    public UndoCommand(ConsoleEditor editor) {
        this.editor = editor;
    }

    @Override
    public void execute(ArrayList<String> documentLines)
    {
        if (editor.getSavedStatesSize() > 0) {
            editor.setState(editor.getLatestSavedState());
        }
    }

}
