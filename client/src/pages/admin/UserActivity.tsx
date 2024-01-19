import React from 'react'
import NavBar from './NavBar'

export default function UserActivity() {
  return (
    <div>
        <NavBar/>
        <div className="grid-cols-6 mt-10">
            <p className='text-purple font-outfit text-normal text-2xl text-center'>User Activity</p>
            <table>
                <tr>
                    <th>Job Applied to</th>
                    <th>Search History</th>
                    <th>Visited Jobs</th>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>    
  )
}
