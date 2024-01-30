import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const AddJob: React.FC = () => {
	const [companyName, setCompanyName] = useState<string>("");
	const [position, setPosition] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [requirements, setRequirements] = useState<Array<string>>([]);

		const onAdd = (e: React.FormEvent<HTMLButtonElement>) => {
			e.preventDefault();
			if (
				!companyName ||
				!position ||
				!location ||
				!description ||
				!requirements
			) {
				toast.warning('All fields must be filled')
				
			} else {
				setCompanyName('');
				setPosition('');
				setLocation('');
				setDescription('');
				setRequirements([]);

				toast.success('Job successfully added.');
			}
		};

		const bulletPoint = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
			const bullet = '\u2022';
			const value = e.currentTarget.value.length;
			if (value > 0) {
				if (e.key == 'Enter') {
					e.preventDefault();
					e.currentTarget.value = `${e.currentTarget.value}\n${bullet} `;
				} else if (value === 1) {
					e.currentTarget.value = `${bullet} ${e.currentTarget.value}`;
				}
			}
		};

		const divStyle = 'md:mb-4 md:flex md:flex-wrap  gap-x-12 pt-5 '
		const btnStyle = 'font-outfit text-white text-normal text-center md:text-xl  md:px-5 md:py-1 rounded-lg p-2 hover:opacity-90 shadow-xl ring-1'

		return (
			<div>
				<div className="sm:grid sm:grid-cols-1 md:mt-10 mt-10 mb-5 mx-4 md:mx-0">
					<form className="md:mx-10 rounded-lg shadow-xl bg-white p-12  overflow-hidden	">
						<div className=" ">
							<div className={`${divStyle} `}>
								{/* ================================= Company Name =================================*/}
								<input
									placeholder="Company Name"
									type="text"
									value={companyName}
									className=" md:p-4 p-3 mb-5 md:w-1/4 w-full border rounded-md shadow-md 
									shadow-black-500/50 border-gray"
									onChange={(e) => setCompanyName(e.target.value)}
								/>

								{/* ================================= Position =================================*/}
								<input
									placeholder="Position"
									type="text"
									value={position}
									className=" md:p-4 mb-5 md:w-1/3 w-full p-3 border rounded-md shadow-md 
									shadow-black-500/50  border-gray"
									onChange={(e) => setPosition(e.target.value)}
								/>
							
								{/* ================================= Location =================================*/}
								<input
									placeholder="Location"
									type="text"
									value={location}
									className="  md:p-4  mb-5  md:w-2/6	 w-full p-3 border rounded-md shadow-md 
									shadow-black-500/50  border-gray"
									onChange={(e) => setLocation(e.target.value)}
								/>
							</div>

							{/* ================================= Description =================================*/}
							<div className={`${divStyle}`}>
								<textarea
									placeholder="Description..."
									value={description}
									className="  md:p-4 w-full md:h-44 p-3 border rounded-md 
									shadow-md shadow-black-500/50 border-gray"
									onChange={(e) => setDescription(e.target.value)}
								/>
							</div>
						</div>	

						{/* ================================= Requirements =================================*/}
						<div className={`${divStyle}`}>
							<textarea
								placeholder="Requirements"
								value={requirements}
								className=" w-full p-3 border border-gray rounded-md 
								shadow-md shadow-black-500/50"
								rows={9}
								onKeyDown={bulletPoint}
								onChange={(e) => setRequirements(e.target.value.split('\n'))}
							/>
						</div>
						
						<hr className="my-5 md:mt-20 border-t border-grey500"/>
						{/* ================================= Buttons =================================*/}
						<div className=" flex md:mt-0 mt-5 md:justify-end gap-5 justify-center ">
							<Link to={'/admin/jobs'} className={`bg-cancelRed ${btnStyle}`}>
								Cancel
							</Link>
							<button
								onClick={onAdd}
								className={`bg-green ${btnStyle}` }
							>
								Add Job
							</button>
						</div>
					</form>
				</div>
			</div>
		
	);
}

export default AddJob;