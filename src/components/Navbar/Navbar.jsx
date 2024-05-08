import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const smoothScrollTo = (target) => {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Navbar = () => {
  const [navToggler, setNavToggler] = useState(false);
  const closeNavbar = () => setNavToggler(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="flex brand-and-toggler flex-sb">
            <Link
              to="/"
              className="text-white navbar-brand text-uppercase fw-7 ls-2 fs-22"
            >
              Arya Ayurveda
            </Link>
            <button
              type="button"
              className="text-white navbar-open-btn"
              onClick={() => setNavToggler(!navToggler)}
            >
              <FaBars size={30} />
            </button>

            <div
              className={
                navToggler
                  ? "navbar-collapse show-navbar-collapse"
                  : "navbar-collapse"
              }
            >
              <button
                type="button"
                className="text-white navbar-close-btn"
                onClick={closeNavbar}
              >
                <FaTimes size={30} />
              </button>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="text-white nav-link ls-1 text-uppercase fw-6 fs-22"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/#services"
                    className="text-white nav-link ls-1 text-uppercase fw-6 fs-22"
                    onClick={() => smoothScrollTo("#services")}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/#work"
                    className="text-white nav-link ls-1 text-uppercase fw-6 fs-22"
                    onClick={() => smoothScrollTo("#Works")}
                  >
                    Works
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/#about"
                    className="text-white nav-link ls-1 text-uppercase fw-6 fs-22"
                    onClick={() => smoothScrollTo("#about")}
                  >
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/#contact"
                    className="text-white nav-link ls-1 text-uppercase fw-6 fs-22"
                    onClick={() => smoothScrollTo("#contact")}
                  >
                    Booking Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
