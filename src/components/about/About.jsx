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
          <p className="about__description">
            Full Stack certified Java SE 17 developer, specializing in React,
            Next.js, Node.js and Spring Boot.
            <br></br>
            <br></br>
            With a wealth of experience in Agile environments, I have
            participated in the development of dynamic web platforms, optimized
            SQL databases, and ensured continuous integration on collaborative
            projects. 
            <br></br>
            <br></br>
            Passionate about innovation, collaboration and continuous
            improvement, I put my technical and human skills to work on
            demanding projects.
          </p>

          <a
            download="Mostafa Akajdid CV.pdf"
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
