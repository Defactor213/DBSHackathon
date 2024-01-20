import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
	const username = localStorage.getItem("username");
	console.log('hello world')
	return username ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
