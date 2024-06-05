import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { WebLogo } from "../images/index";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/commonStyle.css";
import Hamburger from "hamburger-react";

const Header = ({ bg }) => {
	const [isOpen, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!isOpen);
	};

	return (
		<>
			<section
				className="header"
				style={{ background: bg, position: bg ? "unset" : "absolute" }}
			>
				<Container>
					<Row className="align-items-center">
						<Col lg={3} xs={6}>
							<div className="logo-wrapper">
								<Link to="/">
									<img src={WebLogo} className="img-fluid" alt="Company Logo" />
								</Link>
							</div>
						</Col>
						<Col lg={6} xs={6} className="hidden-wrapper">
							<div className="navbar-wrapper ">
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<a href={bg ? "/" : "#aboutSec"}>About</a>
									</li>
									<li>
										<a href={bg ? "/" : "#faqs"}>FAQs</a>
									</li>
									<li>
										<Link to="/contact-us">Contact</Link>
									</li>
								</ul>
							</div>
						</Col>
						<Col
							lg={3}
							xs={6}
							className="position-relative d-flex align-items-center justify-content-end  gap-3 col-lg-3 col-6"
						>
							{/* <div className="btn-wrapper">
								<Link to="/" className="btn">
									Sign In
								</Link>
							</div> */}
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
