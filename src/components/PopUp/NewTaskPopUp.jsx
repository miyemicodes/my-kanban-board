import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { FaPlus } from "react-icons/fa";

function NewPopUp() {
  return (
    <>
      <section className="bg-[#2d2c37] absolute top-10 left-[35%] right-[30%] w-[480px] h-[85vh]">
        <MdOutlineCancel />

        <form className="flex flex-col justify-start">
          <h2>Add New Task</h2>

          <div>
            <label>Title</label>
            <input />
          </div>

          <div>
            <label>Description</label>
            <input />
          </div>

          <div>
            <label>Subtasks</label>
            <div>
              <input />
              <ImCross />
            </div>

            <button>
              <FaPlus />
              <p>Add New Subtask</p>
            </button>
          </div>

          <div>
            <label>Status</label>
            <div>
              <span>None</span>
              <select>
                <option>None</option>
              </select>
            </div>
          </div>

          <button>create Task</button>
        </form>
      </section>
    </>
  );
}

export default NewPopUp;
