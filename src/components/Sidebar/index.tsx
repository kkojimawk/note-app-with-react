import React from "react";
import { Note } from "../../App";

type Props = {
  notes: Note[];
  onAddNote: () => void;
  onDeleteNote: (id: string) => void;
  activeNote: Note["id"] | null;
  setActiveNote: (id: string) => void;
};
export const Sidebar: React.FC<Props> = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  return (
    <div className="col-span-3 border-r border-slate-700 bg-white">
      <div className="flex justify-between border-b border-black p-6">
        <h1 className="text-4xl">ノート</h1>
        <button className="text-xl text-blue-500" onClick={onAddNote}>
          追加
        </button>
      </div>
      {notes.map((note) => (
        <div
          key={note.id}
          className={`overflow-scroll border-b border-black p-6 transition-colors hover:bg-red-50 ${
            activeNote === note.id ? "bg-red-100" : ""
          }`}
          onClick={() => setActiveNote(note.id)}
        >
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">{note.title}</h2>
            <button
              className="text-lg text-blue-500"
              onClick={() => onDeleteNote(note.id)}
            >
              削除
            </button>
          </div>
          <p className="py-2">{note.content}</p>
          <p className="text-md opacity-80">
            最後の修正日:
            {new Date(note.modDate).toLocaleDateString("ja-JP", {
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
        </div>
      ))}
    </div>
  );
};
