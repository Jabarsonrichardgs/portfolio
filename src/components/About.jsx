import React from "react";
import pic from "/about.jpg";
import { FaInstagram } from "react-icons/fa";



export const About = () => {
  return (
    <div className=" container about "  data-aos="fade-right" data-aos-duration="2000">
      <div className="about-content " >
        <div className="about-img">
          <img src={pic} alt="abou-me" />
        </div>
        <div className="about-me "  data-aos="fade-up" data-aos-duration="2000">
          <div className="about-title">
            <h1>
              About Me
              <span style={{ color: "#08ff88" }}>.</span>
            </h1>
            <p>
              I’m a passionate Frontend Developer and MERN Stack enthusiast,
              dedicated to building fast, scalable, and user-friendly web
              applications. With expertise in React, Node.js, MongoDB, and
              Express, I specialize in creating seamless digital experiences
              from the ground up.Skilled at designing beautiful, intuitive web
              applications that not only look great but also work smoothly,
              Always eager to learn and grow, I thrive on tackling new
              challenges and bringing creative solutions to life
              <span style={{ color: "#08ff88", fontWeight: "bolder" }}>.</span>
            </p>
            <a
              href="/Jabarson_Richard.pdf"
              style={{ textDecoration: "none" }}
              download="Jabarson_Richard.pdf"
            >
              <button className="download-btn">Download My Resume</button>
            </a>
            <a
              href="https://www.instagram.com/im._.jabarson"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark insta  p-2" // Bootstrap button styles
              style={{ borderRadius: "50%" }} // Optional: Makes the icon circular
            >
              <FaInstagram size={30} color="#fff" /> 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
