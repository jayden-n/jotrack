import { Link } from 'react-router-dom';
import AdminMobileNavBar from './AdminMobileNavBar';

export default function NavBar() {


	const hoverStyle =
		'hover:bg-indigo hover:p-2 hover:shadow-md hover:rounded-xl  focus:text-gray  ';
	
	return (
		<div>
			<nav className="bg-white ring-1 md:p-10 relative">
				<ul className="text-purple flex items-center list-none text-lg">
					{/* Logo */}
					<li className="font-outfit text-3xl md:block hidden font-extrabold">
						<Link to={'/admin'}>
							<span className="text-5xl">J</span>oTrack
						</Link>
					</li>

					{/* Hamburger menu */}
					<li className="flex md:hidden">
						<div>
							<AdminMobileNavBar />
						</div>
						
					</li>

					{/* ======================================= */}

					<li className="px-10 hidden md:flex ">
						<Link
							to={'/admin'}
							className={`font-outfit  text-xl ${hoverStyle}`}
						>
							Dashboard
						</Link>
					</li>

					<li className="px-10 hidden md:flex">
						<Link
							to={'/admin/jobs'}
							className={`font-outfit text-xl ${hoverStyle}`}
						>
							Jobs
						</Link>
					</li>

					<li className="px-10 hidden md:flex">
						<Link
							to={'/admin/users'}
							className={`font-outfit  text-xl ${hoverStyle}`}
						>
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
