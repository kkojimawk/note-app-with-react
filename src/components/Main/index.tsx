import React from "react";

export const Main: React.FC = () => {
  return (
    <div className="col-span-9 grid grid-flow-row grid-rows-2">
      <div className="grid grid-flow-row grid-rows-6 gap-3 p-4">
        <input className="row-span-1 w-full border p-3 text-2xl" type="text" />
        <textarea
          className="row-span-5 w-full resize-none border p-3 text-xl"
          placeholder="ノート内容を記入"
        ></textarea>
      </div>
      <div className="grid-rows-1 p-4">
        <div>タイトル</div>
        <div>ノート内容</div>
      </div>
    </div>
  );
};
