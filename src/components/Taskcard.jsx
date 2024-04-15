import React from "react";
 
function TaskCard({taskData}) {
  return (
    <>
      <div className="bg-[#2d2c37] px-2 py-3">
        <h2 className="text-lg font-semibold text-slate-200">
          {taskData.title}
        </h2>

        <p className="text-sm text-slate-200">
          0 of {taskData.subtasks.length} subtask
        </p>
      </div>
    </>
  );
}

export default TaskCard;