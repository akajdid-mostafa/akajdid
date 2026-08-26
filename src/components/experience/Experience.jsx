import "./experience.css";

const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    company: "Dynamic Impact",
    label: "TODAY",
    current: true,
    summary: "Working across frontend and backend as part of an engineering team.",
    technologies: ["React", "Next.js", "Spring Boot", "Express.js", "PostgreSQL", "Docker", "Git"],
  },
  {
    role: "Front-End Developer",
    company: "Digitalia Solutions",
    label: "2025",
    summary: "This is where I learned that a good interface depends on decisions users never see.",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "shadcn/ui", "JWT"],
  },
  {
    role: "Full-Stack Web Developer",
    company: "Ocean Connecting",
    label: "2024",
    summary: "This role pushed me beyond the interface and into authentication, data, and architecture.",
    technologies: ["React", "Next.js", "NextAuth", "PostgreSQL", "MySQL"],
  },
  {
    role: "Web & Marketing Developer",
    company: "Optisent",
    label: "2023",
    summary: "My first time seeing how people respond to what we put online.",
    technologies: ["HTML", "CSS", "Email Marketing", "Data Analysis"],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience" aria-labelledby="experience-heading">
      <div className="experience__container">
        <span className="experience__label">Experience</span>

        <h2 className="experience__heading" id="experience-heading">
          Each role changed what I pay attention to.
        </h2>

        <p className="experience__intro">
          I started with web and marketing work, moved deeper into frontend,
          and gradually took on the backend and the decisions around it.
        </p>

        <ol className="experience__timeline">
          {EXPERIENCE.map((entry) => (
            <li
              className={`experience__entry${entry.current ? " experience__entry--current" : ""}`}
              key={entry.company}
            >
              <span className="experience__time">{entry.label}</span>

              <article className="experience__card">
                <div className="experience__card-header">
                  <h3 className="experience__role">{entry.role}</h3>
                  {entry.current && <span className="experience__present">PRESENT</span>}
                </div>

                <p className="experience__company">{entry.company}</p>

                <p className="experience__summary">{entry.summary}</p>

                <ul className="experience__chips" aria-label={`Technologies used at ${entry.company}`}>
                  {entry.technologies.map((technology) => (
                    <li className="experience__chip" key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
