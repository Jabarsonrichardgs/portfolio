import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Project1 from "../assets/Images/p4.png";
import Project2 from "../assets/Images/p6.png";
import Project3 from "../assets/Images/p1.png";
import Project4 from "../assets/Images/p2.png";
import Project5 from "../assets/Images/p5.png";
import Project6 from "../assets/Images/p3.png";

const projects = [
  {
    title: "IMDB Clone",
    image: Project1, // Replace with your actual project image URL
    description:
      "A fully functional e-commerce website built with React, Redux, and Firebase. It supports product listings, shopping carts, and user authentication.",
    github: "https://github.com/yourusername/",
    liveDemo: "https://imdb-two-pi.vercel.app/",
  },
  {
    title: "Blog Application",
    image: Project2, // Replace with your actual project image URL
    description:
      "A weather application that uses a third-party API to fetch weather data based on user location. Built with React and styled-components.",
    github: "https://github.com/yourusername/weather-app",
    liveDemo: "https://weatherapp.com",
  },
  {
    title: " Task Manager (CRUD App)",
    image: Project3, // Replace with your actual project image URL
    description:
      "A task manager app with full CRUD functionality (Create, Read, Update, Delete). Built using React and local storage.",
    github: "https://github.com/yourusername/task-manager",
    liveDemo: "https://taskmanager.com",
  },
  {
    title: " Education Courses Website",
    image: Project4, // Replace with your actual project image URL
    description:
      "An online platform of an institute where users and students can browse educational courses. Built with React.js.",
    github: "https://github.com/yourusername/education-courses",
    liveDemo: "https://educationcourses.com",
  },
  {
    title: " Gym Website",
    image: Project5, // Replace with your actual project image URL
    description:
      "A gym website that allows users to view available gym classes, sign up, and manage their memberships. Built with React.js and styled-components.",
    github: "https://github.com/yourusername/gym-website",
    liveDemo: "https://gymwebsite.com",
  },
  {
    title: "Book Cart",
    image: Project6, // Replace with your actual project image URL
    description:
      "A book cart app where users can browse books, add them to their cart, and proceed to checkout. Built with React and local storage for cart persistence.",
    github: "https://github.com/yourusername/book-cart",
    liveDemo: "https://bookcart.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container-md p-5" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="text-center mb-5 pr-title title"  >
       MY WORKS
        <span style={{ color: "#08ff88", fontWeight: "bolder" }}>.</span>
      </h1>
      <div className="row project-list">
        {projects.map((project, index) => (
          <div className="col-lg-4 mb-5" key={index}  data-aos="fade-up" data-aos-duration="1000">
            <div className="card shadow-lg">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title mb-4">{project.title}</h5>
            
                <div className="d-flex pr-btn justify-content-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn p-btn w-100 p-2 mb-3"
                  >
                    <FaGithub className="git" /> GitHub
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success w-100 p-2 mb-4"
                    
                   
                  >
                    <FaExternalLinkAlt target="_blank" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
