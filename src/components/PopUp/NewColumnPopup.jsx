import React from "react";
import { ImCross } from "react-icons/im";
import { FaPlus } from "react-icons/fa";

function NewColumnPopUp({handleClick}) {
  return (
    <>
      <section className="bg-[#2d2c37] absolute top-10 left-[35%] right-[30%] w-[450px] h-[85vh] p-2 rounded-xl">
        <button onClick={() => handleClick()}>
          <ImCross className="text-[#808fa4] text-lg" />
        </button>
        <form className="flex flex-col justify-start gap-3 px-6 py-3 text-slate-200">
          <h2 className="font-semibold text-xl">Add New Column</h2>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Name</label>
            <input
              className="bg-transparent border-2 border-[#403f4e] rounded-md p-2 "
              placeholder="eli column"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Columns</label>

            <div className="flex items-center justify-between">
              <input className="bg-transparent border-2 border-[#403f4e] rounded-md p-2 w-[90%]" />
              <ImCross className="w-[10%]" />
            </div>

            <button className="flex items-center justify-center gap-1 mt-4 py-2 bg-slate-50 text-[#795fc5] font-semibold rounded-2xl">
              <FaPlus className="text-[10px]" />
              <p className="text-sm">Add New Column</p>
            </button>
          </div>

          <button className="bg-[#795fc5] text-slate-50 font-semibold py-2 rounded-2xl">
            Save Changes
          </button>
        </form>
      </section>
    </>
  );
}

export default NewColumnPopUp;
