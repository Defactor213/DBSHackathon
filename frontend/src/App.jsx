import {
	Box,
	Button,
	Checkbox,
	Container,
	Divider,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Input,
	Stack,
} from "@chakra-ui/react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { PasswordField } from "./components/PasswordField";
import { useState } from "react";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";
import ShowItinerary from "./pages/showItinerary";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/Signup.jsx";

const App = () => {
	return (
		<Router>
			<Routes>
				{/* landing page */}
				<Route index element={<Navigate to="/login" />} />

				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />

				{/* protected, need to login first */}
				<Route element={<ProtectedRoute />}>
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
