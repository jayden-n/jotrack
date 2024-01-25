import { NavLink } from 'react-router-dom';
import { links } from '../../../utils/links';

interface NavLinkProps {
	text: string;
	path: string;
	icon: React.ReactNode;
}

const NavLinks: React.FC = () => {
	const transition = 'transition-all ease-in-out duration-300';

	return (
		<div className="pt-8 flex flex-col">
			{links.map((link: NavLinkProps) => {
				const { text, path, icon } = link;
				return (
					<NavLink
						to={path}
						key={text}
						// Set activeClassName to the desired class when the NavLink is active

						// end: do not set current child to be "active"
						end
						className={({ isActive }) =>
							isActive
								? `flex items-center py-6 px-0 pl-10 capitalize ${transition} hover:pl-14  text-violet  rounded-r-full bg-notTooWhite shadow-lg`
								: `flex items-center py-6 text-violet px-0 pl-10 capitalize ${transition} hover:pl-14 rounded-r-full hover:bg-notTooWhite`
						}
					>
						<span className={`mr-3 grid place-items-center text-2xl `}>
							{icon}
						</span>
						<span className="text-lg"> {text}</span>
					</NavLink>
				);
			})}
		</div>
	);
};

export default NavLinks;
