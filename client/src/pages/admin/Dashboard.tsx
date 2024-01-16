import React from 'react'

export default function Dashboard() {
  return (
    <div>
        <h3>Hello,</h3><span>Admin</span>

        <form>
            <label>First Name</label>
            <input type='text' readOnly id='first-name'/>

            <label>Last Name</label>
            <input type='text' readOnly id='last-name'/>

            <label>Phone Number</label>
            <input type='number' id='phone'/>

            <label>Email</label>
            <input type='email' id='email'/>

            <label>Address</label>
            <input type='text' id='address'/>

            <button>Save changes</button>
        </form>
    </div>
  )
}
