import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    const hoverStyle = 'hover:bg-indigo hover:p-2 hover:rounded-xl'

  return (
    <div>
        <nav className='bg-white ring-1 p-10 '>
            <ul className='text-purple flex items-center text-lg '>

                <li className='font-outfit text-3xl font-extrabold pr-10'>
                    <Link to={'/admin/dashboard'}>
                        <span className='text-5xl'>J</span>oTrack</Link>
                </li>

                <li className='px-10  '>
                    
                    <Link to={'/admin/dashboard'}  className={`font-outfit ${hoverStyle}`}
                    >Dashboard</Link>
                </li>

                <li className='px-10'>
                    <Link to={'/admin/jobs'} className={`font-outfit ${hoverStyle}`}
                    >Jobs</Link>
                </li>
                
                <li className='px-10'>
                <Link to={'/admin/users'} className={`font-outfit ${hoverStyle}`}>
                    Users
                </Link>
            </li>

                <li className='ml-auto'>
                    <Link to={'/dashboard'} 
                    className='bg-btnPurple text-white font-outfit text-normal text-md px-10 py-2
                        rounded-md  hover:opacity-90 ring-0.5 
                        '>Logout</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
