import { RiNextjsLine } from "react-icons/ri";

const Frontend = () => {
  const frontendSkills = [
    {
      name: "HTML",
      icon: "bx bxl-html5 skills_icon",
    },
    {
      name: "CSS",
      icon: "bx bxl-css3 skills_icon",
    },
    {
      name: "JavaScript",
      icon: "bx bxl-javascript skills_icon",
    },
    {
      name: "TypeScript",
      icon: "bx bxl-typescript skills_icon",
    },
    {
      name: "React",
      icon: "bx bxl-react skills_icon",
    },
    {
      name: "Next.js",
      icon: RiNextjsLine,
    },
    {
      name: "Redux",
      icon: "bx bxl-redux skills_icon",
    },
    {
      name: "Tailwind CSS",
      icon: "bx bxl-tailwind-css skills_icon",
    }
  ];

  // Split into two groups of 4 for layout
  const firstGroup = frontendSkills.slice(0, 4);
  const secondGroup = frontendSkills.slice(4);

  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {firstGroup.map((skill, index) => (
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
        <div className="skills__group">
          {secondGroup.map((skill, index) => (
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

export default Frontend;