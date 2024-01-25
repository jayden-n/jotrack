import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

export default function NavBar() {
  const [dropDown, setDropDown] = useState<boolean>(false);

  const dropDownOnClick = () => {
    setDropDown(!dropDown);
	
  };

  const closeDropDown = () => {
	setDropDown(false)

  }
  const hoverStyle = 'hover:bg-indigo hover:p-2 hover:rounded-xl';
  const active = 'active:bg-lightgrey'
  const dropDownStyle: React.CSSProperties = {

	transition: 'transform 0.3s ease-in-out', // fix transition later
	
  };
  
//   ============================================= DropDown Menu =============================================
  const DropDownMenu = () => {
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
// ============================================= Nav bar ======================================================
  return (
    <div>
		
      <nav className="bg-white ring-1 p-10 relative">
        <ul className="text-purple flex items-center list-none text-lg">
          <li className="font-outfit text-3xl font-extrabold pr-10">
            <Link to={'/admin/dashboard'}>
              <span className="text-5xl">J</span>oTrack
            </Link>
          </li>
		  
			{/*==== DropDown Menu for mobile screen ===*/}
				<li className="ml-auto md:hidden">
					<button onClick={dropDownOnClick}>
					<RiArrowDropDownLine  />
					</button>
					{dropDown && <DropDownMenu />}
				</li>
			{/* ======================================= */}

          <li className="px-10 hidden md:flex ">
            <Link to={'/admin'} className={`font-outfit ${hoverStyle}`}>
              Dashboard
            </Link>
          </li>

          <li className="px-10 hidden md:flex">
            <Link to={'/admin/jobs'} className={`font-outfit ${hoverStyle}`}>
              Jobs
            </Link>
          </li>

          <li className="px-10 hidden md:flex">
            <Link to={'/admin/users'} className={`font-outfit ${hoverStyle}`}>
              Users
            </Link>
          </li>

          <li className="ml-auto hidden md:flex">
            <Link
              to={'/'}
              className="bg-btnPurple text-white font-outfit text-normal text-md px-10 py-2
                        rounded-md hover:opacity-90 ring-0.5"
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
	  
    </div>
  );
}