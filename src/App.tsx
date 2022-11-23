import React, { useState, useEffect } from "react";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import uuid from "react-uuid";

export type Note = {
  id?: string | undefined;
  title?: string | undefined;
  content?: string | undefined;
  key?: string | undefined;
  modDate: number;
};

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | undefined>(undefined);

  const onAddNote = (): void => {
    const newNote: Note = {
      id: uuid(),
      title: "",
      content: "",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const onActiveNote = (id?: string): void => {
    const _activeNote = notes.find((note) => note.id === id);
    setActiveNote(_activeNote);
  };

  const onDeleteNote = (id?: string): void => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const onUpdateNote = (updatedNote: Note) => {
    //修正された新しいノートの配列を返す。
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setActiveNote(updatedNote);
    setNotes(updatedNotesArray);
  };
  console.log(activeNote?.modDate);

  useEffect(() => {
    if (!notes.length) {
      setActiveNote(undefined);
    }
  }, [notes]);

  return (
    <div className="grid h-screen grid-cols-12 bg-neutral-100">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        onActiveNote={onActiveNote}
      />
      <Main activeNote={activeNote} onUpdateNote={onUpdateNote} />
    </div>
  );
};

export default App;
