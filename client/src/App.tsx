import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/visitor/LandingPage";

import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
<<<<<<< HEAD
import UserDashboardPage from "./pages/user/UserDashboardPage";
=======
import React from "react";
>>>>>>> 4d4b493 (tailwind & admin pages added)

const router = createBrowserRouter([
	// define the URL routes
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
	{
		path: "/dashboard",
		element: <UserDashboardPage />,
		children: [
			{
				path: "/dashboard",
				element: <UserDashboardPage />,
				index: true,
			},
		],
	},
	// ...
	// also check out the docs for nested routes if needed
]);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};
export default App;
