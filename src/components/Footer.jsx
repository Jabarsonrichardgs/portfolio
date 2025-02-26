import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <>
      <div className="footer-container container-fluid pb-4" >
        <div className="footer container">
          <div className="address">
            <p className="h4 footer-head">Address</p>
            <p style={{ color: "#d6d6d684" }}>Coimbatore, Tamil Nadu, India</p>
          </div>
          <div className="quick-links">
            <p className="h4 footer-head">Quick Links</p>
            <ul>
              <li>
                <Link
                  to="/"
                  className="links"
                  style={{ textDecoration: "none", color: "#d6d6d684" }}
                >
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="links"
                  style={{ textDecoration: "none", color: "#d6d6d684" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="links"
                  style={{ textDecoration: "none", color: "#d6d6d684" }}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="links"
                  style={{ textDecoration: "none", color: "#d6d6d684" }}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="links"
                  style={{ textDecoration: "none", color: "#d6d6d684" }}
                >
                  My works
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact-me">
            <p className="h4 footer-head">Contact Me</p>
            <p className="contact-info">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <span style={{ color: "#d6d6d684" }}>
                {" "}
                 9789577438
              </span>
            </p>
            <p className="contact-info">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span style={{ color: "#d6d6d684" }}>
                {" "}
                jabarsonofficial@gmail.com
              </span>
            </p>
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Footer;
