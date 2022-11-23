import React, { useState } from "react";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import uuid from "react-uuid";

export type Note = {
  id: string;
  title: string;
  content: string;
  modDate: number;
};

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | undefined>(undefined);

  const onAddNote = (): void => {
    const newNote: Note = {
      id: uuid(),
      title: "新しいノート1",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onActiveNote = (id: string): void => {
    const _activeNote = notes.find((note) => note.id === id);
    setActiveNote(_activeNote);
  };

  const onDeleteNote = (id: string): void => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="grid h-screen grid-cols-12 bg-neutral-100">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        onActiveNote={onActiveNote}
      />
      <Main activeNote={activeNote} />
    </div>
  );
};

export default App;
