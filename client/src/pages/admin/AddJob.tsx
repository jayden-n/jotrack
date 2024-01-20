import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function AddJob() {
	const [companyName, setCompanyName] = useState<string>("");
	const [position, setPosition] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [requirements, setRequirements] = useState<string>("");

	const onAdd = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();

  const onAdd = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(!companyName || !position || !location || !description || !requirements){
      alert('All fields must be filled')
    }
   else{
    setCompanyName('');
    setPosition('');
    setLocation('');
    setDescription('');
    setRequirements('');

    alert('Job Added.')//replace later with a popup
   } 
  }

  const bulletPoint = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		const bullet = "\u2022";
		const value = e.currentTarget.value.length;
		if (value > 0) {
			if (e.key == "Enter") {
				e.preventDefault();
				e.currentTarget.value = `${e.currentTarget.value}\n${bullet} `;
			} else if (value === 1) {
				e.currentTarget.value = `${bullet} ${e.currentTarget.value}`;
			}
		}
	};

	return (
		<div>
			<div className="mt-20 mb-5">
				<form className="grid grid-cols-9 ">
					<div className="col-start-2 col-end-5 row-span-full w-full">
						<input
							placeholder="Company Name"
							type="text"
							value={companyName}
							className="mb-5 w-full p-3 border border-gray"
							onChange={(e) => setCompanyName(e.target.value)}
						/>

						<input
							placeholder="Position"
							type="text"
							value={position}
							className="mb-5 w-full p-3 border border-gray"
							onChange={(e) => setPosition(e.target.value)}
						/>

						<input
							placeholder="Location"
							type="text"
							value={location}
							className="mb-5 w-full p-3 border  border-gray"
							onChange={(e) => setLocation(e.target.value)}
						/>

						<textarea
							placeholder="Description..."
							value={description}
							className="mb-5 w-full h-3/5 p-3 border border-gray"
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>

					<div className="col-start-6 col-end-9 row-span-full">
						<textarea
							placeholder="Requirements"
							value={requirements}
							className="w-full p-3 border border-gray"
							rows={10}
							onKeyDown={bulletPoint}
							onChange={(e) => setRequirements(e.target.value)}
						/>
					</div>

					<div className="col-start-7 col-end-9  mt-12 ml-12">
						<button
							onClick={onAdd}
							className="bg-green font-outfit text-white text-normal text-md w-full py-1
                                  rounded-md hover:opacity-90 ring-0.5"
						>
							Add Job
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}}
