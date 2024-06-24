import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/commonStyle.css";
import { WebLogo, appstore, googleplay } from "../images";
import { useGetNewsLetterMutation, useGetSiteSettingQuery } from "../RTK/service";
import toast, { Toaster } from 'react-hot-toast';

const Footer = ({ diffPage }) => {
	const [newsLetter, setNewsLetter] = useState('');
	const [getNewsLetter, { isLoading, isSuccess, isError, data, error }] = useGetNewsLetterMutation();
	const { data: site, error: siteError, isLoading: siteLoading } = useGetSiteSettingQuery();

	const footerData = site?.response?.data?.[0];
	const handleGetNewsletter = async () => {
		const formData = new FormData();
		formData.append('email', newsLetter);
		try {
			const response = await getNewsLetter(formData).unwrap();
			toast.success('Thank you');
		} catch (err) {
			console.error('Failed:', err);
		}
	};

	const handleChange = (e) => {
		setNewsLetter(e.target.value);
	};

	return (
		<>
			<footer>
				<Container>
					<Row className="align-items-end">
						<Col lg={5}>
							<div className="footer-content">
								<div className="footer_logo">
									<Link to="/">
										<figure>
											<img
												src={footerData?.logo_path}
												alt="footer-logo"
												className="img-fluid"
											/>
										</figure>
									</Link>
								</div>
								<h3>Download Our Application & Get The Most Out of It</h3>
								<div className="pay-btn d-flex align-items-center gap-2 mt-3">
									<Link to={footerData?.google_link}>
										<img
											src={googleplay}
											className="img-fluid"
											alt="Google Play"
										/>
									</Link>
									<Link to={footerData?.app_link}>
										<img src={appstore} className="img-fluid" alt="App Store" />
									</Link>
								</div>
							</div>
						</Col>
						<Col lg={7}>
							<Row>
								<Col col={3}>
									<div className="list-url-footer">
										<h5>Menu</h5>
										<ul>
											<li>
												<Link to="/">Home</Link>
												<a href={diffPage ? "/" : "#aboutSec"}>About</a>
												<a href={diffPage ? "/" : "#faqs"}>FAQs</a>
												<Link to="/contact-us">Contact</Link>
											</li>
										</ul>
									</div>
								</Col>
								<Col col={4}>
									<div className="list-url-footer">
										<h5>Company</h5>
										<ul>
											<li>
												<Link to="/term-condition">Terms & Condition</Link>
												<Link to="/privacy-policy">Privacy Policy</Link>
												<Link to="/delete-account-page">Delete Account Page</Link>
												<Link to="/">Cookie Policy</Link>
											</li>
										</ul>
									</div>
								</Col>
								<Col md={5}>
									<div className="list-url-footer">
										<h5>Subscribe To Our Newsletter</h5>
										<Form>



											<Form.Group className="mb-3" controlId="formBasicEmail">

												<Form.Control type="email" placeholder="Enter email" value={newsLetter}
													onChange={handleChange} />
											</Form.Group>

											<Link to="" className="btn gold"
												onClick={handleGetNewsletter}>
												{isLoading ? 'Loading...' : 'Submit'}
											</Link>
											<Toaster
												position="top-center"
												reverseOrder={true}
											/>
										</Form>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	);
};

export default Footer;
