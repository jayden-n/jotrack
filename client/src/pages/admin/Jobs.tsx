import React from 'react';

import { Link } from 'react-router-dom';
import JobList from './JobList';

const Jobs: React.FC = () => {
	const jobStyle = ''
	return (
		<div>
			<div className="grid grid-cols-5 mt-10">
				<p className="text-purple font-outfit text-normal md:text-2xl text-2xl col-span-2 text-center ">
					Job Listings
				</p>
				<Link
					to={'/admin/jobs/add'}
					className="bg-green font-outfit text-white text-normal md:text-xl text-center py-1
                        rounded-md shadow-xl hover:opacity-90  text-lg ring-0.5 md:ml-0 md:col-end-6 col-end-5 ml-10 w-full md:w-2/5 "
				>
					Add Job
				</Link>

				<JobList 
				company={'Company Name'} position={'Front-end '} />
				<JobList 
				company={'Company Name'} position={'Front-end '} />
				<JobList 
				company={'Company Name'} position={'Front-end '} />
			</div>
		</div>
	);
}

export default Jobs
