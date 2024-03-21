import React, { useState } from 'react';
import {Link} from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import UserData from '../../components/admin/UserData';
import { toast } from 'react-toastify';

const UserSearch: React.FC = () => {
	const [searchID, setSearchID] = useState<number | null>(null)
	const [inputValue, setInputValue] = useState<string>('');

	const handleSearch = () => {
        const id = parseInt(inputValue);
        if (!isNaN(id)) {
            setSearchID(id);	
        } else {
			setSearchID(null);
            toast.error('Please enter a number')
        }
    };

   
	return (
		<div>
			<div className="grid grid-cols-7 mt-10">
				<input
					type="search"
					placeholder="search by user id"
					className=" w-full  col-start-2 col-end-6 font-outfit text-normal text-md p-4 rounded-l-xl "
					value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
				/>

				 <button className="bg-btnPurple text-white font-outfit text-normal text-md w-full md:w-2/5
                        rounded-r-xl hover:opacity-90 ring-0.5 flex justify-center items-center"
						onClick={handleSearch}>
							
					<CiSearch className="text-3xl"/>
				</button>
			</div>
			{searchID !== null && <UserData searchID={searchID} />}
		</div>
	);
}

export default UserSearch;