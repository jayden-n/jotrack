import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const EditJob: React.FC = () => {
    const [companyName, setCompanyName] = useState<string>("Any Name");
    const [position, setPosition] = useState<string>("Front-end Developer");
    const [location, setLocation] = useState<string>("Toronto, ON");
    const [description, setDescription] = useState<string>("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut");
    const [requirements, setRequirements] = useState<Array<string>>(['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']);

    // const bulletPoint = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    //     const bullet = '\u2022';
    //     const value = e.currentTarget.value.length;
    //     if (value > 0) {
    //         if (e.key === 'Enter') {
    //             e.preventDefault();
    //             e.currentTarget.value = `${e.currentTarget.value}\n${bullet} `;
    //         } else if (value === 1) {
    //             e.currentTarget.value = `${bullet} ${e.currentTarget.value}`;
    //         }
    //     }
    // };

    const onUpdate = (e: React.FormEvent<HTMLButtonElement>) => { 
        e.preventDefault();
        if (                //add if changes happened later
            companyName ||
            position ||
            location ||
            description ||
            requirements
        ) {
            toast.success('Job successfully updated.')
            
        }
    };

    // =================================================== Styles ===================================================
    const labelStyle = 'mb-1 font-outfit text-lg block font-medium'
    const inputStyle = ' p-2  mb-5 md:w-3/4 w-full rounded-md shadow-md shadow-black-500/50 font-outfit text-lg'
    const textareaStyle = 'md:p-4 w-full md:h-44 p-3 font-outfit text-lg rounded-md shadow-md shadow-black-500/50 '
    const btnStyle = 'font-outfit text-white text-center md:text-xl md:px-5 md:py-1 rounded-lg p-2 hover:opacity-90 shadow-xl ring-1'
    // =================================================== End ===================================================

    return (
        <div>
            <div className="sm:grid sm:grid-cols-1 md:mt-10 mt-10 mb-5 mx-4 md:mx-0">
                <form className="md:mx-10 rounded-lg shadow-xl bg-formGrey p-12 ">
                    <div className="md:grid md:grid-cols-3 ">
                        {/* ================================= Company Name =================================*/}
                        <div>
                            <label className={labelStyle}>Company Name</label>
                            <input
                                type="text"
                                value={companyName}
                                className={inputStyle}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>
                    
                        {/* ================================= Position =================================*/}      
                        <div>
                            <label className={labelStyle}>Position</label>
                            <input
                                placeholder="Position"
                                type="text"
                                value={position}
                                className={inputStyle}
                                onChange={(e) => setPosition(e.target.value)}
                            />
                        </div>
                    
                        {/* ================================= Location =================================*/}
                        <div>
                            <label className={labelStyle}>Location</label>
                            <input
                                placeholder="Location"
                                type="text"
                                value={location}
                                className={inputStyle}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                    
                    </div>
                    {/* ================================= Description =================================*/}
                    <div>
                        <label className={labelStyle}>Description</label>
                        <textarea
                            placeholder="Description..."
                            value={description}
                            className={textareaStyle}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    {/* ================================= Requirements =================================*/}
                    <div>
                        <label className={labelStyle}>Requirements</label>
                       
                        <textarea
                            placeholder="Requirements"
                            value={requirements.join('\n')}
                            className="w-full p-3  font-outfit text-lg rounded-md shadow-md shadow-black-500/50"
                            rows={7}
                            // onKeyDown={bulletPoint}
                            onChange={(e) => setRequirements(e.target.value.split('\n'))}
                            />
                    </div>

                    <hr className="my-5 md:mt-20 border-t border-grey500" />

                    {/* ================================= Buttons =================================*/}
                    <div className="flex md:mt-0 mt-5 md:justify-end gap-5 justify-center">
                        <button  className={`bg-updateBtnColor ${btnStyle}`} onClick={onUpdate}>
                            Update
                        </button>
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
