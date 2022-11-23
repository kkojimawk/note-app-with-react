import React from "react";
import { Note } from "../../App";

type Props = {
  activeNote: Note | undefined;
};
export const Main: React.FC<Props> = ({ activeNote }) => {
  return (
    <div className="col-span-9 grid grid-flow-row grid-rows-2">
      {activeNote ? (
        <>
          <div className="grid grid-flow-row grid-rows-6 gap-3 p-4">
            <input
              className="row-span-1 w-full border p-3 text-2xl"
              type="text"
            />
            <textarea
              className="row-span-5 w-full resize-none border p-3 text-xl"
              placeholder="ノート内容を記入"
            ></textarea>
          </div>
          <div className="grid-rows-1 p-4">
            <div>{activeNote?.title}</div>
            <div>{activeNote?.content}</div>
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
