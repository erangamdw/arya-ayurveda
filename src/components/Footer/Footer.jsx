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
  const phoneNumber = "+9412345678";
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
              <a href="/" className="text-white">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
                <FaPinterest />
              </a>
            </li>
            <li>
              <a href={`tel:${phoneNumber}`} className="text-white">
                <FaPhone /> {phoneNumber}
              </a>
            </li>
          </ul>
          <p className="text-center text-white fs-14 op-07 fw-3 ls-1 reserved-text">
            All Rights Reserved &copy; 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
