import React, { useRef, useState } from "react";
import "./About.css";
import images from "../../constants/images";
import { about_stats } from "../../constants/data";
import video from "../../assets/videos/about_video.mp4";
import { FaPlay } from "react-icons/fa";

const About = () => {
  const vidRef = useRef(null);
  const [toggleVideo, setToggleVideo] = useState(false);
  const playVideo = () => {
    setToggleVideo(!toggleVideo);
    if (toggleVideo) vidRef.current.play();
    else vidRef.current.pause();
  };

  return (
    <div className="about section-p" id="about">
      <div className="container">
        <div className="about-content">
          <div className="grid about-grid">
            <img
              src={images.About_doctor_1}
              alt=""
              className="mx-auto about-img"
            />
            <div className="section-title">
              <h3 className="text-brown">
                <span className="text-dark">Our</span> Expertise
              </h3>
              <p className="mx-auto text">
              Our expertise lies in harnessing centuries-old Ayurvedic wisdom to offer holistic healing solutions tailored to each individual's unique needs, promoting balance, vitality, and overall well-being.
              </p>
            </div>
          </div>

          <div className="grid about-grid">
            {about_stats.map((about_stat, index) => {
              return (
                <div className="flex text-center about-item" key={index}>
                  <div className="about-item-icon">
                    <img src={about_stat.image} alt="" />
                  </div>
                  <div className="text-left about-item-text">
                    <h3 className="fs-24 ls-2">{about_stat.value}</h3>
                    <p className="text">{about_stat.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid about-grid">
            <div className="section-title">
              <h3 className="text-brown">
                Video <span className="text-dark">Presentation</span>
              </h3>
              <p className="mx-auto text">
              Experience the transformative power of Ayurveda come to life in our video presentations, where ancient knowledge meets modern understanding, offering insights into our holistic approach to health and rejuvenation.
              </p>
            </div>

            <div className="about-video">
              <video className="about-video" autoPlay={false} loop ref={vidRef}>
                <source src={video} type="video/mp4" />
              </video>
              <button
                type="button"
                className="flex vidPlayBtn flex-c"
                onClick={playVideo}
              >
                <FaPlay className="text-brown" size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
