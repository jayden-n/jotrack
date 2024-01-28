import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditJob: React.FC = () => {
    const [companyName, setCompanyName] = useState<string>("");
    const [position, setPosition] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [requirements, setRequirements] = useState<string>("");

    const bulletPoint = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const bullet = '\u2022';
        const value = e.currentTarget.value.length;
        if (value > 0) {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.currentTarget.value = `${e.currentTarget.value}\n${bullet} `;
            } else if (value === 1) {
                e.currentTarget.value = `${bullet} ${e.currentTarget.value}`;
            }
        }
    };

    const labelStyle = 'mb-1';
    const inputStyle = 'md:p-2  mb-5 md:w-1/4 w-full rounded-md shadow-md shadow-black-500/50 ';
    const textareaStyle = 'md:p-4 w-full md:h-44 p-3  rounded-md shadow-md shadow-black-500/50 ';
    const btnStyle = 'font-outfit text-white text-normal text-center md:text-xl md:px-5 md:py-1 rounded-lg p-2 hover:opacity-90 shadow-xl ring-1';

    return (
        <div>
            <div className="sm:grid sm:grid-cols-1 md:mt-10 mt-10 mb-5 mx-4 md:mx-0">
                <form className="md:mx-10 rounded-lg shadow-xl bg-formGrey p-12 ">
                    <section className="block">
                 
                        <label className={labelStyle}>Company Name</label>
                        <input
                            type="text"
                            value={companyName}
                            className={inputStyle}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    

                 
                        <label className={labelStyle}>Position</label>
                        <input
                            placeholder="Position"
                            type="text"
                            value={position}
                            className={inputStyle}
                            onChange={(e) => setPosition(e.target.value)}
                        />
                    

                 
                        <label className={labelStyle}>Location</label>
                        <input
                            placeholder="Location"
                            type="text"
                            value={location}
                            className={inputStyle}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    
                    </section>

                    <div>
                        <label className={labelStyle}>Description</label>
                        <textarea
                            placeholder="Description..."
                            value={description}
                            className={textareaStyle}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className={labelStyle}>Requirements</label>
                        <textarea
                            placeholder="Requirements"
                            value={requirements}
                            className="w-full p-3  rounded-md shadow-md shadow-black-500/50"
                            rows={9}
                            onKeyDown={bulletPoint}
                            onChange={(e) => setRequirements(e.target.value)}
                        />
                    </div>

                    <hr className="my-5 md:mt-20 border-t border-grey500" />

                    <div className="flex md:mt-0 mt-5 md:justify-end gap-5 justify-center">
                        <Link to={'/admin/jobs'} className={`bg-updateBtnColor ${btnStyle}`}>
                            Update
                        </Link>
                        <Link to={'/admin/jobs'} className={`bg-cancelRed ${btnStyle}`}>
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditJob;
