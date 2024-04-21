import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { FaPlus } from 'react-icons/fa';
import { useStoreContext } from './../../context/Store-context';
import { addNewColumn } from './../../helpers/column';

function NewColumnPopUp({ handleCloseModal }) {
  const [columnName, setColumnName] = useState('');
  // sweet thing about context
  const [_store, setStore] = useStoreContext();

  const handleAddNewColumn = () => {
    setStore((previousDataInStore) =>
      addNewColumn(previousDataInStore, columnName)
    );
    handleCloseModal();
  };

  return (
    <div className='fixed z-[999] inset-0 bg-gray-700/40 flex items-center justify-center'>
      <section className='bg-[#2d2c37] w-[450px] h-auto p-2 rounded-xl'>
        <button
          onClick={() => handleCloseModal()}
          className='p-2 hover:bg-slate-400 rounded-full group'
        >
          <ImCross className='text-[#808fa4] text-base group-hover:text-white' />
        </button>
        <form className='flex flex-col justify-start gap-3 px-6 py-3 text-slate-200'>
          <h2 className='font-semibold text-xl'>Add New Column</h2>

          <div className='flex flex-col gap-1'>
            <label className='text-sm font-semibold'>Name</label>
            <input
              className='bg-transparent border-2 border-[#403f4e] rounded-md p-2'
              placeholder='eli column'
              value={columnName}
              onChange={(e) => {
                setColumnName(e.target.value);
              }}
            />
          </div>

          {/*  <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Columns</label>

            <div className="flex items-center justify-between">
              <input className="bg-transparent border-2 border-[#403f4e] rounded-md p-2 w-[90%]" />
              <ImCross className="w-[10%]" />
            </div>

            <button className="flex items-center justify-center gap-1 mt-4 py-2 bg-slate-50 text-[#795fc5] font-semibold rounded-2xl">
              <FaPlus className="text-[10px]" />
              <p className="text-sm">Add New Column</p>
            </button>
          </div> */}

          <button
            className='bg-[#795fc5] text-slate-50 font-semibold py-2 rounded-2xl'
            onClick={() => handleAddNewColumn()}
          >
            Save Changes
          </button>
        </form>
      </section>
    </div>
  );
}

export default NewColumnPopUp;
