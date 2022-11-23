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
  const [notes, setNotes] = useState<Note[]>(
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes")!)
      : []
  );
  const [activeNote, setActiveNote] = useState<Note | undefined>(undefined);

  const onAddNote = (): void => {
    const newNote: Note = {
      id: uuid(),
      title: "",
      content: "",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    setActiveNote(newNote);
  };

  const onActiveNote = (id?: string): void => {
    const _activeNote = notes.find((note) => note.id === id);
    setActiveNote(_activeNote);
  };

  const onDeleteNote = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id?: string
  ): void => {
    e.stopPropagation();
    const _notes = notes.filter((note) => note.id !== id);
    setNotes(_notes);

    if (activeNote && activeNote.id === id) {
      setActiveNote(undefined);
    }
  };

  const onUpdateNote = (updatedNote: Note) => {
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

  useEffect(() => {
    if (!notes.length) {
      setActiveNote(undefined);
    }
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    setActiveNote(notes[0]);
  }, []);

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
