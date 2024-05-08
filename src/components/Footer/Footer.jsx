import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaBehance,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  const phoneNumber = "+44 79 20107515";
  return (
    <div className="footer bg-dark section-p" id="footer">
      <div className="container">
        <div className="section-title">
          <h3 className="text-brown">
            Follow <span className="text-white">Us</span>
          </h3>
        </div>
        <div className="footer-content">
          <ul className="flex footer-social-links flex-c">
            <li>
              <a href="https://web.facebook.com/aryaayurveda.co.uk"  target="_blank" className="text-white" rel="noreferrer">
                <FaFacebookF />
              </a>
            </li>
           
            <li>
              <a href="https://www.instagram.com/aryaa_ayurveda"  target="_blank" className="text-white" rel="noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
                <FaPinterest />
              </a>
            </li>
            <li className="phone-number">
            <a href={`tel:${phoneNumber}`} className="text-white">
              <FaPhone />
              <span>{phoneNumber}</span>
            </a>
          </li>
          </ul>
          <p className="text-center text-white fs-14 op-07 fw-3 ls-1 reserved-text">
            All Rights Reserved &copy; 2024
          </p>
        </div>
        <div className="contact-info">
          <p className="text-white">43A, Piercefield Road, Formby, L37 7DG</p>
          <p className="text-white">Opening Hours: Monday to Sunday, 10.00 AM - 5.00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
