// eslint-disable-next-line no-unused-vars
import React from "react";
import { send } from "../../assets/assets";
import TextDecrypt from "../Utils/TextDecrypt";
import { TypeAnimation } from "react-type-animation";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        <TextDecrypt text={"MOSTAFA AKAJDID"} />
      </h1>
      <TypeAnimation
        sequence={[
          "Web Developer",
          3000,
          "React Developer",
          3000,
          "FullStack Developer",
          3000,
        ]}
        cursor={false}
        wrapper="span"
        speed={5}
        className="home__subtitle"
        repeat={Infinity}
      />
      {/* <p className="home__description">
        A passionate Full-Stack Developer specializing in the MERN stack, based
        in Agadir, Morocco.
      </p> */}
      <p className="home__description">
        I&apos;m a passionate Full-Stack Developer based in Casablanca, Morocco, with
        expertise in crafting scalable and robust web applications. 
        <br/>
        <br/>
        My primary tech stack includes MERN (MongoDB, Express, React, Node.js),
        complemented by solid experience in Java Spring Boot and Next.js. 
        <br/>
        <br/>
        I am constantly pushing my skills forward through hands-on projects,
        continuous learning, and a strong commitment to code quality and
        performance. I thrive on building full-stack solutions that deliver
        real-world impact.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <img src={send} alt="send icon" className="button__icon" />
      </a>
    </div>
  );
};

export default Data;
