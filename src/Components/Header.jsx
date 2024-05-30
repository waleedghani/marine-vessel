import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logo } from "../images/index";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/Style.css";
import Hamburger from "hamburger-react";

const Header = () => {
	const [isOpen, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!isOpen);
	};

	return (
		<>
			<section className="header">
				<Container>
					<Row className="align-items-center">
						<Col lg={3} xs={6}>
							<div className="logo-wrapper">
								<img src={logo} className="img-fluid" alt="Company Logo" />
							</div>
						</Col>
						<Col lg={6} xs={6} className="hidden-wrapper">
							<div className="navbar-wrapper ">
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about">About</Link>
									</li>
									<li>
										<Link to="/faqs">FAQs</Link>
									</li>
									<li>
										<Link to="/contact">Contact</Link>
									</li>
								</ul>
							</div>
						</Col>
						<Col
							lg={3}
							xs={6}
							className="position-relative d-flex align-items-center gap-3"
						>
							<div className="btn-wrapper">
								<Link to="/" className="btn">
									Sign In
								</Link>
							</div>
							<Hamburger toggled={isOpen} toggle={toggleMenu} />
						</Col>
					</Row>
				</Container>
			</section>
			<div id="top-nav" className={isOpen ? "" : "hidden"}>
				<div className="nav-menu">
					<div className="menu-list navbar-wrapper">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/faqs">FAQs</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
