import { RiNextjsLine } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";

const Techno = () => {
  const frontendSkills3 = [
    {
      name: "HTML",
      icon: "bx bxl-html5 skills_icon",
    },
    {
      name: "Javascript",
      icon: "bx bxl-javascript skills_icon",
    },
    {
      name: "React",
      icon: "bx bxl-react skills_icon",
    },
    {
      name: "Redux",
      icon: "bx bxl-redux skills_icon",
    },

    {
      name: "Chakra Ui",
      icon: SiChakraui,
    },
  ];
  const frontendSkills6 = [
    {
      name: "CSS",
      icon: "bx bxl-css3 skills_icon",
    },
    {
      name: "Typescript",
      icon: "bx bxl-typescript skills_icon",
    },
    {
      name: "Next.Js",
      icon: RiNextjsLine,
    },
    {
      name: "tailwind Css",
      icon: "bx bxl-tailwind-css skills_icon",
    },
    {
      name: "Figma",
      icon: "bx bxl-figma skills_icon",
    },
  ];
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {frontendSkills3.map((skill, index) => (
            <div className="skills__data" key={index}>
            {typeof skill.icon === 'string' ? (
              <i className={skill.icon}></i>
            ) : (
              <skill.icon className="skills_icon2" />
            )}
            <div>
              <h3 className="skills__name">{skill.name}</h3>
            </div>
          </div>
          ))}
        </div>
        <div className="skills__group">
          {frontendSkills6.map((skill, index) => (
            <div className="skills__data" key={index}>
              {typeof skill.icon === 'string' ? (
                <i className={skill.icon}></i>
              ) : (
                <skill.icon className="skills_icon" />
              )}
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techno;