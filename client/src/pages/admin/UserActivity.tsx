import React, {useState} from 'react'

const UserActivity: React.FC = () => {

    const [data, setData] = useState([])

  return (
    <div>
      
        <div className=" mt-10 ml-5 md:ml-0">
            
            <div className='grid md:grid-cols-9 grid-col-1 '>

            <p className='text-purple font-outfit font-md col-span-2 text-2xl md:text-center mb-10'>User Activity</p>
                <table className='bg-white md:col-start-2 md:col-end-9 rounded-lg w-full  '>
                    <thead className='border-b text-sm md:text-lg border-lightgrey'>
                        <tr className=''>
                            <th className='p-3 font-outfit text-sm md:text-lg font-semibold'>Job Applied to</th>
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

export
 default UserActivity;