import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";


function App() {
  const [count, setCount] = useState(0)

  return (
		<Router>
			<Routes>
				{/* landing page */}
				<Route index element={<Navigate to="/login" />} />

				<Route path="/homepage" element={<Homepage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />

				{/* protected, need to login first */}
				<Route element={<ProtectedRoute />}>
					<Route path="/create" element={<Create />} />
					<Route path="/read" element={<Read />} />
					<Route path="/update" element={<Update />} />
					<Route path="/delete" element={<Delete />} />
				</Route>
			</Routes>
		</Router>
  )
}

export default App
