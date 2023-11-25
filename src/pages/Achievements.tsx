import Project from "../components/Project";
import EagleScout from "../images/EagleScout2.png";
function Achievements() {
  return (
    <>
      <Project
        name="Eagle Scout"
        image={EagleScout}
        skills={["Leadership", "Teamwork", "Communication"]}
        link="/Achievements/Eagle-Scout"
      ></Project>
    </>
  );
}

export default Achievements;
