import React from "react";
import { Note } from "../../App";

type Props = {
  notes: Note[];
  onAddNote: () => void;
  onDeleteNote: (id?: string) => void;
  activeNote: Note | undefined;
  onActiveNote: (id?: string) => void;
};

export const Sidebar: React.FC<Props> = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  onActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

  return (
    <div className="col-span-3 flex h-screen flex-col border-r border-slate-700 bg-white">
      <div className="flex justify-between border-b border-black p-6">
        <h1 className="text-4xl">ノート</h1>
        <button className="text-xl text-blue-500" onClick={onAddNote}>
          追加
        </button>
      </div>
      <div className="overflow-auto">
        {sortedNotes.map((note) => (
          <div
            key={note.id}
            className={`border-b border-black p-6 transition-colors hover:bg-red-50 ${
              activeNote && activeNote.id === note.id ? "bg-red-100" : ""
            }`}
            onClick={() => onActiveNote(note.id)}
          >
            <div className="flex justify-between">
              <h2 className="text-ellipsis text-xl font-bold">{note.title}</h2>
              <button
                className="text-lg text-blue-500"
                onClick={() => onDeleteNote(note.id)}
              >
                削除
              </button>
            </div>
            <p className="text-ellipsis py-2">{note.content}</p>
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
    </div>
  );
};
