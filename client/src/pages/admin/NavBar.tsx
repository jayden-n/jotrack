import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to={'/dashboard'}>JoTrack</Link>
                </li>
                <li>
                    <Link to={'/dashboard'}>Dashboard</Link>
                </li>
                <li>
                    <Link to={'/jobs'}>Jobs</Link>
                </li>
                <li>
                    <Link to={'users'}>Users</Link>
                </li>
                <li>
                    <button>Logout</button>
                </li>
            </ul>
        </nav>
    </div>
  )
}
