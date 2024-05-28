import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/Style.css";
import "./index.scss";
import Home from "./pages/Home";
import PublicRoutes from "./Routes/Publicroutes";

function App() {
	return (
		<>
			<PublicRoutes>
				<Home />
			</PublicRoutes>
		</>
	);
}

export default App;
