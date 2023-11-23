import Image from "./Image";
import Skill from "./Skill";
import { NavLink } from "react-router-dom";
interface Props {
  name: string;
  image: string;
  skills: string[];
  link: String;
}

function Project({ name, image, skills, link }: Props) {
  return (
    <>
      <div className="d-flex justify-content-center">
        <NavLink
          to={"" + link}
          className="project-container p-3 mb-2 bg-white text-dark"
        >
          <h1>{name}</h1>
          <Image className="project-img" src={image}></Image>
          <span>
            {skills.map((skill) => (
              <Skill key={skill} skill={skill}></Skill>
            ))}
          </span>
        </NavLink>
      </div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
    </>
  );
}

export default Project;
