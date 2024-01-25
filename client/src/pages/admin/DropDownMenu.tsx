import { Link } from 'react-router-dom';
import { useState } from 'react';
  
  const DropDownMenu: React.FC = () => {

    const [dropDown, setDropDown] = useState<boolean>(false);
    
    const dropDownOnClick = () => { 
        setDropDown(!dropDown);
        
    };

    const closeDropDown = () => {
        console.log('Closing dropdown');
        setDropDown(false);
      }
    const hoverStyle = 'hover:bg-indigo hover:p-2 hover:shadow-md hover:rounded-xl  active:text-gray  ';

    const dropDownStyle: React.CSSProperties = {

        transition: 'transform 0.3s ease-in-out', // fix transition later
        
    };


    return (
		<div className={`absolute top-full right-1 mt-2 ${dropDownStyle}`}>
        <ul className={`bg-black  flex  items-center p-4 rounded-md `}>
          <li className="text-sm px-2 ">
            <Link to={'/admin'} className={`font-outfit text-white `} onClick={closeDropDown}>
              Dashboard
            </Link>
          </li>

          <li className="text-sm px-2">
            <Link to={'/admin/jobs'} className={`font-outfit text-white `} onClick={closeDropDown}>
              Jobs
            </Link>
          </li>

          <li className="text-sm px-2">
            <Link to={'/admin/users'} className={`font-outfit text-white  `} onClick={closeDropDown}>
              Users
            </Link>
          </li>

          <li className="px-2">
            <Link
              to={'/'}
              className="bg-btnPurple text-white font-outfit text-normal text-sm px-5 py-1
                        rounded-md hover:opacity-90 ring-0.5"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  export default DropDownMenu;