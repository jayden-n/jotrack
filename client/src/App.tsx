import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/visitor/LandingPage';
import JobPage from './pages/visitor/JobPage';
import AboutPage from './pages/visitor/AboutPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import UserDashboardPage from './pages/user/UserDashboardPage';
import AdminDashboard from './pages/admin/Dashboard';
import HomePage from './pages/visitor/HomePage';
import AdminJobs from './pages/admin/JobList';
import AdminUsers from './pages/admin/UserSearch';
import AddJob from './pages/admin/AddJob';
import UserActivity from './pages/admin/UserActivity';
import UserApplications from './pages/user/UserApplications';
import UserBuildResume from './pages/user/UserBuildResume';
import DashboardLayout from './pages/admin/DashboardLayout';
import UserInfoPage from './pages/user/UserInfoPage';
import UserViewResume from './pages/user/UserViewResume';
import UserUpdatePasswordPage from './pages/user/UserUpdatePasswordPage';
import UserAllJobsPage from './pages/user/UserAllJobsPage';
import UserSingleJobPage from './pages/user/UserSingleJobPage';
import VisitorSingleJobPage from './pages/visitor/VisitorSingleJobPage';
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
				path: 'jobs',
				element: <JobPage />,
			},
			{
				path: 'about-us',
				element: <AboutPage />,
			},
			{
				path: 'job/:id',
				element: <VisitorSingleJobPage />,
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
						path: 'job/:id',
						element: <UserSingleJobPage />,
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
						path: 'add',
						element: <AddJob />,
					},
					{
						path: 'users',
						element: <AdminUsers />,
					},
					{
						path: 'activity',
						element: <UserActivity />,
					},
					{
						path: 'edit',
						element: <EditJob />
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
