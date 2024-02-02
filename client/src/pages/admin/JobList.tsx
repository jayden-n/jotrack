import React from 'react';

import { useNavigate } from 'react-router-dom';
import Job from './Job';

const Jobs: React.FC = () => {
	const navigation = useNavigate()
	
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

				<Job 
				company={'Company Name'} position={'Front-end '} />
				<Job 
				company={'Company Name'} position={'Front-end '} />
				<Job 
				company={'Company Name'} position={'Front-end '} />
			</div>
		</div>
	);
}

export default Jobs
