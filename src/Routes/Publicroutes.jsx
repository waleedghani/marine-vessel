// Import necessary libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; // Import your Home component
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy"
import TermConditions from "../pages/TermConditions/TermConditions"
import DeleteAccountPage from "../pages/DeleteAccountPage/DeleteAccountPage";

// Define the PublicRoutes component
const PublicRoutes = () => {
	return (
		// Use BrowserRouter as the root component for routing
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact-us" element={<Contact />} />
				<Route path="/term-condition" element={<TermConditions />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/delete-account-page" element={<DeleteAccountPage />} />
			</Routes>
		</BrowserRouter>
	);
};

// Export the PublicRoutes component
export default PublicRoutes;
