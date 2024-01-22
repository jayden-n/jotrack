import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/visitor/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import UserDashboardPage from './pages/user/UserDashboardPage';
import AdminDashboard from './pages/admin/Dashboard';
import HomePage from './pages/visitor/HomePage';
import AdminJobs from './pages/admin/Jobs';
import AdminUsers from './pages/admin/Users';
import AddJob from './pages/admin/AddJob';
import DashboardLayout from './pages/admin/DashboardLayout';
import UserInfoPage from './pages/user/UserInfoPage';
import UserAllJobsPage from './pages/user/UserAllJobsPage';
import UserApplicationsPage from './pages/user/UserApplicationsPage';
import UserBuildResumePage from './pages/user/UserBuildResumePage';
import UserViewResumePage from './pages/user/UserViewResumePage';

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
						index: true,
						element: <UserInfoPage />,
					},
					{
						path: 'all-jobs',
						element: <UserAllJobsPage />,
					},
					{
						path: 'applications',
						element: <UserApplicationsPage />,
					},
					{
						path: 'build-resume',
						element: <UserBuildResumePage />,
					},
					{
						path: 'view-resume',
						element: <UserViewResumePage />,
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
