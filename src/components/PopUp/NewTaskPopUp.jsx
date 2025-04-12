import React, { useState } from "react";
// import { MdOutlineCancel } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { useStoreContext } from "./../../context/Store-context";

function NewPopUp({ handleClick }) {
	// let simplyfy things no time
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [subTasks, setSubTasks] = useState([]);
	//
	const [columnId, setColumnId] = useState("");
	const [store, setStore] = useStoreContext();

	const handleAddFormData = () => {
		const newFormData = {
			id: uuidv4(),
			name: "",
			isDone: false,
		};
		setSubTasks((prevSubTask) => [...prevSubTask, newFormData]);
	};

	const handleRemoveFormData = (index) => {
		const updatedFormDataArray = [...subTasks];
		updatedFormDataArray.splice(index, 1);
		setSubTasks(updatedFormDataArray);
	};

	const handleUpdateName = (index, name) => {
		const updatedFormDataArray = [...subTasks];
		updatedFormDataArray[index].name = name;
		setSubTasks(updatedFormDataArray);
	};

	const handleToggleIsDone = (index) => {
		const updatedFormDataArray = [...subTasks];
		updatedFormDataArray[index].isDone = !updatedFormDataArray[index].isDone;
		setSubTasks(updatedFormDataArray);
	};

	const handleSubmit = () => {
		const newFormData = {
			id: uuidv4(),
			title,
			description,
			subTasks,
			columnId,
		};
		console.log(newFormData);
		// Add a new task to a specific task store
		setStore((prevStoreData) =>
			prevStoreData.map((column) => {
				if (column.id === newFormData.columnId) {
					return {
						...column,
						tasks: [...column.tasks, newFormData],
					};
				}
				return column;
			})
		);
		handleClick();
	};

	return (
		<>
			<section className="bg-[#2d2c37] absolute top-10 left-[35%] right-[30%] w-[450px] h-[85vh] p-2 rounded-xl">
				<button
					onClick={() => handleClick()}
					className="p-2 hover:bg-slate-400 rounded-full group"
				>
					<ImCross className="text-[#808fa4] text-base group-hover:text-white" />
				</button>

				<form className="flex flex-col justify-start gap-3 px-6 py-3 text-slate-200">
					<h2 className="font-semibold text-xl">Add New Task</h2>

					<div className="flex flex-col gap-1">
						<label className="text-sm font-semibold">Title</label>
						<input
							className="bg-transparent border-2 border-[#403f4e] rounded-md p-2 "
							value={title}
							onChange={(e) => {
								setTitle(e.target.value);
							}}
						/>
					</div>

					<div className="flex flex-col gap-1">
						<label className="text-sm font-semibold">Description</label>
						<textarea
							className="bg-transparent border-2 border-[#403f4e] rounded-md p-2 "
							value={description}
							onChange={(e) => {
								setDescription(e.target.value);
							}}
						/>
					</div>

					<div className="flex flex-col gap-1">
						<label className="text-sm font-semibold">Subtasks</label>

						{subTasks.map((subT, index) => (
							<div
								className="flex items-center justify-between"
								key={subT.id}
							>
								<input
									className="bg-transparent border-2 border-[#403f4e] rounded-md p-2 w-[90%]"
									value={subT.name}
									onChange={(e) => handleUpdateName(index, e.target.value)}
								/>
								<button
									type="button"
									onClick={() => handleRemoveFormData(index)}
								>
									<ImCross className="w-[20px] h-[20px] flex-shrink-0" />
								</button>
							</div>
						))}

						<button
							className="flex items-center justify-center gap-1 mt-4 py-2 bg-slate-50 text-[#795fc5] font-semibold rounded-2xl"
							type="button"
							onClick={() => handleAddFormData()}
						>
							<FaPlus className="text-[10px]" />
							<p className="text-sm">Add New Subtask</p>
						</button>
					</div>

					<div className="flex flex-col gap-1">
						<label className="text-sm font-semibold">Status</label>
						<select
							className="bg-transparent border-2 border-[#403f4e] rounded-md p-2 outline-none"
							onChange={(e) => setColumnId(e.target.value)}
							value={columnId}
						>
							<option value="">Select Status</option>
							{store.map((columns) => (
								<option
									key={columns.id}
									value={columns.id}
								>
									{columns.label}
								</option>
							))}
						</select>
					</div>

					<button
						className="bg-[#795fc5] text-slate-50 font-semibold py-2 rounded-2xl"
						type="button"
						onClick={() => handleSubmit()}
					>
						Create Task
					</button>
				</form>
			</section>
		</>
	);
}

export default NewPopUp;
