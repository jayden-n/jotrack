import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const AddJob: React.FC = () => {
	const [companyName, setCompanyName] = useState<string>("");
	const [position, setPosition] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [requirements, setRequirements] = useState<string>("");

		const onAdd = (e: React.FormEvent<HTMLButtonElement>) => {
			e.preventDefault();
			if (
				!companyName ||
				!position ||
				!location ||
				!description ||
				!requirements
			) {
				alert('All fields must be filled');
			} else {
				setCompanyName('');
				setPosition('');
				setLocation('');
				setDescription('');
				setRequirements('');

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

		return (
			<div>
				<div className="md:mt-20 mt-10 mb-5 mx-4 md:mx-0">
					<form className="grid grid-col-1 md:grid-cols-9 ">
						<div className="md:col-start-2 md:col-end-5  row-span-full w-full">
							<input
								placeholder="Company Name"
								type="text"
								value={companyName}
								className="md:mb-10 md:p-4 mb-5 p-3 w-full border rounded-md shadow-md 
								shadow-black-500/50 border-gray"
								onChange={(e) => setCompanyName(e.target.value)}
							/>

							<input
								placeholder="Position"
								type="text"
								value={position}
								className=" md:mb-10 md:p-4 mb-5 w-full p-3 border rounded-md shadow-md 
								shadow-black-500/50  border-gray"
								onChange={(e) => setPosition(e.target.value)}
							/>

							<input
								placeholder="Location"
								type="text"
								value={location}
								className=" md:mb-10 md:p-4  mb-5 w-full p-3 border rounded-md shadow-md 
								shadow-black-500/50  border-gray"
								onChange={(e) => setLocation(e.target.value)}
							/>

							<textarea
								placeholder="Description..."
								value={description}
								className=" md:mb-0 mb-5 md:p-4 w-full md:h-2/5 p-3 border rounded-md 
								shadow-md shadow-black-500/50 border-gray"
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>

						<div className="md:col-start-6 md:col-end-9 ">
							<textarea
								placeholder="Requirements"
								value={requirements}
								className=" w-full p-3 border border-gray rounded-md 
								shadow-md shadow-black-500/50"
								rows={9}
								onKeyDown={bulletPoint}
								onChange={(e) => setRequirements(e.target.value)}
							/>
						</div>

						<div className="md:col-start-3 md:col-end-8 md:mt-0 mt-5  ">
							<button
								onClick={onAdd}
								className="bg-green font-outfit text-white text-normal text-xl w-full py-3
                                  rounded-lg hover:opacity-90 shadow-lg ring-1"
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