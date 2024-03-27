import React from 'react'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import { User } from './UserData'

interface Props {
  user: User | null;
}

const UserDetailsMobile: React.FC<Props> = ({user}) => {
  
  const navigation = useNavigate()

  return (
         <motion.div className='absolute h-[45%]  w-[70%] bg-white gap-2 mt-10'
         animate={{  
            opacity: [0, 0.5, 0.5, 1],      
            }}
         transition={{
            duration: 0.5,
            ease:"easeOut",
        }}
      
          layout style={{ borderRadius: 20 }} 
            
         >
                 <div className='grid grid-cols-3 items-center m-5 '>
                <div className='col-start-1'>
                    <p className='mb-10'>User ID </p>
                    <p className='mb-10'>Name </p>
                    <p className='mb-10'>Email</p>
                    <p className='mb-10'>Address</p>
                    <p>Phone</p>
                </div>
                {/* user data display here */}
                <div className='col-start-2 col-span-2 '>
                    {user ? (
                        <>
                            <p className='mb-10'>{user.id}</p>
                            <p className='mb-10'>{user.firstName} {user.lastName}</p>
                            <p className='mb-10'>{user.email}</p>
                            <p className='mb-10'>{user.street}, {user.city} {user.postalCode} {user.province}, {user.country}</p>
                            <p>{user.phoneNumber}</p>
                        </>
                    ) : (
                        <p>No user data available</p>
                    )}
                </div>
            </div>

                <div className='flex justify-center items-center'>
                    <button onClick={() => {navigation('../activity')}}
                    className='bg-green font-outfit text-white text-normal text-center p-1.5
                    rounded-lg  hover:opacity-90 ring-0.5  w-[40%]  mb-5 '
                    >
                        User Activity
                    </button>
                </div>
                
            </motion.div>
        

  )
}

export default UserDetailsMobile;