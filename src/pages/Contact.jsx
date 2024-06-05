import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header bg={"#146dfa"} />

			{/* Contact Sec Start Here */}
			<section className="contact_sec">
				<Row>
					<Col lg={6}>
						<div className="contact_details">
							<div className="title_wrapper">
								<h2 className="title">Contact Us</h2>
								<p className="description">
									We would love to speak with you.
									<br />
									Feel free to reach out using the below details.
								</p>
							</div>
							<div className="details">
								<h3 className="sub_title">Get In Touch</h3>
								<ul className="list_details px-0 mb-0 list-unstyled">
									<li className="mb-2">
										<a href="tel:123-456789">123-456789</a>
									</li>
									<li className="mb-2">
										<a href="mailto:example@admin.com">example@admin.com</a>
									</li>
								</ul>
							</div>
							<ul className="social_icons d-flex flex-wrap pt-4 px-0 mb-0 list-unstyled">
								<li className="mx-1">
									<Link>
										<i className="fa fa-facebook" aria-hidden="true"></i>
									</Link>
								</li>
								<li className="mx-1">
									<Link>
										<i className="fa fa-twitter" aria-hidden="true"></i>
									</Link>
								</li>
								<li className="mx-1">
									<Link>
										<i className="fa fa-pinterest-p" aria-hidden="true"></i>
									</Link>
								</li>
								<li className="mx-1">
									<Link>
										<i className="fa fa-instagram" aria-hidden="true"></i>
									</Link>
								</li>
							</ul>
						</div>
					</Col>
					<Col lg={6}>
						<div className="contact_form">
							<form action="">
								<div className="row">
									<div className="col-md-12">
										<div className="form-group mb-3">
											<input
												type="text"
												required
												placeholder="Full Name*"
												className="form-control magic_input"
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group mb-3">
											<input
												type="email"
												required
												placeholder="Email*"
												className="form-control magic_input"
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group mb-3">
											<input
												type="phone"
												required
												placeholder="Phone Number*"
												className="form-control magic_input"
											/>
										</div>
									</div>
									<div className="col-md-12 mb-3">
										<div className="form-group">
											<textarea
												required
												placeholder="Message"
												className="form-control magic_input"
											></textarea>
										</div>
									</div>
									<div className="col-md-12">
										<div className="button-group text-center">
											<button className="marineBtn">Send</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</Col>
				</Row>
			</section>
			{/* Contact Sec End Here */}

			<Footer diffPage={true} />
		</>
	);
};

export default Contact;
