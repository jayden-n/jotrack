import { Link } from 'react-router-dom';
import VisitorMobileNavBar from './VisitorMobileNavBar';

export default function NavBar() {

    const hideNavBar = location.pathname === '/login' || location.pathname === '/register';

    const hoverStyle =
        'hover:bg-indigo hover:p-2 hover:shadow-md hover:rounded-xl  focus:text-gray  ';

    return (
        <div>
            <nav className="bg-E6E0E0 md:p-10 relative">
                <ul className="text-purple flex items-center list-none text-lg">
                    {/* Logo */}
                    <li className="font-outfit text-3xl md:block hidden font-extrabold">
                        <Link to={'/'}>
                            <span className="text-5xl">J</span>oTrack
                        </Link>
                    </li>

                    {/* Hamburger menu */}
                    <li className="flex md:hidden">
                        <div>
                            <VisitorMobileNavBar />
                        </div>

                    </li>

                    {/* ======================================= */}


                    <li className="px-10 hidden md:flex">
                        <Link
                            to={'/jobs'}
                            className={`font-outfit text-xl ${hoverStyle}`}
                        >
                            Jobs
                        </Link>
                    </li>

                    <li className="px-10 hidden md:flex">
                        <Link
                            to={'/about-us'}
                            className={`font-outfit  text-xl ${hoverStyle}`}
                        >
                            About Us
                        </Link>
                    </li>
                    <div className="ml-auto flex space-x-4"> {/* Added a div to group Login and Sign up together */}
                    <li className="px-10 hidden md:flex ml-auto">
                        <Link
                            to={'./login'}
                            className="bg-E6E0E0 text-btnPurple font-outfit text-normal text-xl px-10 py-2
                        rounded-md hover:opacity-90 ring-0.5"
                        >
                            Login
                        </Link>
                    </li>

                    <li className="ml-auto hidden md:flex">
                        <Link
                            to={'./register'}
                            className="bg-btnPurple text-white font-outfit text-normal text-xl px-10 py-2
                        hover:opacity-90 ring-0.5"
                        >
                            Sign up
                        </Link>
                    </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}
