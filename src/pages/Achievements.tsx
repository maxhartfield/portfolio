import Project from "../components/Project";
import EagleScout from "../images/EagleScout2.png";
import CommunityCoding from "../images/Community-Coding.png";
import Gymnastics from "../images/GymnasticsImage.jpg";
import BackButton from "../components/BackButton";

function Achievements() {
  return (
    <>
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <BackButton />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Project
              name="Eagle Scout"
              image={EagleScout}
              skills={["Leadership", "Teamwork", "Communication"]}
              link="/Achievements/Eagle-Scout"
            ></Project>
          </div>
          <div className="col-12 col-md-6">
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
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <Project
              name="Community Coding"
              image={CommunityCoding}
              skills={["Teaching", "Java", "Problem Solving", "Communication"]}
              link="/Achievements/Community-Coding"
            ></Project>
          </div>
        </div>
      </div>

      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}

export default Achievements;
