import { useDashboardContext } from '../../pages/user/UserDashboardPage';
import Logo from './Logo';
import NavLinks from './NavLinks';

const BigSideBar: React.FC = () => {
	const { showSidebar } = useDashboardContext();

	return (
		<aside className="hidden md:block md:bg-white">
			{/* ml-[-250px] */}
			<div
				className={
					showSidebar
						? 'min-h-screen h-full w-[260px] transition-all duration-300 ease-in-out ml-[-260px]'
						: 'min-h-screen h-full w-[260px] transition-all duration-300 ease-in-out '
				}
			>
				<div className="sticky top-0">
					<header className="h-24 flex items-center justify-center">
						<Logo />
					</header>

					<NavLinks />
				</div>
			</div>
		</aside>
	);
};
export default BigSideBar;
