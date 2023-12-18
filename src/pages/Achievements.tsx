import Project from "../components/Project";
import EagleScout from "../images/EagleScout2.png";
import CommunityCoding from "../images/Community-Coding.png";
import Gymnastics from "../images/GymnasticsImage.jpg";

function Achievements() {
  return (
    <>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Project
              name="Eagle Scout"
              image={EagleScout}
              skills={["Leadership", "Teamwork", "Communication"]}
              link="/Achievements/Eagle-Scout"
            ></Project>
          </div>
          <div className="col">
            <Project
              name="Gymnastics National Qualifier"
              image={Gymnastics}
              skills={[
                "Gymnastics",
                "Dedication",
                "Persistence",
                "Time Management",
              ]}
              link="/Achievements/Gymnastics"
            ></Project>
          </div>
          <div className="col">
            <Project
              name="Community Coding"
              image={CommunityCoding}
              skills={["Teaching", "Java", "Problem Solving", "Communication"]}
              link="/Achievements/Community-Coding"
            ></Project>
          </div>
        </div>
      </div>

      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
    </>
  );
}

export default Achievements;
