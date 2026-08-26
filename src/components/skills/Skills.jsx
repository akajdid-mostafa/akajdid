import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiGithubactions,
  SiJsonwebtokens,
  SiSpringboot,
  SiNodedotjs,
} from "react-icons/si";
import { RiNextjsLine, RiCodeLine, RiLoopLeftLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import SkillItem from "./SkillItem";
import "./skills.css";

const SKILL_GROUPS = [
  {
    title: "Core product stack",
    description:
      "The tools I have used across interfaces, APIs, authentication, and data.",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Next.js", icon: RiNextjsLine },
      { name: "PostgreSQL", icon: BiLogoPostgresql },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js / Express", icon: SiNodedotjs },
      { name: "REST APIs", icon: RiCodeLine },
      { name: "MySQL", icon: SiMysql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "JWT / NextAuth", icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Delivery and collaboration",
    description:
      "The tools and practices I use to share, review, test, and ship the work.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Agile / Scrum", icon: RiLoopLeftLine },
    ],
  },
];

const HEADING = "These are the tools I have actually worked with.";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__intro-block">
          <span className="skills__label">Skills</span>

          <h2 className="skills__heading">{HEADING}</h2>

          <p className="skills__intro">
            I don&apos;t use every tool on every project. This is the stack I
            have reached for most often across frontend, backend, data, and
            delivery.
          </p>
        </div>

        {SKILL_GROUPS.map((group, groupIndex) => (
          <div className="skills__band" key={group.title}>
            <div className="skills__band-info">
              <span className="skills__band-number">
                {String(groupIndex + 1).padStart(2, "0")}
              </span>
              <h3 className="skills__band-title">{group.title}</h3>
              <p className="skills__band-description">{group.description}</p>
            </div>
            <ul
              className={`skills__composition ${
                groupIndex === 0
                  ? "skills__composition--cols-3"
                  : "skills__composition--cols-2"
              }`}
            >
              {group.skills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
