import React from "react";
import "../assets/css/Header.css";
import '../assets/css/Responsive.css'
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <div className=" head text-white p-2">
        <div className="container-lg  d-flex justify-content-start justify-content-xl-between">
          <div className="logo">
            <h1>
              Jr<span style={{ color: "#08ff88", fontWeight: "bolder" }}>.</span> PORTFOLIO
            </h1>
          </div>
          <nav className="d-none d-xl-block">
            <ul className="nav-Links ">
              <li>
                <Link to={"welcome-main"} className="active-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="projects">My Works</Link>
              </li>
              <li>
                <Link to="education">Eduaction</Link>
              </li>
              <button>CONTACT ME</button>
            </ul>
          </nav>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Header;
