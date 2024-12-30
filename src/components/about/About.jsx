// eslint-disable-next-line no-unused-vars
import React from "react";
import "./about.css";
import { files, resume, img2 } from "../../assets/assets";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={img2} alt="" className="about__img" />
        <div className="about__data">
          {/* <p className="about__description">
            As a Full-Stack Developer with expertise in the MERN stack, I
            possess an impressive arsenal of skills in HTML, CSS, JavaScript,
            React, Tailwind, and Node.js. 
          </p> */}
          <p className="about__description">
            My interest in becoming an Expert in Full-Stack Developer is quite
            strong. I am always eager to obtain a challenging position that will
            expand my knowledge, and learn and build upon my development skills.
            With my excellent technical skills, I can help you scale your
            business profit and maximize the organization&apos;s growth, goals,
            and value.
            <br></br>
            <br></br>
            You can get my resume to learn more by clicking on the download
            button below, I&apos;m excited to connect with you and hear your
            suggestions.
          </p>

          <a
            download="Sayyid_Marvan_Resume.pdf"
            href={resume}
            className="button button--flex"
          >
            Download CV
            <img src={files} alt="" className="button__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
