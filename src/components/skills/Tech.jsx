

const Tech = () => {
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

    
  ];
  const frontendSkills6 = [
    
    {
      name: "CSS",
      icon: "bx bxl-css3 skills_icon",
    },
    {
      name: "Typescript",
      icon: "bx bxl-javascript skills_icon",
    },
    {
      name: "Next",
      icon: "bx bxl-redux skills_icon",
    },
    

    {
      name: "tailwind",
      icon: "bx bxl-tailwind-css skills_icon",
    },
  ];
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {frontendSkills3.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {frontendSkills6.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
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

export default Tech;
