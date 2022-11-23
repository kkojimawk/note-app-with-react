import React from "react";
import { Note } from "../../App";
import ReactMarkdown from "react-markdown";

type Props = {
  activeNote: Note | undefined;
  onUpdateNote: (updatedNote: Note) => void;
};
export const Main: React.FC<Props> = ({ activeNote, onUpdateNote }) => {
  const onEditNote = (key: string, value: string) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
    console.log(activeNote?.modDate);
  };

  return (
    <div className="col-span-9 grid grid-flow-row grid-rows-2">
      {activeNote ? (
        <>
          <div className="grid grid-flow-row grid-rows-6 gap-3 p-4">
            <input
              className="row-span-1 w-full border p-3 text-2xl"
              type="text"
              value={activeNote.title}
              onChange={(e) => {
                onEditNote("title", e.target.value);
              }}
            />
            <textarea
              className="row-span-5 w-full resize-none border p-3 text-xl"
              placeholder="ノート内容を記入"
              onChange={(e) => {
                onEditNote("content", e.target.value);
              }}
              value={activeNote.content}
            ></textarea>
          </div>
          <div className="grid-rows-1 bg-neutral-300 p-4">
            <div className="py-2 text-3xl font-bold">{activeNote.title}</div>
            <ReactMarkdown className="py-2 text-xl">
              {activeNote.content!}
            </ReactMarkdown>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <h1 className="text-4xl">ノートを選択してください</h1>
        </div>
      )}
    </div>
  );
};
