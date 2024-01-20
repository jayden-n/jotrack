import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/visitor/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import UserDashboardPage from "./pages/user/UserDashboardPage";
import AdminDashboard from "./pages/admin/Dashboard";
import AllJobsPage from "./pages/user/AllJobsPage";
import HomePage from "./pages/visitor/HomePage";
import AdminJobs from "./pages/admin/Jobs"
import AdminUsers from "./pages/admin/Users"
import AddJob from "./pages/admin/AddJob"
import UserActivity from "./pages/admin/UserActivity";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		children: [
			{
				index: true,
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
				// nested routes
				children: [
					{
						element: <AllJobsPage />,
						index: true,
					},
				],
			},
			{
				path: "/admin/dashboard",
				element: <AdminDashboard />,
			},
			{
				path: "/admin/jobs",
				element: <AdminJobs />,
				
			},
			{
				path: "/admin/jobs/add",
				element: <AddJob />,
				
			},
			{
				path: "/admin/users",
				element: <AdminUsers />,
			},
			{
				path: "/admin/users/activity",
				element: <UserActivity />,
			},
		],
	},
]);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
