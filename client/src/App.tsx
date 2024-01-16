import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/visitor/LandingPage";

import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

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
	// ...
	// also check out the docs for nested routes if needed
]);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};
export default App;
