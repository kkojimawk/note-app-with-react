import React, { useState } from "react";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";

export type Note = {
  id: number;
  title: string;
  content: string;
  modDate: number;
};

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const onAddNote = (): void => {
    console.log("onAddNote");
    const newNote: Note = {
      id: 1,
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  return (
    <div className="grid h-screen grid-cols-12 bg-neutral-100">
      <Sidebar onAddNote={onAddNote} notes={notes} />
      <Main />
    </div>
  );
};

export default App;
