import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logo } from "../images/index";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/Style.css";

const Header = () => {
	return (
		<section className="header">
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
									<Link To="/">Home</Link>
									<Link To="/about">About</Link>
									<Link To="/faqs">FAQs</Link>
									<Link To="/contact">Contact</Link>
								</li>
							</ul>
						</div>
					</Col>
					<Col lg={3} xs={6}>
						<div className="btn-wrapper">
							<Link To="/" className="btn">
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
