import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import {
	appstore,
	googleplay,
	homeimg,
	homeimg1,
	homeimg4,
	homeimg5,
	iconimg,
	iconimg1,
	iconimg2,
	iconimg3,
	imgd,
	play,
	slider,
	slider1,
	slider2,
	slider3,
	slider4,
	slider5,
	slider6,
	testemonial,
} from "../images";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ({ data }) => {
	const imagesslider = [
		slider,
		slider1,
		slider2,
		slider3,
		slider4,
		slider5,
		slider6,
	];
	const settings = {
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 2000,
		cssEase: "linear",
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	useEffect(() => {
		const slickActive = document.querySelector(".slick-active");
		if (slickActive) {
			slickActive.style.transform = "scale(1)";
		}
	}, []);

	const sliderverticalplay = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: "ease-in-out",
	};
	useEffect(() => {
		const slickActive = document.querySelector(".slick-active");
		if (slickActive) {
			slickActive.style.transform = "scale(1)";
		}
	}, []);

	const sliderverticaltestemonial = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: "ease-in-out",
	};
	const faqData = [
		{
			question: "Is Marina Eye suitable for all types of boaters?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
		},
		{
			question: "ow do I connect with other boaters on Marina Eye?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
		},
		{
			question: "Can I find local attractions near marinas using Marina Eye?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
		},
		{
			question: "Is the information on Marina Eye up-to-date?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
		},
		// Add more FAQ items as needed
	];

	const [expandedIndex, setExpandedIndex] = useState(null);

	const toggleAnswer = (index) => {
		setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<>
			<Header />
			<section className="banner">
				<Container>
					<Row className="align-items-center">
						<Col lg={6}>
							<div className="heading-banner">
								<h5>Welcome to Marina Eye</h5>
								<h1 className="mt-3 mb-3">
									Best platform for Enhancing Boater Marina Experience{" "}
								</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
								<div className="pay-btn d-flex align-items-center gap-2">
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
						<Col lg={6}>
							<div className="img-right-banner-mobile d-flex align-items-center gap-4 ">
								<img
									src={homeimg1}
									className="img-fluid img-wrapper img-wrpa"
									alt="Banner Image 1"
								/>
								<img
									src={homeimg}
									className="img-fluid img-wrapper"
									alt="Banner Image 2"
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="slider-sec pt-lg-5 pb-lg-5">
				<Container>
					<Row>
						<Col lg={7} className="mx-auto">
							<div className="marina-slider-content mt-5 text-center">
								<h5>Welcome to Marina Eye</h5>
								<h2 className="mb-3 mt-3">Trusted By Well Known Brands</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={10} className="mx-auto">
							<div className="slider-wrapper mt-4">
								<Slider {...settings}>
									{imagesslider.map((image, index) => (
										<div key={index}>
											<img
												src={image}
												className="img-fluid"
												alt={`Slider Image ${index}`}
											/>
										</div>
									))}
								</Slider>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="form-secs-sec">
				<Container>
					<Row>
						<Col lg={5}>
							<div className="img-wrapper position-relative">
								<img src={homeimg5} className="img-fluid" alt="" />
								<div className="position-wrapper">
									<img src={homeimg4} className="img-fluid" alt="" />
								</div>
							</div>
						</Col>
						<Col lg={1}></Col>
						<Col lg={6}>
							<div className="marina-slider-content mt-5 text-start">
								<h5>Welcome to Marina Eye</h5>
								<h2 className="mb-3 mt-3">
									From Seas to Your Screen Marina Eye Enhances Your Boating
									Journey
								</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis nostrud exercitation
									duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint
									occaecat cupidatat non proident, sunt in culpa qui officia.
								</p>
								<Link To="" className="anchor-read-me">
									Read More
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="application-download-sec">
				<Container>
					<Row>
						<Col lg={6}>
							<div className="marina-slider-content  text-start">
								<h5>Welcome to Marina Eye</h5>
								<h2 className="mb-3 mt-3">
									Download Our Application & Get The Most Out of It
								</h2>
							</div>
							<div className="slider-vertical-play sliderverticalplay">
								<Slider {...sliderverticalplay}>
									<div>
										<div className="play-content">
											<div className="play-wrapper">
												<img src={play} className="img-fluid" alt="" />
											</div>
											<div className="now-playing">
												<h5>Now Playing</h5>
												<h4>
													Videos for a Better Understanding of Each Marina
												</h4>
											</div>
										</div>
									</div>
									<div>
										<div className="play-content">
											<div className="play-wrapper">
												<img src={play} className="img-fluid" alt="" />
											</div>
											<div className="now-playing">
												<h5>Now Playing</h5>
												<h4>
													Videos for a Better Understanding of Each Marina
												</h4>
											</div>
										</div>
									</div>
									<div>
										<div className="play-content">
											<div className="play-wrapper">
												<img src={play} className="img-fluid" alt="" />
											</div>
											<div className="now-playing">
												<h5>Now Playing</h5>
												<h4>
													Videos for a Better Understanding of Each Marina
												</h4>
											</div>
										</div>
									</div>
									<div>
										<div className="play-content">
											<div className="play-wrapper">
												<img src={play} className="img-fluid" alt="" />
											</div>
											<div className="now-playing">
												<h5>Now Playing</h5>
												<h4>
													Videos for a Better Understanding of Each Marina
												</h4>
											</div>
										</div>
									</div>
									<div>
										<div className="play-content">
											<div className="play-wrapper">
												<img src={play} className="img-fluid" alt="" />
											</div>
											<div className="now-playing">
												<h5>Now Playing</h5>
												<h4>
													Videos for a Better Understanding of Each Marina
												</h4>
											</div>
										</div>
									</div>

									{/* Add more play-content divs as needed */}
								</Slider>
							</div>
						</Col>
						<Col lg={6}>
							<img src={imgd} className="img-fluid" alt="" />
						</Col>
					</Row>
				</Container>
			</section>
			<section className="discover-sec">
				<Container>
					<Row>
						<Col lg={7} className="mx-auto">
							<div className="marina-slider-content mt-5 text-center">
								<h5>Why use our application</h5>
								<h2 className="mb-3 mt-3">
									Discover the Benefits of Marina Eye for Seamless Docking
								</h2>
							</div>
						</Col>
					</Row>
					<Row className="mt-5">
						<Col lg={12} className="mx-auto">
							<Row>
								<Col lg={3}>
									<div className="content-discover">
										<img src={iconimg3} className="img-fluid" alt="" />
										<h5>Community and Support</h5>
										<p>
											Lorem ipsum dolor sit amet, consecte adipiscing elit, sed
											do eiusmod
										</p>
									</div>
								</Col>
								<Col lg={3}>
									<div className="content-discover">
										<img src={iconimg2} className="img-fluid" alt="" />
										<h5>Local Attractions and Amenities</h5>
										<p>
											Lorem ipsum dolor sit amet, consecte adipiscing elit, sed
											do eiusmod
										</p>
									</div>
								</Col>
								<Col lg={3}>
									<div className="content-discover">
										<img src={iconimg1} className="img-fluid" alt="" />
										<h5>User-Friendly Interface</h5>
										<p>
											Lorem ipsum dolor sit amet, consecte adipiscing elit, sed
											do eiusmod
										</p>
									</div>
								</Col>
								<Col lg={3}>
									<div className="content-discover">
										<img src={iconimg} className="img-fluid" alt="" />
										<h5>Comprehensive Marina Information</h5>
										<p>
											Lorem ipsum dolor sit amet, consecte adipiscing elit, sed
											do eiusmod
										</p>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="faqs">
				<Container>
					<Row>
						<Col lg={7} className="mx-auto">
							<div className="marina-slider-content mt-5 text-center">
								<h5>Frequently asked questionS</h5>
								<h2 className="mb-3 mt-3">Let us answer your Questions</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={8} className="mx-auto">
							<div className="faq-container">
								{faqData.map((item, index) => (
									<div key={index} className="faq-item">
										<div
											className={`question ${
												expandedIndex === index ? "expanded" : ""
											}`}
											onClick={() => toggleAnswer(index)}
											aria-expanded={expandedIndex === index ? "true" : "false"}
											aria-controls={`answer-${index}`}
											role="button"
											tabIndex={0}
										>
											<span>{item.question}</span>
										</div>
										{expandedIndex === index && (
											<p className="answer" id={`answer-${index}`}>
												{item.answer}
											</p>
										)}
									</div>
								))}
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="have-a-look-sec">
				<div className="container">
					<Row className="align-items-center">
						<Col lg={6}>
							<Slider {...sliderverticaltestemonial}>
								<div className="testemonial-content ">
									<div className="tes-main d-flex justify-content-between align-items-start">
										<div className="testeminial-img d-flex gap-3 align-items-center">
											<img src={testemonial} className="img-fluid" alt="" />
											<div>
												<h5>Salvatore Warner</h5>
												<h6>Yacht Captain</h6>
											</div>
										</div>
										<h4>A month Ago</h4>
									</div>
									<p>
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.Lorem ipsum dolor sit
										amet, consectetur adipiscing elit, sed do eiusmod tempor
									</p>
								</div>
								<div className="testemonial-content ">
									<div className="tes-main d-flex justify-content-between align-items-start">
										<div className="testeminial-img d-flex gap-3 align-items-center">
											<img src={testemonial} className="img-fluid" alt="" />
											<div>
												<h5>Salvatore Warner</h5>
												<h6>Yacht Captain</h6>
											</div>
										</div>
										<h4>A month Ago</h4>
									</div>
									<p>
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.Lorem ipsum dolor sit
										amet, consectetur adipiscing elit, sed do eiusmod tempor
									</p>
								</div>
								<div className="testemonial-content ">
									<div className="tes-main d-flex justify-content-between align-items-start">
										<div className="testeminial-img d-flex gap-3 align-items-center">
											<img src={testemonial} className="img-fluid" alt="" />
											<div>
												<h5>Salvatore Warner</h5>
												<h6>Yacht Captain</h6>
											</div>
										</div>
										<h4>A month Ago</h4>
									</div>
									<p>
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.Lorem ipsum dolor sit
										amet, consectetur adipiscing elit, sed do eiusmod tempor
									</p>
								</div>
							</Slider>
						</Col>
						<Col lg={6}>
							<div className="marina-slider-content  text-start">
								<h5>Welcome to Marina Eye</h5>
								<h2 className="mb-3 mt-3">
									Have a look at what our client say about Us
								</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis nostrud exercitation
									reprehenderit.
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Home;
