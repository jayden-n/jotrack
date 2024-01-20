import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/visitor/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import UserDashboardPage from './pages/user/UserDashboardPage';
import AdminDashboard from './pages/admin/Dashboard';
import AllJobsPage from './pages/user/AllJobsPage';
import HomePage from './pages/visitor/HomePage';
import AdminJobs from './pages/admin/Jobs';
import AdminUsers from './pages/admin/Users';
import AddJob from './pages/admin/AddJob';
import UserApplications from './pages/user/UserApplications';
import UserBuildResume from './pages/user/UserBuildResume';
import DashboardLayout from './pages/admin/DashboardLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		children: [
			{
				index: true,
				element: <LandingPage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'register',
				element: <RegisterPage />,
			},
			{
				path: 'user/dashboard',
				element: <UserDashboardPage />,
				// nested routes
				children: [
					{
						element: <AllJobsPage />,
						index: true,
					},
					{
						path: 'applications',
						element: <UserApplications />,
					},
					{
						path: 'build-resume',
						element: <UserBuildResume />,
					},
				],
			},
			{
				path: 'admin/dashboard',
				element: <AdminDashboard />,
				children: [
					{
						// index: this'll always be the default page
						index: true,
						element: <DashboardLayout />,
					},
					{
						path: 'jobs',
						element: <AdminJobs />,
					},
					{
						path: 'jobs/add',
						element: <AddJob />,
					},
					{
						path: 'users',
						element: <AdminUsers />,
					},
				],
			},
		],
	},
]);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
