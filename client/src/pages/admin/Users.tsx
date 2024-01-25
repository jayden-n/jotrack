import React, { useState } from 'react';
import {Link} from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import UserSearch from './UserSearch';

const Users: React.FC = () => {
	const [search, setResult] = useState<boolean>(false)

	const displayData = () => {
		setResult(!search)
	}
	return (
		<div>
			<div className="grid grid-cols-7 mt-10">
				<input
					type="search"
					placeholder="search by user name/id"
					className=" w-full  col-start-2 col-end-6 font-outfit text-normal text-sm px-3 py-3 rounded-l-xl "
				/>

				 <button className="bg-btnPurple text-white font-outfit text-normal text-md w-full md:w-2/5
                        rounded-r-xl hover:opacity-90 ring-0.5 flex justify-center items-center"
						onClick={displayData}>
							
					<CiSearch className="text-3xl"/>
				</button>
			</div>
			{search && <UserSearch />}
		</div>
	);
}

export default Users;