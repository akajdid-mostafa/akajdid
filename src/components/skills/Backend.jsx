

const Backend = () => {
  const backendSkills3 = [
    {
      name: "Node.js",
      icon: "bx bxl-nodejs skills_icon",
    },
    {
      name: "MongoDB",
      icon: "bx bxl-mongodb skills_icon",
    },
    {
      name: "firebase",
      icon: "bx bxl-firebase skills_icon",
    },
  ];
  const backendSkills6 = [
    {
      name: "Express.js",
      icon: "bx bx-server skills_icon",
    },
    {
      name: "Mongoose",
      icon: "bx bx-data skills_icon",
    },
    {
      name: "JWT",
      icon: "bx bx-shield skills_icon",
    },
  ];
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {backendSkills3.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {backendSkills6.map((skill, index) => (
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

export default Backend;

