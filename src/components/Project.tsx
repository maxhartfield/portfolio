import Image from "./Image";
import Skill from "./Skill";
interface Props {
  name: string;
  image: string;
  skills: string[];
}

function Project({ name, image, skills }: Props) {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="project-container p-3 mb-2 bg-white text-dark">
          <h1>{name}</h1>
          <Image className="project-img" src={image}></Image>
          <span>
            {skills.map((skill) => (
              <Skill skill={skill}></Skill>
            ))}
          </span>
        </div>
      </div>
    </>
  );
}

export default Project;
