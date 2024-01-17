import React from 'react';

export default function Dashboard() {
  return (
    <div className='bg-milky p-4'>
      <p className='text-purple font-poppins font-bold text-3xl'>Hello, 
      <span className='text-gray font-normal text-3xl'> Admin</span></p>

      <form className='border-white bg-white rounded-lg p-4 w-full md:w-3/4 mt-5'>
        <div className='mb-4 flex flex-wrap gap-x-12' >

          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-2'>
            <label className='block text-sm font-outfit mb-3'>First name</label>
            <input type='text' readOnly id='first-name' placeholder='Any' 
                 className='w-full border p-2 font-outfit text-sm rounded' />
          </div>

          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-2 '>
            <label className='block text-sm font-outfit mb-3'>Last name</label>
            <input type='text' readOnly id='last-name' placeholder='Body' 
                 className='w-full border p-2 font-outfit  text-sm rounded' />
          </div>

        </div>

        <div className='mb-4 flex flex-wrap gap-x-12'>

          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-2 '>

            <label className='block text-sm font-outfit mb-2'>Phone number</label>

            <input type='number' id='phone' 
                className='w-full border p-2 font-outfit text-sm rounded' 
                placeholder='555555'/>
          </div>

          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-2 '>

            <label className='block text-sm font-outfit mb-2 font-outfit'>Email</label>

            <input type='email' id='email' 
                  className='w-full border p-2 font-outfit text-sm rounded'
                  placeholder='anybody@gmail.com'  />
          </div>
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-outfit mb-2'>Address</label>
          <input type='text' id='address'
                 className='w-full border p-2 rounded text-sm' 
                 placeholder='123 st North, Toronto, ON, R2M4Z3'/>
        </div>

        <div className="flex justify-end">
          <button className='bg-lightblue text-white font-outfit font-medium text-sm px-3 py-1
              rounded-md border font-sm mb-4'>Save changes</button>
        </div>

        <hr className='mb-4'></hr>
        
        <div className='mb-4 flex flex-wrap bg-lightgrey w-full md:w-3/4 rounded-md px-2 py-4'>
          <div className='w-full'>
            <div className='flex items-center justify-between mb-2'>
              <p className='text-lg font-semibold font-outfit'>Password</p>
              <button className='border px-6 py-1 text-xs rounded-md bg-white font-outfit'>
                Change
              </button>
            </div>
            <p className='text-sm mt-2 font-outfit'>change your password here</p>
          </div>
        </div>

        
      </form>
    </div>
  );
}
