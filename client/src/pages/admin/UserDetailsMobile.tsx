import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

export default function UserDetailsMobile() {
  return (
   
    
         <motion.div className='absolute h-[50%]  w-[90%] bg-white gap-2 mt-10'
         animate={{  
            opacity: [0, 0.5, 0.5, 1],
           
            boxShadow: "0 2px 0 2px rgba(0, 0, 0, 0.2)",}}
         transition={{
            duration: 0.5,
            ease:"easeOut",
        }}
         
        //  exit={{ opacity: 0 }}
          layout style={{ borderRadius: 20 }} 
            
         >
                <div  className='grid grid-cols-3 items-center m-5 '>
                  <div className='col-start-1'>
                    <p className='mb-10 '>User ID </p>
                    <p className='mb-10'>Name </p>
                    <p className='mb-10'>Email</p>
                    <p className='mb-10'>Address</p>
                    <p>Phone</p>
                  </div>
                {/* user data display here */}
                <div className='col-start-2 col-span-2 '>
                    <p className='mb-10 '>1 </p>
                    <p className='mb-10'>any name </p>
                    <p className='mb-10'>name@gmail.com</p>
                    <p className='mb-10'>123 Any St North, Toronto, L8M3F4, ON</p>
                    <p>55555555</p>
                </div>    
                  
                </div>

                <div className='flex justify-center items-center'>
                    <Link to={"/admin/users/activity"}
                    className='bg-green font-outfit text-white text-normal text-center p-1.5
                    rounded-lg  hover:opacity-90 ring-0.5  w-3/5 mt-5 mb-5 '
                    >
                        User Activity
                    </Link>
                </div>
                
            </motion.div>
        

  )
}
