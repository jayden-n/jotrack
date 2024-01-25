import { NavLink } from 'react-router-dom';
import { links } from '../../../utils/links';
import { useDashboardContext } from '../../pages/user/UserDashboardPage';

interface NavLinkProps {
	text: string;
	path: string;
	icon: React.ReactNode;
}

const MobileNavLinks: React.FC = () => {
	const { toggleSidebar } = useDashboardContext();
	const transition = 'transition-all ease-in-out duration-300';

	return (
		<div className="pt-8 flex flex-col et">
			{links.map((link: NavLinkProps) => {
				const { text, path, icon } = link;
				return (
					<NavLink
						to={path}
						key={text}
						// end: do not set current child to be "active"
						end
						onClick={toggleSidebar}
						className={({ isActive }) =>
							isActive
								? `flex items-center py-6 px-0  capitalize w-96 ${transition} pl-8 border-purple text-violet hover:text-violet hover:pl-14 text-lg rounded-r-full bg-notTooWhite shadow-lg`
								: `flex items-center py-6 px-0 hover:text-violet  capitalize w-96 ${transition} pl-8 border-purple hover:pl-14 text-lg rounded-r-full hover:bg-notTooWhite`
						}
					>
						<span className={`text-2xl mr-4 grid place-items-center`}>
							{icon}
						</span>
						{text}
					</NavLink>
				);
			})}
		</div>
	);
};
export default MobileNavLinks;
