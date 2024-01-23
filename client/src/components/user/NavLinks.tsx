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
		<div className="pt-8 flex flex-col text-purple">
			{links.map((link: NavLinkProps) => {
				const { text, path, icon } = link;
				return (
					<NavLink
						to={path}
						key={text}
						// end: do not set current child to be "active"
						end
						className={`flex items-center py-6 px-0 pl-10 capitalize ${transition} hover:pl-14`}
					>
						<span
							className={` mr-3 grid place-items-center text-2xl ${transition}`}
						>
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
