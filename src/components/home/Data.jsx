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
      I am a Full-Stack developer based in Agadir, Maroc. <br></br>
      I am very passionate
      about improving my coding skills & developing applications & websites. I
      build WebApps and Websites using MERN Stack. Working for myself to improve
      my skills. Love to build Full-Stack clones.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <img src={send} alt="send icon" className="button__icon" />
      </a>
    </div>
  );
};

export default Data;
