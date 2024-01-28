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
import UserActivity from './pages/admin/UserActivity';
import UserApplications from './pages/user/UserApplications';
import UserBuildResume from './pages/user/UserBuildResume';
import DashboardLayout from './pages/admin/DashboardLayout';
import UserInfoPage from './pages/user/UserInfoPage';
import UserViewResume from './pages/user/UserViewResume';
import UserUpdatePasswordPage from './pages/user/UserUpdatePasswordPage';
import UserAllJobsPage from './pages/user/UserAllJobsPage';
import EditJob from './pages/admin/EditJob';

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
						path: 'update-password/:id',
						element: <UserUpdatePasswordPage />,
					},
					{
						path: 'all-jobs',
						element: <UserAllJobsPage />,
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
				path: 'admin',
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
					{
						path: 'users/activity',
						element: <UserActivity />,
					},
					{
						path: 'jobs/edit',
						element: <EditJob />
					}
				],
			},
		],
	},
]);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
