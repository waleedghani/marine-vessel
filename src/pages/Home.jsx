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
	shadowBg,
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
import MarinaSlider from "../Components/MarinaSlider/MarinaSlider";
import { useGetFaqQuery, useGetMarinaBenefitQuery, useGetPartnerQuery, useGetTestimonialQuery, useGetSiteSettingQuery } from "../RTK/service";
import { Skeleton } from "antd";

const Home = () => {

	const { data: faqData, error: faqError, isLoading: faqIsLoading } = useGetFaqQuery();
	const { data: testimonialData, error: testimonialError, isLoading: testimonialIsLoading } = useGetTestimonialQuery();
	const { data: benefitData, error: benefitError, isLoading: benefitIsLoading } = useGetMarinaBenefitQuery();
	const { data: partnerData, error: partnerError, isLoading: partnerIsLoading } = useGetPartnerQuery();
	const { data, error, isLoading } = useGetSiteSettingQuery();


	const homeData = data?.response?.data?.[0];

	console.log(testimonialData ,"testimonialData");

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
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		speed: 6000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: "linear",
		draggable: false,
		focusOnSelect: false,
		pauseOnFocus: true,
		pauseOnHover: true,
		initialSlide: 1,
		// infinite: true,
		// slidesToShow: 6,
		// slidesToScroll: 1,
		// speed: 4000,
		// cssEase: "linear",
		// autoplay: true,
		// loop:true,
		// autoplaySpeed: 4000,
		// arrows: false,
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
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
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

	const sliderverticaltestemonial = {
		dots: true,
        arrows: false,
        infinite: true,
        speed: 7000,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 7000,
        cssEase: "ease-in-out",
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
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
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};
	// const faqData = [
	// 	{
	// 		question: "Is Marina Eye suitable for all types of boaters?",
	// 		answer:
	// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
	// 	},
	// 	{
	// 		question: "ow do I connect with other boaters on Marina Eye?",
	// 		answer:
	// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
	// 	},
	// 	{
	// 		question: "Can I find local attractions near marinas using Marina Eye?",
	// 		answer:
	// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
	// 	},
	// 	{
	// 		question: "Is the information on Marina Eye up-to-date?",
	// 		answer:
	// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
	// 	},
	// 	// Add more FAQ items as needed
	// ];

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
								<h5 className="text-uppercase">Welcome to Marina Eye</h5>
								<h1 className="mt-3 mb-3">
									{homeData?.section_one_title}
								</h1>
								<p className="text-light">
									{homeData?.section_one_sub_title}
								</p>
								<div className="pay-btn d-flex align-items-center gap-2">
									<Link to={homeData?.google_link}>
										<img
											src={googleplay}
											className="img-fluid"
											alt="Google Play"
										/>
									</Link>
									<Link to={homeData?.app_link}>
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
								<h5 className="text-uppercase">Welcome to Marina Eye</h5>
								<h2 className="mb-3 mt-3">{homeData?.section_two_title}</h2>
								<p>
									{homeData?.section_two_description}
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={10} className="mx-auto">
							<div className="slider-wrapper mt-4">
								<Slider {...settings}>
									{partnerIsLoading ? (
										Array.from({ length: 5 }).map((_, index) => (
											<div key={index} className="px-2">
												<Skeleton className="img-fluid" avatar />
											</div>
										))

									) : (
										partnerData?.response?.data?.length > 0 ? (
											partnerData?.response?.data?.map((partner, index) => (
												<div key={index} className="px-2">
													<img
														src={partner?.image_url}
														className="img-fluid"
														alt={`Slider Image ${index}`}
													/>
												</div>
											))
										) : (
											<div className="px-2">
												<p>No partners available</p>
											</div>
										)
									)}
								</Slider>


							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="form-secs-sec" id="aboutSec">
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
								<h5 className="text-uppercase">Welcome to Marina Eye</h5>
								<h2 className="mb-3 mt-3">
									{homeData?.section_three_title}
								</h2>
								<p>
									{homeData?.section_three_description}
								</p>
								{/* <Link to="" className="anchor-read-me">
									Read More
								</Link> */}
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<MarinaSlider />

			<section className="discover-sec bg-yellow">
				<Container>
					<Row>
						<Col lg={7} className="mx-auto">
							<div className="marina-slider-content mt-5 text-center">
								<h5 className="text-uppercase">Why use our application</h5>
								<h2 className="mb-3 mt-3">
									{homeData?.section_five_title}
								</h2>
							</div>
						</Col>
					</Row>
					<div className="mt-5">
						<div className="mx-auto">
							<Row>
								{benefitIsLoading ? (
									<Skeleton />
								) : (
									benefitData?.response?.data.map((item, index) => (
										<Col lg={3} key={index}>
											<div className="content-discover"  >
												<img src={item?.image_url} className="img-fluid" alt="" />
												<h5>{item?.title}</h5>
												<p>{item?.description}</p>
											</div>
										</Col>
									))
								)}
							</Row>
						</div>

					</div>
				</Container>
			</section>
			<section className="faqs" id="faqs">
				<Container>
					<Row>
						<Col lg={7} className="mx-auto">
							<div className="marina-slider-content mt-5 text-center">
								<h5 className="text-uppercase">Frequently asked questionS</h5>
								<h2 className="mb-3 mt-3">	{homeData?.section_six_title}
								</h2>
								<p>
									{homeData?.section_six_description}
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={8} className="mx-auto">

							<div className="faq-container">
								{faqIsLoading ? (
									<Skeleton />

								) : (
									faqData?.response?.data.map((item, index) => (
										<div key={index} className="faq-item">
											<div
												className={`question ${expandedIndex === index ? "expanded" : ""}`}
												onClick={() => toggleAnswer(index)}
												aria-expanded={expandedIndex === index ? "true" : "false"}
												aria-controls={`answer-${index}`}
												role="button"
												tabIndex={0}
											>
												<span>{item.question}</span>
											</div>
											{expandedIndex === index && (  // Show answer if expandedIndex matches current index
												<p className="answer" id={`answer-${index}`}>
													{item.answer}
												</p>
											)}
										</div>
									))
								)}
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
								{testimonialIsLoading ? (
									<Skeleton />

								) : (
									testimonialData?.response?.data.map((item, index) => (
										<div className="testemonial-content " key={index}>
											<div className="tes-main d-flex justify-content-between align-items-start">
												<div className="testeminial-img d-flex gap-3 align-items-center">
													<img src={item?.image_url} className="img-fluid" alt="" />
													<div>
														<h5>{item?.name}</h5>
														<h6>{item?.designation}</h6>

													</div>
												</div>
												<h4>A month Ago</h4>
											</div>
											<p>
												{item?.description}
											</p>
										</div>
									))
								)}

								{/* <div className="testemonial-content ">
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
								</div> */}
							</Slider>
						</Col>
						<Col lg={6}>
							<div className="marina-slider-content  text-start">
								<h5 className="text-uppercase">Welcome to Marina Eye</h5>
								<h2 className="mb-3 mt-3">
									{homeData?.section_seven_title}
								</h2>
								<p>
									{homeData?.section_seven_description}

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
