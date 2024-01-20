import React from "react";
import NavBar from "./NavBar";
// import SearchIcon from '../../components/assets/search.png'
export default function Users() {
	return (
		<div>
			<div className="grid grid-cols-6 mt-10">
				<input
					type="search"
					placeholder="search by user name/id"
					className=" w-full  col-start-2 col-end-5 font-outfit text-normal text-sm px-3 py-3 rounded-l-xl "
				/>

				<button
					className="bg-btnPurple text-white font-outfit text-normal text-md w-full md:w-2/5
                        rounded-r-xl hover:opacity-90 ring-0.5 "
				>
					{/* <img src={SearchIcon}/> */}
				</button>
			</div>
		</div>
	);
}
