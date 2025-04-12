import React from "react";
import { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import NewPopUp from "./PopUp/NewTaskPopUp";

function Header() {
	const [showNewTaskPopUp, setNewTaskPopUp] = useState(false);

	const onClick = () => setNewTaskPopUp(true);
	const handleToggle = () => setNewTaskPopUp(false);

	return (
		<>
			<section className="bg-[#2d2c37] text-white flex justify-between w-full  px-5 py-7 sticky">
				<div className="w-1/4 ">
					<h1 className="text-2xl font-semibold ">
						ELI'S <span>BOARD</span>
					</h1>
				</div>

				<div className="flex items-center justify-end text-sm gap-4 w-3/4">
					<button
						type="submit"
						onClick={onClick}
						className="flex items-center justify-center gap-2 bg-[#795fc5] rounded-3xl px-3 py-2 font-semibold hover:bg-[#af9af0]"
					>
						<FaPlus />
						<p>Add New Task</p>
					</button>

					<button>
						<FaEllipsisVertical className="text-2xl text-[#6a6977]" />
					</button>
				</div>
			</section>

			{showNewTaskPopUp ? (
				<NewPopUp handleClick={() => handleToggle()} />
			) : null}
		</>
	);
}

export default Header;
