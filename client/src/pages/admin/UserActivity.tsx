import React, {useState} from 'react'
import {  useNavigate } from 'react-router-dom';

export default function UserActivity() {
    
    const navigation = useNavigate()
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

                    <tbody >
                        {/* structure */}
                        <tr className='border-b border-lightgrey'>
                            <td className={`p-3 ${tdStyle}`}>
                                <button onClick={() => {navigation('../edit/:id')}}
                                 className='underline'>JobId</button>
                            </td>

                            <td className={`${tdStyle} border-x-2 border-lightgrey`}>anything</td>

                            <td className={`${tdStyle}`}>
                                <button onClick={() => {navigation('../edit/:id')}}
                                className='underline'>JobId</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>    
  )
}
