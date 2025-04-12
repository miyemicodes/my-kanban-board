import React from "react";

function TaskCard({ taskData }) {
	return (
		<>
			<div className="bg-[#2d2c37] flex flex-col items-start justify-between gap-3 p-3 mb-4 rounded-xl border border-[#403f4e] hover:opacity-30">
				<h2 className="text-lg text-slate-200 font-mono ">{taskData.title}</h2>
				<p className="text-slate-300 text-sm">{taskData.description}</p>

				<p className="text-xs font-medium text-slate-200 py-3 text-end ">
					0 of {taskData.subTasks.length} subtask
				</p>
			</div>
		</>
	);
}

export default TaskCard;
