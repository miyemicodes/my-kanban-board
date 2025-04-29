import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import NewColumnPopUp from "./PopUp/NewColumnPopup";
import TaskCard from "./Taskcard";
import { useStoreContext } from "../context/Store-context";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Board() {
	const [showColumnPopup, setColumnPopup] = useState(false);
	// const [editColuData,] = useState()
	const [store, setStore] = useStoreContext();

	const onClick = () => setColumnPopup(true);
	const handleToggle = () => setColumnPopup(false);

	function colData(columnData, task) {
		console.log(columnData.id, task);
	}

	const onDragEnd = (result) => {
		const { source, destination } = result;
		if (!destination) return;

		// Create a column map to avoid repeated .find() calls
		const columnMap = Object.fromEntries(store.map((col) => [col.id, col]));

		// Same column movement
		if (source.droppableId === destination.droppableId) {
			const column = columnMap[source.droppableId];
			const newTasks = Array.from(column.tasks);
			const [movedTask] = newTasks.splice(source.index, 1);
			newTasks.splice(destination.index, 0, movedTask);

			const updatedStore = store.map((col) =>
				col.id === column.id ? { ...col, tasks: newTasks } : col
			);
			setStore(updatedStore);
			return;
		}

		// Different column movement
		const sourceCol = columnMap[source.droppableId];
		const destCol = columnMap[destination.droppableId];

		const sourceTasks = Array.from(sourceCol.tasks);
		const destTasks = Array.from(destCol.tasks);

		const [movedTask] = sourceTasks.splice(source.index, 1);
		destTasks.splice(destination.index, 0, movedTask);

		const updatedStore = store.map((col) => {
			if (col.id === sourceCol.id) return { ...col, tasks: sourceTasks };
			if (col.id === destCol.id) return { ...col, tasks: destTasks };
			return col;
		});

		setStore(updatedStore);
	};

	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				<section className="bg-[#22212c] h-auto min-h-[250px] w-3/4 flex flex-row shrink-0 gap-8 overflow-auto p-8 custom-remove-scrollbar">
					{store.map((columnData, index) => (
						<div
							key={index}
							className=" p-4 min-w-[300px] max-w-[350px] rounded-lg border-dashed border-2 shrink-0 border-[#808fa4a4] overflow-y-scroll custom-remove-scrollbar"
						>
							<div className="flex flex-row align-center justify-between mb-4 ">
								<p className="text-white text-lg">{columnData.label}</p>
								<span className="text-lg text-black bg-white rounded-full font-semibold px-3 py-1">
									{columnData.tasks.length}
								</span>
							</div>

							<Droppable droppableId={columnData.id}>
								{(provided) => (
									<div
										ref={provided.innerRef}
										{...provided.droppableProps}
									>
										{columnData.tasks.map((task, index) => (
											<Draggable
												key={task.id}
												draggableId={String(task.id)}
												index={index}
											>
												{(provided) => (
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														onClick={() => colData(columnData.id, task)}
														className="mb-4" // Optional spacing between tasks
													>
														<TaskCard taskData={task} />
													</div>
												)}
											</Draggable>
										))}

										{provided.placeholder}
									</div>
								)}
							</Droppable>
						</div>
					))}

					<div className=" p-4 min-w-[300px] rounded-lg flex items-center justify-center bg-gradient-to-b from-[#30323d] to-transparent">
						<button
							type="submit"
							onClick={onClick}
							className="flex items-center justify-center gap-3 font-semibold text-2xl text-[#808fa4] hover:text-white"
						>
							<FaPlus className="text-2xl" />
							<p> New Column</p>
						</button>
					</div>
				</section>

				{showColumnPopup ? (
					<NewColumnPopUp handleCloseModal={() => handleToggle()} />
				) : null}
			</DragDropContext>
		</>
	);
}

export default Board;
