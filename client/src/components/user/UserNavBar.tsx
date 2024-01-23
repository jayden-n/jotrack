import { FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';
import UserLogoutContainer from './UserLogoutContainer';
import { useState } from 'react';
import { useDashboardContext } from '../../pages/user/UserDashboardPage';

const UserNavBar: React.FC = () => {
	const { toggleSidebar } = useDashboardContext();

	const handleClick = () => {
		toggleSidebar();
		console.log('Button clicked'); // Add this line
	};
	return (
		<nav className="h-24 flex items-center justify-center md:sticky md:top-0 transition-all ease-in-out duration-300 bg-white">
			<div className="flex w-[90vw] justify-between md:w-[90%]">
				<button
					type="button"
					className="bg-transparent border-transparent text-purple text-[1.75rem] cursor-pointer flex items-center justify-center"
					onClick={handleClick}
				>
					<FaAlignLeft />
				</button>

				<div className="flex items-center md:hidden">
					<Logo />
				</div>

				<div className="flex items-center justify-center">
					<UserLogoutContainer />
				</div>
			</div>
		</nav>
	);
};
export default UserNavBar;
