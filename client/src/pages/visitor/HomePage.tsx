import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBarVisitor from './NavBarVisitor';
import { Outlet } from 'react-router-dom';

const HomePage: React.FC = () => {
	const location = useLocation();
	const [showNavBar, setShowNavBar] = useState(true);

	useEffect(() => {
		// Define the paths that should not show the NavBar
		const hideNavBarPaths = ['/login', '/register', '/admin', '/user'];
		const shouldHideNavBar = hideNavBarPaths.some(path => location.pathname.startsWith(path));

		setShowNavBar(!shouldHideNavBar);
	}, [location]);

	return (
		<>
			{showNavBar && <NavBarVisitor />}
			<Outlet />
		</>
	);
};

export default HomePage;
