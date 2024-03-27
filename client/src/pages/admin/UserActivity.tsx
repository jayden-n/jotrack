import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Application} from '../../components/admin/UserData'

export default function UserActivity() {
    const { id } = useParams<{ id: string }>();
    const [userActivity, setUserActivity] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('')
    const [jobApps, setJobApp] = useState<Application[]>([]);
    const navigation = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/apiuser-activities?userId=${id}`)
            .then(response => {
                setUserActivity(response.data)
            })
            .catch(error => {
                toast.error('Failed retrieving user activity')
                setError(error); 
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id])

    useEffect(() => {
        axios.get('http://localhost:8000/api/job-applications')
        .then((response): void =>{
            const filteredApps = response.data.filter((application: Application) => application.userId.toString() === id);
            setJobApp(filteredApps);
        })
        .catch((error): void => {
            toast.error('Could not retrieve applications')
            setError(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
    }, [id])

    const headerStyle = 'font-outfit font-semibold text-sm md:text-lg'
    const tdStyle = 'text-center text-sm md:text-lg font-outfit'

  return (
    <div>

        <div className=" mt-10">
            
            <div className='grid grid-cols-9  '>

            <p className='text-purple font-outfit font-md md:col-span-2 col-span-3
                     text-2xl text-center mb-10 ml-2 md:ml-0'>User Activity</p>

                <table className='bg-white col-start-2 col-end-9 rounded-lg w-full  '>
                    <thead className='border-b border-lightgrey'>
                        <tr className=''>
                            <th className={`p-3 ${headerStyle}`}>Job Applied to</th>
                            <th className={`border-x-2 border-lightgrey ${headerStyle}`}>Search History</th>
                            <th className={`${headerStyle}`}>Visited Jobs</th>
                        </tr>
                    </thead>

                    <tbody>
                            {userActivity.map((activity, index) => (
                                <tr key={index} className='border-b border-lightgrey'>
                                    <td className={`p-3 ${tdStyle}`}>
                                        {jobApps.map((app, index) => (
                                            <button key={index} onClick={() => { navigation(`../edit/${app.jobId}`) }} className='underline'>{app.jobId}</button>
                                        ))}                                    </td>
                                    <td className={`${tdStyle} border-x-2 border-lightgrey`}>{activity.searchHistory.join(', ')}</td>
                                    <td className={`${tdStyle}`}>
                                        {activity.jobsVisited.map((jobId: number, index: number) => (
                                            <button key={index} onClick={() => { navigation(`../edit/${jobId}`) }} className='underline'>{jobId}</button>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>    
  )
}
