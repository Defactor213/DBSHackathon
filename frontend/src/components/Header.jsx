import React from "react";
// change to chakraUI
// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; // Make sure to import Link from react-router-dom

const Header = () => {
	const navigate = useNavigate();
	const username = localStorage.getItem("username");

	const signOut = () => {
		// Clear the JWT token from localStorage or any other user-related data
		localStorage.clear();

		// Redirect the user to the login page
		navigate("/login");
	};

	return (
		<>
		</>
	);
};

export default Header;
