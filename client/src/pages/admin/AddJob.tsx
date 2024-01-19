import {Link} from 'react-router-dom';
import NavBar from './NavBar';

export default function AddJob() {
  return (
    <div>
      <NavBar />
      <div className='mt-20 mb-5'>
        <form className='grid grid-cols-9 '>
          
          <div className='col-start-2 col-end-5 row-span-full w-full'>
            <input placeholder='Company Name' className='mb-5 w-full p-3 border border-gray' />
            <input placeholder='Position' className='mb-5 w-full p-3 border border-gray' />
            <input placeholder='Location' className='mb-5 w-full p-3 border border-gray' />
            <textarea placeholder='Description...' className='mb-5 w-full h-3/5 p-3 border border-gray' />
          </div>

          <div className='col-start-6 col-end-9 row-span-full'>
            <textarea placeholder='Requirements' className='w-full h-3/4 p-3 border border-gray' />
          </div>

          <div className='col-start-7 col-end-9  mt-12 ml-12'>
            <button className='bg-green font-outfit text-white text-normal text-md w-full py-1
                                  rounded-md hover:opacity-90 ring-0.5'>
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
