import Project from "../components/Project";
import EagleProject from "../images/Eagle-Project.jpg";
function Achievements() {
  return (
    <>
      <Project
        name="Eagle Scout"
        image={EagleProject}
        skills={["Leadership", "Teamwork", "Communication"]}
        link="/Achievements/Eagle-Scout"
      ></Project>
    </>
  );
}

export default Achievements;
