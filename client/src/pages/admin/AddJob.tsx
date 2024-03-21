import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

interface Job {
	id: number;
	title: string;
	description: string;
	position: string;
	requirements: string[];
 
	companyName: string;
 
	postalCode: string;
	street: string;
	city: string;
	province: string;
	country: string;
	dateTimePosted: Date;
 }

const AddJob: React.FC = () => {
	const [companyName, setCompanyName] = useState<string>("");
	const [position, setPosition] = useState<string>("");
	const [postalCode, setPostalCode] = useState<string>("");
	const [street, setStreet] = useState<string>("");
	const [city, setCity] = useState<string>("");
	const [province, setProvince] = useState<string>("");
	const [country, setCountry] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [requirements, setRequirements] = useState<Array<string>>([]);

	const navigation = useNavigate();

	const onAdd = async (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		// check for empty fields
		if (
			!companyName ||
			!position ||
			!postalCode || !street || !city || !country || !province ||
			!description ||
			!requirements
		) {
			toast.warning('All fields must be filled')
			
		} 
		else {
			try {
				const newJob = {
					companyName,
					position,
					postalCode, street, city,  province, country,
					description,
					requirements,
				}
			 await axios.post<Job>('http://localhost:8000/api/jobs', newJob);

			setCompanyName('');
			setPosition('');
			setPostalCode('');
			setStreet('');
			setCity('');
			setProvince('');
			setCountry('');
			setDescription('');
			setRequirements([]);

			toast.success('Job successfully added.');
		}catch (error) {
			console.log(error)
			toast.error(`Failed to add job.`);
			}
		}
	}

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

		const divStyle = ' md:flex md:flex-wrap  gap-x-5 pt-5 '
		const btnStyle = 'font-outfit text-white text-normal text-center md:text-xl  md:px-5 md:py-1 rounded-lg p-2 hover:opacity-90 shadow-xl ring-1'

		return (
			<div>
				<div className="sm:grid sm:grid-cols-1 md:mt-10 mt-10 mb-5 mx-4 md:mx-0">
					<form className="md:mx-10 rounded-lg shadow-xl bg-white p-12  	">
						<div className=" ">
							<div className={`${divStyle} `}>
								{/* ================================= Company Name =================================*/}
								<input
									placeholder="Company Name"
									type="text"
									value={companyName}
									className=" md:p-4 p-3 mb-5  w-full border rounded-md shadow-md 
									shadow-black-500/50 border-gray"
									onChange={(e) => setCompanyName(e.target.value)}
								/>

							</div>

								{/* ================================= Position =================================*/}
								<input
									placeholder="Position"
									type="text"
									value={position}
									className=" md:p-4 mb-5  w-full p-3 border rounded-md shadow-md 
									shadow-black-500/50  border-gray"
									onChange={(e) => setPosition(e.target.value)}
								/>
						
								{/* ================================= Location =================================*/}
								
							<div className={`${divStyle}`}>
								{/* ================ Street ================*/}
								<input
									placeholder="Street"
									type="text"
									value={street}
									className="md:p-4 mb-5  w-full p-3 border rounded-md shadow-md shadow-black-500/50 border-gray"
									onChange={(e) => setStreet(e.target.value)}
								/>

								
								{/* ================ City ================*/}
								<input
									placeholder="City"
									type="text"
									value={city}
									className="md:p-4 mb-5 md:w-1/2 w-full p-3 border rounded-md shadow-md shadow-black-500/50 border-gray"
									onChange={(e) => setCity(e.target.value)}
								/>
								{/* ================ Postal Code ================*/}
								<input
										placeholder="Postal Code"
										type="text"
										value={postalCode}
										className="md:p-4 mb-5 md:w-[48%] w-full p-3 border rounded-md shadow-md shadow-black-500/50 border-gray"
										onChange={(e) => setPostalCode(e.target.value)}
									/>
						
								{/* ================ Country ================*/}
								<input
									placeholder="Country"
									type="text"
									value={country}
									className="md:p-4 mb-5 md:w-1/2 w-full p-3 border rounded-md shadow-md shadow-black-500/50 border-gray"
									onChange={(e) => setCountry(e.target.value)}
								/>
								
								{/* ================ Province ================*/}
								<input
									placeholder="Province"
									type="text"
									value={province}
									className="md:p-4 mb-5 md:w-[48%] w-full p-3 border rounded-md shadow-md shadow-black-500/50 border-gray"
									onChange={(e) => setProvince(e.target.value)}
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
								value={requirements.join('\n')}
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
							<button onClick={() => {navigation('../jobs')}} className={`bg-cancelRed ${btnStyle}`}>
								Cancel
							</button>
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

export default AddJob