import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {
	return (
		<div>
			<NavBar />

			{/* renders all the children */}
			<Outlet />
		</div>
	);
}
