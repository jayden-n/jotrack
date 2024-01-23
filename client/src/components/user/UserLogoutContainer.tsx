import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useState } from 'react';
import { useDashboardContext } from '../../pages/user/UserDashboardPage';

const UserLogoutContainer: React.FC = () => {
	const [showLogout, setShowLogout] = useState<boolean>();
	const { logoutUser } = useDashboardContext();

	const btn =
		'cursor-pointer rounded text-white bg-purple px-2 py-1 transition-all duration-300 ease-in-out capitalize inline-block';

	const dropdown =
		'absolute top-[45px] left-0 w-full text-center rounded cursor-pointer px-2 py-2 text-white bg-purple';

	return (
		<div className="relative flex items-center justify-center">
			<button
				type="button"
				className={`${btn} flex items-center justify-center gap-2`}
				onClick={() => setShowLogout(!showLogout)}
			>
				<FaUserCircle className="mr-0.5" />
				{/* NOTE: fetch from server: {user.firstName} {user.lastName} */}
				hello, username
				<FaCaretDown size={20} />
			</button>

			{/* button toggle */}
			<div
				className={showLogout ? `${dropdown} visible` : `${dropdown} invisible`}
			>
				<button
					type="button"
					className="w-full h-full capitalize cursor-pointer"
					onClick={logoutUser}
				>
					logout
				</button>
			</div>
		</div>
	);
};
export default UserLogoutContainer;
