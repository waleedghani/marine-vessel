import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logo } from "../images/index";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/Style.css";

const Header = () => {
	const [isSticky, setSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setSticky(true);
			} else {
				setSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Remove the event listener when component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section className={`header ${isSticky ? "sticky" : ""}`}>
			<Container>
				<Row className="align-items-center">
					<Col lg={3} xs={6}>
						<div className="logo-wrapper">
							<img src={logo} className="img-fluid" alt="Company Logo" />
						</div>
					</Col>
					<Col lg={6} xs={6}>
						<div className="navbar-wrapper">
							<ul>
								<li>
									<Link to="/">Home</Link>
									<Link to="/about">About</Link>
									<Link to="/faqs">FAQs</Link>
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
						</div>
					</Col>
					<Col lg={3} xs={6}>
						<div className="btn-wrapper">
							<Link to="/" className="btn">
								Sign In
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Header;
