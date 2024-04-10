import React from "react";
import { FaPlus } from "react-icons/fa";

function Board() {
  return (
    <>
      <section className="bg-[#22212c] h-auto min-h-[250px]  w-3/4 flex flex-row flex-nowrap gap-8 overflow-w-auto p-8">
        <div className=" p-4 w-[350px] rounded-lg border-dashed border-2 border-[#808fa4]"></div>

        <div className=" p-4 w-[350px] rounded-lg flex items-center justify-center bg-gradient-to-b from-[#30323d] to-transparent">
          <button className="flex self-center justify-center gap-2 font-semibold text-2xl text-[#808fa4]">
            <FaPlus className="text-2xl" />
            <p> New Column</p>
          </button>
        </div>
      </section>
    </>
  );
}

export default Board;
