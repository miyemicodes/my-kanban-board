import React from "react";
 
function TaskCard({taskData}) {
  return (
    <>
      <div className="bg-[#2d2c37] flex flex-col items-start justify-between p-5 mb-5 rounded-xl border border-[#403f4e] hover:opacity-30">
        <h2 className="text-lg font-semibold text-slate-200">
          {taskData.title}
        </h2>
        <p>
          {taskData.description}
        </p>

        <p className="text-[11px] font-medium text-slate-200 py-1">
          0 of {taskData.subTasks.length} subtask
        </p>
      </div>
    </>
  );
}

export default TaskCard;