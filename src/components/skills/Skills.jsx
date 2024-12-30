import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
// import Tech from "./tech";
// import Skil from "./skil";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container  grid">
        {/* <Skil/> */}
        <Frontend />
        <Backend />
        {/* <Tech /> */}
      </div>
      <div className="skills__container2  grid">
        {/* <Skil/> */}
        {/* <Tech /> */}
      </div>
    </section>
  );
};

export default Skills;
