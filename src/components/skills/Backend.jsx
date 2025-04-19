import { FaNetworkWired } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongoose } from "react-icons/si";

const Backend = () => {
  const backendSkills = [
    {
      name: "Node.js",
      icon: "bx bxl-nodejs skills_icon",
    },
    {
      name: "Express.js",
      icon: "bx bx-server skills_icon",
    },
    {
      name: "MongoDB",
      icon: "bx bxl-mongodb skills_icon",
    },
    {
      name: "Mongoose",
      icon: SiMongoose,
    },
    {
      name: "Firebase",
      icon: "bx bxl-firebase skills_icon",
    },
    {
      name: "JWT",
      icon: "bx bx-shield skills_icon",
    },
    {
      name: "REST API",
      icon: FaNetworkWired, // Using react-icons
    },
    {
      name: "PostgreSQL",
      icon: BiLogoPostgresql,
    }
  ];

  // Split into two groups of 4
  const firstGroup = backendSkills.slice(0, 4);
  const secondGroup = backendSkills.slice(4);

  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
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

export default Backend;