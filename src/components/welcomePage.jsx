import React from "react";
import Profile from "../assets/Images/Profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export const WelcomePage = () => {
  return (
    <>
      <div className="container welcome-main " data-aos="fade-in" data-aos-duration="2000">
        <div className="welcome-page-content "  data-aos="fade-up" data-aos-duration="1000">
          <h1 data-aos="fade-up" data-aos-duration="1000"   >
            Hello I<span className="colon">'</span>m{" "}
            <span className="name-text">Jabarson Richard G S</span>
            <span style={{ color: "#08ff88" }}>.</span>
          </h1>
          <h5 style={{ color: "#d6d6d684", textAlign: "justify" }}>
            And I'm a Mern Stack Developer
            <span style={{ color: "#08ff88" }}>.</span> Passionate about
            applying design principles and best practices to create visually
            appealing web applications
            <span style={{ color: "#08ff88" }}>.</span>
          </h5>
          <div className="resume-container">
            <a
              href="/Jabarson_Richard.pdf"
              style={{ textDecoration: "none" }}
              download="Jabarson_Richard.pdf"
            >
              <button className="download-btn">Download My Resume</button>
            </a>

            <div className="social-icons">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  style={{ marginLeft: "15px", color: "#333" }}
                />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  style={{ marginLeft: "15px", color: "#0077b5" }}
                />
                  
              </a>
            </div>
          </div>
        </div>
        <div className="image-fluid profile" data-aos="fade-left" data-aos-duration="1000">
          <img src={Profile} alt="Profile" />
        </div>
      </div>

   
    </>
  );
};
export default WelcomePage;