import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

export default function UserDetailsMobile() {
  return (
    <div>
         <div className=''>
                
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
