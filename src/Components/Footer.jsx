import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/Style.css";
import { appstore, googleplay } from "../images";
const Footer = () => {
	return (
		<>
			<footer>
				<Container>
					<Row>
						<Col lg={5}>
							<div className="footer-content">
								<h3>Download Our Application & Get The Most Out of It</h3>
								<div className="pay-btn d-flex align-items-center gap-2 mt-3">
									<Link To="/">
										<img
											src={googleplay}
											className="img-fluid"
											alt="Google Play"
										/>
									</Link>
									<Link To="/">
										<img src={appstore} className="img-fluid" alt="App Store" />
									</Link>
								</div>
							</div>
						</Col>
						<Col lg={2}>
							<div className="list-url-footer">
								<h5>Menu</h5>
								<ul>
									<li>
										<Link To="/">Home</Link>
										<Link To="/">About</Link>
										<Link To="/">FAQs</Link>
										<Link To="/">Contact</Link>
									</li>
								</ul>
							</div>
						</Col>
						<Col lg={2}>
							<div className="list-url-footer">
								<h5>Company</h5>
								<ul>
									<li>
										<Link To="/">Terms & Condition </Link>
										<Link To="/">Privacy Policy</Link>
										<Link To="/">Cookie Policy</Link>
									</li>
								</ul>
							</div>
						</Col>
						<Col lg={3}>
							<div className="list-url-footer">
								<h5>Subscribe To Our Newsletter</h5>
								<Form>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Control type="email" placeholder="Enter email" />
									</Form.Group>
									<Link To="" className="btn gold">
										Submit
									</Link>
								</Form>
							</div>
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	);
};

export default Footer;
