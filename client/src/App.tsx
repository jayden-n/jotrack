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
import UserActivity from './pages/admin/UserActivity';
import UserApplications from './pages/user/UserApplications';
import UserBuildResume from './pages/user/UserBuildResume';
import DashboardLayout from './pages/admin/DashboardLayout';
import UserInfoPage from './pages/user/UserInfoPage';
import UserViewResume from './pages/user/UserViewResume';

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
						element: <UserInfoPage />,
						index: true,
					},
					{
						path: 'all-jobs',
						element: <AllJobsPage />,
					},
					{
						path: 'applications',
						element: <UserApplications />,
					},
					{
						path: 'build-resume',
						element: <UserBuildResume />,
					},
					{
						path: 'view-resume',
						element: <UserViewResume />,
					},
				],
			},
			{
				path: 'admin/dashboard',
				element: <AdminDashboard />,
				children: [
					{
						// index: always be the default page
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
			{
				path: '/admin/users/activity',
				element: <UserActivity />,
			},
		],
	},
]);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
