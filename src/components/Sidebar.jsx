import React from "react";
import { BsGrid1X2 } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Sidebar() {
  return (
    <>
      <section className="bg-[#2d2c37] w-1/4">
        <p className="text-base text-[#808fa4]">
          ALL BOARDS <span>(4)</span>
        </p>
        <ul className="">
          <li className="flex content-center justify-start gap-4 text-[#808fa4] hover:text-white font-semibold">
            <BsGrid1X2 />
            <p>Platform Launch</p>
          </li>
          <li className="flex content-center justify-start gap-4 text-[#808fa4] hover:text-white font-semibold">
            <BsGrid1X2 />
            <p>Platform Launch</p>
          </li>
          <li className="flex content-center justify-start gap-4 text-[#808fa4] hover:text-white font-semibold">
            <button className="flex content-center justify-start gap-2 text-[#808fa4] hover:text-white font-semibold">
              <BsGrid1X2 />
              <div className="flex items-center justify-start gap-1 font-semibold">
                <FaPlus className="text-[11px]" />
                <p>Create New Board</p>
              </div>
            </button>
          </li>
        </ul>
        <div className="flex bg-[#22212c]">
          <BsFillMoonStarsFill />
          <button></button>
          <MdSunny />
        </div>
      </section>
    </>
  );
}

export default Sidebar;
