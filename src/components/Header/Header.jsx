import React from "react";
import "./Header.css";
import Navbar, { smoothScrollTo } from "../Navbar/Navbar";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col header" id="header">
      <Navbar />

      <div className="container flex">
        <div className="header-content">
          <h2 className="text-white text-uppercase op-07 fw-6 ls-2">
            DESIRE FOR LONG LIFE
          </h2>
          <h1 className="text-white fw-6 header-title">
            Welcome to <span className="text-brown">Arya Ayurveda</span>
            {/* Care in the hands of True Ayurveda experts */}
            <br />
          </h1>
          <h3 className="text-white fw-6">
            Care in the hands of True Ayurveda experts{" "}
          </h3>
          <div className="flex btn-groups">
            <button type="button" className="btn-item bg-brown fw-4 ls-2"  
             onClick={() => smoothScrollTo("#services")}>
              Our Services
            </button>
     
            <button type="button" className="btn-item bg-dark fw-4 ls-2"
            onClick={() => smoothScrollTo("#contact")}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
