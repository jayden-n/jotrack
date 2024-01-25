import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

export default function Jobs() {
	return (
		<div>
			<div className="grid grid-cols-5 mt-10">
				<p className="text-purple font-outfit text-normal text-2xl text-center ">
					Job Listings
				</p>
				<Link
					to={'/admin/jobs/add'}
					className="bg-green font-outfit text-white text-normal text-center py-1
                        rounded-md  hover:opacity-90 ring-0.5 col-end-6  w-full md:w-2/5 "
				>
					Add Job
				</Link>
			</div>
		</div>
	);
}
