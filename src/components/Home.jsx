import React from "react";
import Header from "./Header";
import WelcomePage from "./welcomePage";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import Contact from "./Contact";
import Eduaction from "./Eduaction";


const Home = () => {
  return (
    <>
      <Header />
      <WelcomePage />
      <About />
      <Projects />
      <Skills />
      <Eduaction/>
      <Contact/>
      <Footer />
    </>
  );
};

export default Home;
