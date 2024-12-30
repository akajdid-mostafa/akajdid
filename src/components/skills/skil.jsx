import styled from "styled-components";
import {
  Html,
  Css,
  Js,
  Ts,
  Rect,
  Next,
  Scompo,
  Tailwind,
  Mui,
  git,
} from "../../assets/assets";

const SkillsContainer = styled.div`
  display: grid;
  gap: 2rem;
  

  @media (min-width: 468px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 994px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SkillsContent = styled.div`
  width: 12rem;
  height: 10rem;
  border-radius: 25px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: 0.5s;
  flex-direction: column;
  gap: 1rem;

  h4 {
    z-index: 1;
  }

  img {
    z-index: 1;
  }

  .border::before {
    content: "";
    position: absolute;
    width: 5rem;
    height: 17rem;
    left: 4.5rem;
    top: -40%;
    background: ${(props) => props.color};
    animation: barra 6s linear infinite;
    border-radius: 10px;
  }

  .border::after {
    content: "";
    position: absolute;
    inset: 5px;
    background: ${(props) => props.theme.backgroundAlt || "#fff"};
    border-radius: 20px;
  }

  @keyframes barra {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const cardSkills = [
  {
    id: 1,
    title: "HTML",
    img: Html,
    color: "#fc4503",
  },
  {
    id: 2,
    title: "CSS",
    img: Css,
    color: "#0328fc",
  },
  {
    id: 3,
    title: "JavaScript",
    img: Js,
    color: "#fefe01",
  },
  {
    id: 4,
    title: "TypeScript",
    img: Ts,
    color: "#007ACC",
  },
  {
    id: 5,
    title: "React JS",
    img: Rect,
    color: "#61DAFB",
  },
  {
    id: 6,
    title: "Next JS",
    img: Next,
    color: "#fff",
  },
  {
    id: 7,
    title: "Styled Components",
    img: Scompo,
    color: "#9F70B8",
  },
  {
    id: 8,
    title: "Tailwind",
    img: Tailwind,
    color: "#38BDF8",
  },
  {
    id: 9,
    title: "Material UI",
    img: Mui,
    color: "#007fff",
  },
  // {
  //   id: 10,
  //   title: 'Chakra UI',
  //   img: '/skills/chakra-ui.svg',
  //   color: '#51c8c5'
  // },
  {
    id: 11,
    title: "Git",
    img: git,
    color: "#de4736",
  },
];

function Skills() {
  return (
    <SkillsContainer>
      {cardSkills.map((skill) => (
        <SkillsContent color={skill.color} key={skill.id}>
          <img width={60} height={60} src={skill.img} alt={skill.title} />
          <h4>{skill.title}</h4>
          <span className="border"></span>
        </SkillsContent>
      ))}
    </SkillsContainer>
  );
}

export default Skills;
