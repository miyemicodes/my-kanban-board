import React from "react";
import { BsGrid1X2 } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Sidebar() {
	return (
		<>
			<section className="flex flex-col gap-4 py-6 bg-[#2d2c37] w-2/4">
				<p className="px-5 text-[12px]  text-[#808fa4]">
					ALL BOARDS <span>(4)</span>
				</p>

				<ul className="flex flex-col gap-4 w-72 font-semibold">
					<li className="flex items-center gap-4 py-3 px-5 rounded-r-3xl text-[#808fa4] hover:text-white hover:bg-[#bba4fc] active:bg-[#795fc5] font-semibold">
						<BsGrid1X2 />
						<p>Platform Launch</p>
					</li>

					<li className="flex items-center gap-4 py-3 px-5 rounded-r-3xl text-[#808fa4] hover:text-white hover:bg-[#bba4fc] active:bg-[#795fc5] font-semibold">
						<BsGrid1X2 />
						<p>Platform Launch</p>
					</li>

					<li className="flex content-center justify-start gap-4 text-[#5f5fc8] py-3 px-5 hover:opacity-0.5 font-semibold">
						<button className="flex items-center justify-start gap-2  font-semibold">
							<BsGrid1X2 />
							<div className="flex items-center justify-start gap-1 font-semibold ">
								<FaPlus className="text-[11px]" />
								<p>Create New Board</p>
							</div>
						</button>
					</li>
				</ul>

				<div className="flex content-center justify-center bg-[#22212c] w-20">
					<BsFillMoonStarsFill />
					<button></button>
					<MdSunny />
				</div>
			</section>
		</>
	);
}

export default Sidebar;
