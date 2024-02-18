import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import AllJobsComponent from '../../components/user/AllJobsComponent';
import { debounce } from 'lodash';

const LandingPage: React.FC = () => {
	const [searchText, setSearchText] = useState<string>('');

	// The debounced handle search function
	const debouncedSearch = debounce((inputText: string) => {
		setSearchText(inputText);
	}, 300); // Adjust debounce time as needed

	const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputText = e.target.value.trim();
		debouncedSearch(inputText);
	};

	return (
		<div className="flex flex-col items-center mt-20 h-screen bg-E6E0E0">
			{/* Title */}
			<h2 className="text-4xl font-orienta text-gray text-center mb-6">FIND SUITABLE JOB OPPORTUNITIES</h2>
			{/* Search bar */}
			<form className="flex justify-center mt-8 w-full px-4 lg:px-0">
				<div className="flex items-center w-full max-w-4xl border border-slate400 shadow-lg bg-white">
					<input
						onChange={handleSearchText}
						className="w-full text-lg text-slate500 pl-4 py-3 placeholder:italic placeholder:text-slate300 focus:outline-none focus:ring-1"
						placeholder="job title or location"
						type="text"
						name="search"
					/>
					<div className="flex items-center justify-center bg-purple p-4">
						<CiSearch className="text-white h-7 w-7" />
					</div>
				</div>
			</form>


			{/* Conditionally render AllJobsComponent based on searchText */}
			{searchText && <AllJobsComponent searchText={searchText} />}
		</div>
	);
};

export default LandingPage;
