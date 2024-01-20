import { useState } from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";

import Login from "./pages/login";
import Signup from "./pages/singup";
import ShowItinerary from "./pages/showItinerary";
import Dashboard from "./pages/dashboard";

function App() {
	//   <Routes>
	//   {/* landing page */}
	//   <Route index element={<Navigate to="/login" />} />

	//   <Route path="/homepage" element={<Homepage />} />
	//   <Route path="/login" element={<Login />} />
	//   <Route path="/signup" element={<Signup />} />

	//   {/* protected, need to login first */}
	//   <Route element={<ProtectedRoute />}>
	//     <Route path="/create" element={<Create />} />
	//     <Route path="/read" element={<Read />} />
	//     <Route path="/update" element={<Update />} />
	//     <Route path="/delete" element={<Delete />} />
	//   </Route>
	// </Routes>

	return (
		<Router>
			<Routes>
				<Route index element={<Navigate to="/login" />} />

				<Route path="/" element={<Login />} />
				<Route path="/" element={<Signup />} />

				<Route element={<ProtectedRoute />}>
					<Route path="/" element={<Dashboard />} />
					<Route path="/" element={<ShowItinerary />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
