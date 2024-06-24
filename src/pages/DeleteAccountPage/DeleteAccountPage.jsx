import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../../assets/css/pagesCss.css";
import { useGetPagesQuery } from "../../RTK/service";
import { Skeleton } from "antd";

const DeleteAccountPage = () => {
	const { data, error, isLoading } = useGetPagesQuery();

	const termData = data?.response?.data?.filter(
		(a) => a.slug === "delete-account",
	);

	console.log(termData);

	return (
		<>
			<Header bg={"#146dfa"} />
			<section>
				<div className="container pt-5">
					<h1 className="pages_heading text-center">
						{isLoading ? <Skeleton /> : termData?.[0]?.title}
					</h1>
					{termData && termData[0] && (
						<p
							className="text-dark"
							dangerouslySetInnerHTML={{ __html: termData[0].content }}
						/>
					)}
				</div>
			</section>
			<Footer />
		</>
	);
};

export default DeleteAccountPage;
