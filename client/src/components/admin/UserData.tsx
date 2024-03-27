import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from "react-router-dom"
import UserDetailsMobile from './UserDetailsMobile';
import StatusUpdate from './StatusUpdate';
import axios from 'axios';
import Job from './Job';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

interface UserInfo {
    searchID: number;
 }
 
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    postalCode: string;
    street: string;
    city: string;
    province: string;
    country: string;
    phoneNumber: number
    
}

export interface Application{
    status: string;
    dateTimeApplied: Date;
    dateTimeUpdated: Date;
    userId: number;
    jobId: number;
}
const UserData: React.FC<UserInfo> = ({searchID}) => {  
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [jobApps, setJobApp] = useState<Application[]>([]);
    const [openDetails, setOpen] = useState(false)
    const [openStatus, setStatus] = useState(false)
    const navigation = useNavigate()

    useEffect(() => {
       axios
          .get<User | null>(`http://localhost:8000/api/users/${searchID}`)
          .then((response): void => {         
             setUser(response.data);
          })
          .catch((error): void => {
             toast.error('User not found')
             setError(error);
          })
          .finally(() => {
             setIsLoading(false);
          });
    }, [searchID]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/job-applications')
        .then((response): void =>{
            const filteredApps = response.data.filter((application: Application) => application.userId === searchID);
            setJobApp(filteredApps);
        })
        .catch((error): void => {
            toast.error('Could not retrieve applications')
            setError(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
    }, [searchID])


    const showDetails = () => {
        setOpen(!openDetails)
    }
    const showStatus = () => {
        setStatus(!openStatus)
    }

    const cellStyle = 'text-left text-sm px-3 font-outfit md:text-xl py-3 '

    return (
        <div className='grid grid-col-1 md:grid-cols-7 md:mt-10 mt-5'>
           
            {/* ================================== User details button ================================= */}
                 <div className='flex justify-end  mx-3 mb-4 md:hidden'>
                    <button 
                    className='bg-gray md:hidden font-outfit text-white text-normal text-center p-1.5
                    rounded-xl  hover:opacity-90 ring-0.5  w-2/6 shadow-lg shadow-black-500/50'
                        onClick={showDetails}
                    >
                        User 
                    </button>
                    {openDetails && <UserDetailsMobile user={user} />}
                </div> 
                

            {/*  ================================== User Applications  ================================= */}

            <div className=' md:col-span-3 md:ml-10 bg-white rounded-lg w:2/5 mx-3 md:mx-0 md:w-[full] '>
                <table className=' w-full text-center'>

                    <thead className='border-b text-sm md:text-lg  border-lightgrey'>
                        <tr>
                            <th className='md:p-3 p-1 font-outfit w-2/5 text-center md:text-lg font-semibold'>Application</th>
                            <th className=' border-l-2 w-2/5 border-lightgrey font-semibold text-center font-outfit'>Status</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {jobApps.map((application, index) => (
                            <tr key={index} className={`border-b border-lightgrey ${openStatus === true ? 'bg-lightgrey' : ''}`}>
                                <td className='text-center text-sm font-outfit md:text-lg'>
                                    <button onClick={() => { navigation(`../edit/${application.jobId}`) }} className='underline'>{application.jobId}</button>
                                </td>
                                <td className='md:p-2 p-1 border-l-2 border-lightgrey text-center'>
                                    <span className='md:text-lg text-sm'>{application.status}</span>
                                    <button className='bg-updateBtnColor hover:opacity-90 ring-0.5 text-white rounded-lg md:py-2 md:px-5 text-sm p-1 float-end' onClick={showStatus}>
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            
             {openStatus && <StatusUpdate onClose={() => setStatus(false)}/>}

            
       
            {/* ===================================== User Details ================================== */}
                            
            <motion.div 
                className={`relative md:grid hidden bg-white gap-2 ${openStatus ? 'md:col-start-6  md:w-[450px]  md:h-[400px]' :'md:col-start-5  md:w-[600px]  md:h-[360px]'}`}
                animate={{  
                    opacity: [0, 0.5, 0.5, 1],
                
                 }}
                transition={{
                    duration: 0.5,
                    ease:"easeOut",
                }}
            
                layout style={{ borderRadius: 20 }} 
                    
                >
                <table className='m-5'>
                    <tr>
                        <td className={`${cellStyle}`}>ID</td>
                        <td className={`${cellStyle}`}>{user?.id} </td>
                    </tr>
                    <tr>
                         <td className={`${cellStyle}`}>Name </td>
                         <td className={`${cellStyle}`}>{user?.firstName} {user?.lastName} </td>
                    </tr>
                    <tr>
                        <td className={`${cellStyle}`}>Email</td>                 
                        <td className={`${cellStyle}`}>{user?.email}</td>
                    </tr>
                    <tr>
                        <td className={`${cellStyle}`}>Address</td>
                        <td className={`${cellStyle}`}>{user?.street}, {user?.city} {user?.postalCode} {user?.province}, {user?.country}</td>
                    </tr>
                    <tr>
                        <td className={`${cellStyle}`}>Phone</td>
                        <td className={`${cellStyle}`}>{user?.phoneNumber}</td>
                    </tr>
                </table>
               

                <div className='flex justify-center items-center mb-5'>
                    <button onClick={() => {navigation(`../activity/${searchID}`)}}
                    className='bg-green font-outfit text-white text-normal text-center  p-1.5
                    rounded-lg  hover:opacity-90 ring-0.5  w-[40%]  '
                    >
                        User Activity
                    </button>
                </div>
                
            </motion.div>
        </div>
    )
}

export default UserData