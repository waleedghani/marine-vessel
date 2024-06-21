import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/commonStyle.css";
import "./index.scss";
import Home from "./pages/Home";
import PublicRoutes from "./Routes/Publicroutes";
import DynamicPage from "./Components/DynamicPage/DynamicPage";
import { useGetPagesQuery } from "./RTK/service";

function App() {
	const { data, error, isLoading } = useGetPagesQuery();
	const meta = data?.response?.data[4];

	console.log(meta?.[0], "keyyy");
	const metaTitle = meta?.meta_title ? meta?.meta_title : "Home";
	const metaDescription = meta?.meta_description ? meta?.meta_description : "Home Description";
	return (
		<>
			<DynamicPage
				initialTitle={metaTitle} initialDescription={metaDescription} />
			<PublicRoutes>
				<Home />
			</PublicRoutes>
		</>
	);
}

export default App;
