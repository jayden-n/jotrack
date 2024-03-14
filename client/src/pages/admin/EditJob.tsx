import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const EditJob: React.FC = () => {
    const { jobId } = useParams<{ jobId: string }>();
    const [companyName, setCompanyName] = useState<string>("");
    const [position, setPosition] = useState<string>("");
    const [postalCode, setPostalCode] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [province, setProvince] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [requirements, setRequirements] = useState<Array<string>>([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/${jobId}`)
            .then(response => {
                const job = response.data;
                setCompanyName(job.companyName);
                setPosition(job.position);
                setPostalCode(job.postalCode);
                setStreet(job.street);
                setCity(job.city);
                setProvince(job.province);
                setCountry(job.country);
                setDescription(job.description);
                setRequirements(job.requirements);
            })
            .catch(error => {
                console.error(error);
              
            });
    }, [jobId]);

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
        if (                
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
    const inputStyle = " md:p-4 mb-5  w-full p-3 border rounded-md shadow-md shadow-black-500/50  border-gray"
    const divStyle = ' md:flex md:flex-wrap  gap-x-5 pt-5 '
    const locationStyle = "md:p-4 mb-5 md:w-1/2 w-full p-3 border rounded-md shadow-md shadow-black-500/50 border-gray"
    const textareaStyle = 'md:p-4 w-full md:h-44 p-3 font-outfit text-lg rounded-md shadow-md shadow-black-500/50 '
    const btnStyle = 'font-outfit text-white text-center md:text-xl md:px-5 md:py-1 rounded-lg p-2 hover:opacity-90 shadow-xl ring-1'
    // =================================================== End ===================================================

    return (
        <div>
            <div className="sm:grid sm:grid-cols-1 md:mt-10 mt-10 mb-5 mx-4 md:mx-0">
                <form className="md:mx-10 rounded-lg shadow-xl bg-formGrey p-12 ">
                    <div className=" ">
                        {/* ================================= Company Name =================================*/}
                        <div className={`${divStyle} `}>
                            {/* <label className={labelStyle}>Company Name</label> */}
                            <input
                              placeholder="Company name"
                                type="text"
                                value={companyName}
                                className={inputStyle}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>
                    
                        {/* ================================= Position =================================*/}      
                   
                            {/* <label className={labelStyle}>Position</label> */}
                            <input
                                placeholder="Position"
                                type="text"
                                value={position}
                                className={inputStyle}
                                onChange={(e) => setPosition(e.target.value)}
                            />
                      
                    
                        {/* ================================= Location =================================*/}
                        <div className={`${divStyle} `}>
                            {/* <label className={labelStyle}>Street</label> */}
                            <input
									placeholder="Street"
									type="text"
									value={street}
									className={inputStyle}
									onChange={(e) => setStreet(e.target.value)}
								/>
                       
                            {/* <label className={labelStyle}>City</label> */}
                            <input
                                placeholder="City"
                                type="text"
                                value={city}
                                className={`${locationStyle} `}
                                onChange={(e) => setCity(e.target.value)}
								/>
                        
                            {/* <label className={labelStyle}>Postal Code</label> */}
                            <input
                                placeholder="Postal Code"
                                type="text"
                                value={postalCode}
                                className="md:p-4 mb-5 md:w-[48%] w-full p-3 border rounded-md shadow-md shadow-black-500/50 border-gray"
                                onChange={(e) => setPostalCode(e.target.value)}
                            />
                       
                            {/* <label className={labelStyle}>Country</label> */}
                            <input
                                placeholder="Country"
                                type="text"
                                value={country}
                                className={`${locationStyle} `}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        
                            {/* <label className={labelStyle}>Province</label> */}
                            <input
                                placeholder="Province"
                                type="text"
                                value={province}
                                className="md:p-4 mb-5 md:w-[48%] w-full p-3 border rounded-md shadow-md shadow-black-500/50 border-gray"
                                onChange={(e) => setProvince(e.target.value)}
                            />
                        </div>
                   
                    
                    </div>
                    {/* ================================= Description =================================*/}
                    <div className={`${divStyle} `}>
                        {/* <label className={labelStyle}>Description</label> */}
                        <textarea
                            placeholder="Description..."
                            value={description}
                            className="  md:p-4 w-full md:h-44 p-3 border rounded-md 
									shadow-md shadow-black-500/50 border-gray"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    {/* ================================= Requirements =================================*/}
                    <div className={`${divStyle} `}>
                        {/* <label className={labelStyle}>Requirements</label> */}
                       
                        <textarea
                            placeholder="Requirements"
                            value={requirements.join('\n')}
                            className=" w-full p-3 border border-gray rounded-md 
								shadow-md shadow-black-500/50"
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
