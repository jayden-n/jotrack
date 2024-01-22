import React from 'react';
import { Outlet } from 'react-router-dom';

const UserDashboardPage: React.FC = () => {
	return (
		<>
			<Outlet />
		</>
	);
};
export default UserDashboardPage;
