import React from "react";

function TaskCard({ taskData }) {
	return (
		<>
			<div className="bg-[#2d2c37] flex flex-col items-start justify-between gap-3 p-3 mb-4 rounded-xl border border-[#403f4e] min-w-[300px] max-w-[350px]">
				<h2 className="text-lg text-slate-200 font-mono ">{taskData.title}</h2>
				<p className="text-slate-300 text-sm text-wrap">
					{taskData.description}
				</p>
				<p className="text-xs font-medium text-slate-200 py-3 text-end ">
					{taskData.subTasks?.filter((st) => st.isDone).length || 0} of
					{taskData.subTasks?.length || 0} subtask
				</p>
				<div className="grid grid-cols-2 items-center gap-2 w-full">
					<button className="px-2 py-1 bg-slate-300 rounded hover:font-semibold hover:opacity-70 ">
						Edit
					</button>
					<button className="px-2 py-1 font-semibold text-white bg-black rounded hover:opacity-70">
						Delete
					</button>
				</div>
			</div>
		</>
	);
}

export default TaskCard;
