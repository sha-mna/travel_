import "./App.css";
import Home from "./components/Home";
import Booking from './components/Booking';
import Packages from "./components/Packages";
import Services from "./components/Services";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/booking" element={<Booking />} />
				<Route path="/packages" element={<Packages />} />
				<Route path="/services" element={<Services />} />
				<Route path="/about" element={<About />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
