import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import NewColumnPopUp from "./PopUp/NewColumnPopup";
import TaskCard from "./Taskcard";
import { useStoreContext } from '../context/Store-context';

function Board() {
  const [showColumnPopup, setColumnPopup] = useState(false);
  const [store] = useStoreContext();

  const onClick = () => setColumnPopup(true);
  const handleToggle = () => setColumnPopup(false);

  return (
    <>
      <section className='bg-[#22212c] h-auto min-h-[250px] w-3/4 flex flex-row flex-shrink-0 gap-8 overflow-x-auto p-8'>
        {store.map((storeData, index) => (
          <div
            key={index}
            className=' p-4 w-[350px] rounded-lg border-dashed border-2 flex-shrink-0 border-[#808fa4]'
          >
            {storeData.tasks.map((tasks) => (
              <TaskCard key={tasks.id} taskData={tasks} />
            ))}
          </div>
        ))}

        <div className=' p-4 w-[350px] rounded-lg flex items-center justify-center bg-gradient-to-b from-[#30323d] to-transparent'>
          <button
            type='submit'
            onClick={onClick}
            className='flex self-center justify-center gap-2 font-semibold text-2xl text-[#808fa4]'
          >
            <FaPlus className='text-2xl' />
            <p> New Column</p>
          </button>
        </div>
      </section>

      {showColumnPopup ? (
        <NewColumnPopUp handleCloseModal={() => handleToggle()} />
      ) : null}
    </>
  );
}

export default Board;
