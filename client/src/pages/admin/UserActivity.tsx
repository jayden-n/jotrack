import React, {useState} from 'react'
import NavBar from './NavBar'

export default function UserActivity() {

    const [data, setData] = useState([])

  return (
    <div>
        <NavBar/>
        <div className=" mt-10">
            
            <div className='grid grid-cols-9  '>

            <p className='text-purple font-outfit font-md col-span-2 text-2xl text-center mb-10'>User Activity</p>
                <table className='bg-white col-start-2 col-end-9 rounded-lg w-full  '>
                    <thead className='border-b border-lightgrey'>
                        <tr className=''>
                            <th className='p-3 font-outfit font-semibold'>Job Applied to</th>
                            <th className='border-x-2 border-lightgrey font-semibold font-outfit'>Search History</th>
                            <th className='font-outfit font-semibold'>Visited Jobs</th>
                        </tr>
                    </thead>

                    <tbody >
                        {/* structure */}
                        <tr className='border-b border-lightgrey'>
                            <td className='text-center  font-outfit p-3'>JobId</td> {/* add link later */}
                            <td className='border-x-2 border-lightgrey text-center'>anything</td>
                            <td className='text-center font-outfit font-normal'>JobId</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>    
  )
}
