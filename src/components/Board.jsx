import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import NewColumnPopUp from "./PopUp/NewColumnPopup";
import TaskCard from "./Taskcard";
import { useStoreContext } from "../context/Store-context";

function Board() {
	const [showColumnPopup, setColumnPopup] = useState(false);
	// const [editColuData,] = useState()
	const [store] = useStoreContext();

	const onClick = () => setColumnPopup(true);
	const handleToggle = () => setColumnPopup(false);

	function colData(columnData, task) {
		console.log(columnData.id, task);
	}

	return (
		<>
			<section className="bg-[#22212c] h-auto min-h-[250px] w-3/4 flex flex-row flex-shrink-0 gap-8 overflow-x-auto p-8">
				{store.map((columnData, index) => (
					<div
						key={index}
						className=" p-4 w-[350px] rounded-lg border-dashed border-2 flex-shrink-0 border-[#808fa4]"
					>
						<div className="flex flex-row align-center justify-between">
							<p className="text-white text-3xl">{columnData.label}</p>
							<span className="text-2xl text-white">
								({columnData.tasks.length})
							</span>
						</div>

						{columnData.tasks.map((task) => (
							<div
								key={task.id}
								onClick={() => colData(columnData.id, task)}
							>
								<TaskCard
									key={task.id}
									taskData={task}
								/>
							</div>
						))}
					</div>
				))}

				<div className=" p-4 w-[350px] rounded-lg flex items-center justify-center bg-gradient-to-b from-[#30323d] to-transparent">
					<button
						type="submit"
						onClick={onClick}
						className="flex self-center justify-center gap-2 font-semibold text-2xl text-[#808fa4]"
					>
						<FaPlus className="text-2xl" />
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
