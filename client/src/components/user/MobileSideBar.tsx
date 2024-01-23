import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { useDashboardContext } from '../../pages/user/UserDashboardPage';
import MobileNavLinks from './MobileNavLinks';

const MobileSideBar: React.FC = () => {
	const { showSidebar, toggleSidebar } = useDashboardContext();

	const sidebarContainer = showSidebar
		? 'fixed inset-0 bg-gray flex justify-center items-center opacity-100 visible transition-all duration-300 ease-in-out z-[99]'
		: 'fixed inset-0 bg-gray flex justify-center items-center opacity-0 invisible transition-all duration-300 ease-in-out pointer-events-none';

	return (
		<aside className="md:hidden">
			<div className={sidebarContainer}>
				<div className="relative bg-white w-[90vw] h-[95vh] rounded py-16 px-8 flex items-center flex-col">
					{/* close btn */}
					<button
						type="button"
						className="cursor-pointer absolute top-[8px] left-[5px] text-4xl text-purple bg-transparent"
						onClick={toggleSidebar}
					>
						<FaTimes />
					</button>

					{/* logo */}
					<header>
						<Logo />
					</header>

					{/* links */}
					<MobileNavLinks />
				</div>
			</div>
		</aside>
	);
};
export default MobileSideBar;
