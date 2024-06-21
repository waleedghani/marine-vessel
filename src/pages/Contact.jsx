import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetContactUsMutation } from "../RTK/service";
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
	const [fields, setFields] = useState({ first_name: "", phone: "", message: "", email: "" });

	const [getContactUs, { isLoading, isSuccess, isError, data, error }] = useGetContactUsMutation();
	const handlePostContactInfo = async (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append("first_name", fields?.first_name);
		formData.append("phone", fields?.phone);
		formData.append("message", fields?.message);
		formData.append("email", fields?.email);

		try {
			const response = await getContactUs(formData).unwrap();
			toast.success('Thank you');
			console.log('getContactUs:', response);
		} catch (err) {
			console.error('Failed:', err);
		}
	};

	const handleChange = (e) => {
		setFields((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

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
									<Link to="#">
										<i className="fa fa-facebook" aria-hidden="true"></i>
									</Link>
								</li>
								<li className="mx-1">
									<Link to="#">
										<i className="fa fa-twitter" aria-hidden="true"></i>
									</Link>
								</li>
								<li className="mx-1">
									<Link to="#">
										<i className="fa fa-pinterest-p" aria-hidden="true"></i>
									</Link>
								</li>
								<li className="mx-1">
									<Link to="#">
										<i className="fa fa-instagram" aria-hidden="true"></i>
									</Link>
								</li>
							</ul>
						</div>
					</Col>
					<Col lg={6}>
						<div className="contact_form">
							<form onSubmit={handlePostContactInfo}>
							<Toaster />
								<div className="row">
									<div className="col-md-12">
										<div className="form-group mb-3">
											<input
												type="text"
												required
												placeholder="Full Name*"
												className="form-control magic_input"
												value={fields?.first_name}
												name="first_name"
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group mb-3">
											<input
												type="email"
												value={fields?.email}
												name="email"
												onChange={handleChange}
												required
												placeholder="Email*"
												className="form-control magic_input"
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group mb-3">
											<input
												type="tel"
												value={fields?.phone}
												name="phone"
												onChange={handleChange}
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
												value={fields?.message}
												name="message"
												onChange={handleChange}
												placeholder="Message"
												className="form-control magic_input"
											></textarea>
										</div>
									</div>
									<div className="col-md-12">
										<div className="button-group text-center">
											<button type="submit" className="marineBtn">
											{isLoading ? 'Loading...' : 'Submit'}
											</button>
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
