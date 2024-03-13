import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import AllJobsComponentAdmin from './AllJobsComponentAdmin';

const Jobs: React.FC = () => {
	const navigation = useNavigate()
	const [searchText, setSearchText] = useState<string>('');

	
	const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputText = e.target.value.trim();
		setSearchText(inputText);
	};
	return (
		<div>
			<div className="grid grid-cols-5 mt-10">
				<p className="text-purple font-outfit text-normal md:text-2xl text-2xl col-span-2 text-center ">
					Job Listings
				</p>
				<button
					onClick={() => {navigation('../add')}}
					className="bg-green font-outfit text-white text-normal md:text-xl text-center py-1
                        rounded-md shadow-xl hover:opacity-90  text-lg ring-0.5 md:ml-0 md:col-end-6 col-end-5 ml-10 w-full md:w-2/5 "
				>
					Add Job
				</button>
				<div className='col-span-3 col-start-2 flex items-center mt-10'>
				<input
					type="search"
					onChange={handleSearchText}
					placeholder="search job..."
					className=" w-full font-outfit text-normal text-md h-[60px] p-4 rounded-l-xl "
				/>

				 <button className="bg-btnPurple text-white font-outfit text-normal text-md w-[70px] h-[60px] 
                        rounded-r-xl hover:opacity-90 ring-0.5 flex justify-center items-center"
						>
							
					<CiSearch className="text-3xl"/>
				</button>
			</div>
	
				<AllJobsComponentAdmin searchText={searchText} />
		
			</div>
		</div>
	);
}

export default Jobs
