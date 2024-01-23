import React, { createContext, useContext, useState } from 'react';
import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';
import BigSideBar from '../../components/user/BigSideBar';
import UserNavBar from '../../components/user/UserNavBar';
import MobileSideBar from '../../components/user/MobileSideBar';

interface DashboardContextProps {
	showSidebar: boolean;
	toggleSidebar: () => void;
	logoutUser: () => Promise<void>;
}

// providing default values
export const DashboardContext = createContext<DashboardContextProps>({
	showSidebar: false,
	toggleSidebar: () => {},
	logoutUser: async () => {},
});

const UserDashboardPage: React.FC = () => {
	const [showSidebar, setShowSidebar] = useState<boolean>(false);
	const navigate: NavigateFunction = useNavigate();

	const toggleSidebar: () => void = () => {
		setShowSidebar(!showSidebar);
	};

	const logoutUser: () => Promise<void> = async () => {
		navigate('/');
	};

	return (
		// passing down the values for children
		<DashboardContext.Provider
			value={{
				showSidebar,
				toggleSidebar,
				logoutUser,
			}}
		>
			<main className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
				<MobileSideBar />
				<BigSideBar />

				<div>
					<UserNavBar />

					<div className="w-[90vw] mx-auto py-8 md:w-[90%]">
						<Outlet />
					</div>
				</div>
			</main>
		</DashboardContext.Provider>
	);
};

export const useDashboardContext = () => useContext(DashboardContext);

export default UserDashboardPage;
