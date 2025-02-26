import React from "react";
import skills from "/skills.png";
import Html from "/html.png";
import Css from "/CSS3_.svg";
import Bootstrap from "/icons-hero.png";
import Reactjs from '/React-icon.svg'
import Node from '/node.jpg'
import Git from'/git.svg'
import Javascript from '/javascript.jpeg'
const Skills = () => {
  return (
    <div className="skill container-md "  data-aos="fade-up" data-aos-duration="1500">
      <div className="skils-container">

        <div className="skills-posess w-100">
          <h1 style={{textAlign:"center"}} className="w-100">
            The tools and technologies I work with
            <span style={{ color: "#08ff88", fontWeight: "bolder" }}>.</span>
          </h1>
          <div className="skills-images"  data-aos="fade-up" data-aos-duration="2500">
            <div className="html-imge">
              <img src={Html} alt="" />
              <p>HTML5</p>
            </div>
            <div className="html-imge">
              <img src={Css} alt="" />
              <p>CSS3</p>
            </div>
            <div className="html-imge">
              <img src={Javascript} alt="" />
              <p>Javascript</p>
            </div>
            <div className="html-imge">
              <img src={Bootstrap} alt="" />
              <p>Bootstrap</p>
            </div>
            <div className="html-imge">
              <img src={Reactjs} alt="" />
              <p>React Js</p>
            </div>
            <div className="html-imge">
              <img src={Node} alt="" />
              <p>Node JS</p>
            </div>
            <div className="html-imge">
              <img src={Git} alt="" />
              <p>Git/Git Hub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
