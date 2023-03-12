import React from "react";
import Zen from "../assets/zen3.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Zen})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT ME</h1>
        <p>
          I have recently completed studies for my Bachelor of Science in
          Information Technology at Arizona State University where I earned
          Summa Cum Laude honors from the Ira A. Fulton Schools of Engineering.
        </p>
        <p>
          During the past four- and one-half years, I have managed to attend
          classes while continuing to work full time, as well as manage time for
          family and friends. I believe this exemplifies my ability to
          self-motivate, remain focused on a long-term goal, and manage time
          expertly. I have taken courses that qualify me to pursue various
          fields in the computer industry and I have decided that I am most
          interested in software and web development.
        </p>
        <p>
          I currently continue to hone my skills in front end development by
          working with Javascript libraries such as ReactJS and MUI, as well as
          HTML5 and CSS. I am confident in my ability to adapt to any
          environment and be comfortable with any coding or scripting language.
        </p>
      </div>
    </div>
  );
}

export default About;
