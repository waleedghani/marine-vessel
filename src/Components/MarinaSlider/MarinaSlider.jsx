import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import { FaPlay, FaPause } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../MarinaSlider/MarinaSlider.css';
import { useGetMarinaApplicationQuery, useGetSiteSettingQuery } from '../../RTK/service';

// Dummy video file paths
const dummyVideoSrc = 'https://www.w3schools.com/html/mov_bbb.mp4';


// Dummy array of videos
const videos = [
    {
        title: 'Videos for a Better Understanding of Each Marina 1',
        description: 'Videos for a Better Understanding of Each Marina',
        src: dummyVideoSrc,
    },
    {
        title: 'Videos for a Better Understanding of Each Marina 2',
        description: 'Videos for a Better Understanding of Each Marina',
        src: dummyVideoSrc,
    },
    {
        title: 'Videos for a Better Understanding of Each Marina 3',
        description: 'Videos for a Better Understanding of Each Marina',
        src: dummyVideoSrc,
    },
    {
        title: 'Videos for a Better Understanding of Each Marina 4',
        description: 'Videos for a Better Understanding of Each Marina ',
        src: dummyVideoSrc,
    },
    {
        title: 'Videos for a Better Understanding of Each Marina 5',
        description: 'Videos for a Better Understanding of Each Marina',
        src: dummyVideoSrc,
    },
];

const MarinaSlider = () => {
    const { data, error, isLoading } = useGetMarinaApplicationQuery();
    const { data: site, error: siteError, isLoading: siteLoading } = useGetSiteSettingQuery();

    const videoData = site?.response?.data?.[0];
    const [currentIndex, setCurrentIndex] = useState(0);

    const [playing, setPlaying] = useState(Array(videos.length).fill(false));
    const videoRefs = useRef([]);
    const [loading, setLoading] = useState(false)

    const handlePlayPause = (index) => {
        setLoading(true)
        const newPlayingState = playing.map((item, i) => i === index ? !item : false); // Toggle current video
        setPlaying(newPlayingState);

        if (currentIndex !== null && currentIndex !== index) {
            videoRefs.current[currentIndex].pause(); // Pause the previously playing video
            setCurrentIndex(null);
        }

        if (currentIndex === index) {
            const video = videoRefs.current[index];
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        } else {
            const video = videoRefs.current[index];
            video.play();
            setCurrentIndex(index);
        }
    };

    const sliderSettings = {
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
        cssEase: 'ease-in-out',
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

    return (
        <section className="application-download-sec">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="marina-slider-content text-start">
                            <h5 className="text-uppercase">Welcome to Marina Eye</h5>
                            <h2 className="mb-3 mt-3">
                                {videoData?.section_four_title}                            </h2>
                        </div>
                        <div className="slider-vertical-play sliderverticalplay">
                            <Slider {...sliderSettings}>
                                {data?.response?.data?.map((video, index) => (
                                    <div key={index}>
                                        <div className="play-content">
                                            <div className="play-wrapper" onClick={() => handlePlayPause(index)}>
                                                {playing[index] ? (
                                                    <FaPause size={25} />
                                                ) : (
                                                    <FaPlay size={25} />
                                                )}
                                            </div>
                                            <div className="now-playing">
                                                <h5>Now Playing</h5>
                                                <h4>{video.title}</h4>
                                                <p>{video.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Col>
                    <Col lg={6} className='m-lg-0 my-4'>

                        {data?.response?.data?.map((video, index) => (
                            <video
                                key={index}
                                ref={(el) => (videoRefs.current[index] = el)}
                                src={video.video_url}
                                id="video_box"
                                className="img-fluid"
                                style={{ display: currentIndex === index ? 'block' : 'none' }}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MarinaSlider;
