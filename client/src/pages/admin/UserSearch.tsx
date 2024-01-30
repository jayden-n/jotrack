import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import UserDetailsMobile from './UserDetailsMobile';

const UserSearch: React.FC = () => {

    const [userData, setData] = useState<any>(null);
    const [details, setDetails] = useState(false)
    const showDetails = () => {
        setDetails(!details)
    }

    return (
        <div className='grid grid-col-1 md:grid-cols-7 mt-10 '>
           
            {/* ================================== User details button ================================= */}
                 <div className='flex justify-end items-center mb-10 mr-4'>
                    <button 
                    className='bg-gray md:hidden font-outfit text-white text-normal text-center p-1.5
                    rounded-lg  hover:opacity-90 ring-0.5  w-2/5 '
                        onClick={showDetails}
                    >
                        User Details
                    </button>
                    {details && <UserDetailsMobile />}
                </div>  

            {/*  ================================== User Applications  ================================= */}

            <div className=' md:col-span-3 md:ml-10 bg-white rounded-lg w:2/5 mx-3 md:mx-0 md:w-full'>
                <table className=' w-full text-center'>

                    <thead className='border-b text-sm md:text-lg  border-lightgrey'>
                        <tr>
                            <th className='md:p-3 p-1 font-outfit w-2/5 text-center md:text-lg font-semibold'>Application</th>
                            <th className=' border-l-2 w-2/5 border-lightgrey font-semibold text-center font-outfit'>Status</th>
                            
                        </tr>
                    </thead>

                    <tbody >
                        {/* structure */}
                        <tr className='border-b  border-lightgrey'>
                            <td className='text-center text-sm font-outfit md:text-lg '>JobId</td> {/* add link later */}
                            <td className=' md:p-2 p-1 border-l-2 border-lightgrey text-center'>
                                <span className='md:text-lg text-sm '>Pending</span>

                                <button className='bg-updateBtnColor hover:opacity-90 ring-0.5
                                 text-white rounded-lg md:py-2 md:px-5 text-sm p-1 float-end'>
                                    Update</button>
                            </td>
                        </tr>
                        

                    </tbody>
                </table>
            </div>

            {/* ===================================== User Details ================================== */}

            <div className='md:col-end-8 md:col-span-3 mr-10 bg-white pl-5 py-5  rounded-l-lg hidden md:grid'>
                <div  className='grid grid-cols-3'>
                  <div className='col-start-1'>
                    <p className='mb-10 '>User ID </p>
                    <p className='mb-10'>Name </p>
                    <p className='mb-10'>Email</p>
                    <p className='mb-10'>Address</p>
                    <p className='mb-10'>Phone</p>
                  </div>
                {/* user data display here */}
                <div className='col-start-2 col-span-2'>
                    <p className='mb-10 '>1 </p>
                    <p className='mb-10'>any name </p>
                    <p className='mb-10'>name@gmail.com</p>
                    <p className='mb-10'>123 Any St North, Toronto, L8M3F4, ON</p>
                    <p className='mb-10'>55555555</p>
                </div>    
                  
                </div>

                <div className='flex justify-center items-center'>
                    <Link to={"/admin/users/activity"}
                    className='bg-green font-outfit text-white text-normal text-center p-1.5
                    rounded-lg  hover:opacity-90 ring-0.5  w-3/5  '
                    >
                        User Activity
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default UserSearch