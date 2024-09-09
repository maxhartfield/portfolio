import Project from "../components/Project";
import ChessWebsite from "../images/Chess-Website.png";
import DodgeAdventure from "../images/Dodge-Adventure.png";
import TTS from "../images/TTS.png";
import Portfolio from "../images/Portfolio.png";
import OS from "../images/OS.png";
import charm from "../images/charm.png";
import BackButton from "../components/BackButton";

function ProjectPage() {
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
          <div className="col">
            <Project
              name="Texas Trauma Support Website"
              image={TTS}
              skills={[
                "Software Engineering",
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "Python",
                "SQL",
                "Bootstrap",
                "Docker",
                "Postman",
                "AWS Amplify",
                "Full Stack",
                "RESTful APIs",
                "Puppeteer",
                "Unit Testing",
                "Jest",
                "Selenium",
                "Continuous Integration",
                "Gitlab Pipelines",
                "YAML",
              ]}
              link="/Projects/SWE"
            ></Project>
          </div>
          <div className="col">
            <Project
              name="Chess Website"
              image={ChessWebsite}
              skills={["JavaScript", "HTML", "CSS"]}
              link="/Projects/Chess-Website"
            ></Project>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Project
              name="OS"
              image={OS}
              skills={[]}
              link="/Projects/OS"
            ></Project>
          </div>
          <div className="col">
            <Project
              name="Computer Architecture"
              image={charm}
              skills={[]}
              link="/Projects/CompArch"
            ></Project>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Project
              name="Dodge Adventure"
              image={DodgeAdventure}
              skills={["Java", "Game Design", "Graphics2D"]}
              link="/Projects/Dodge-Adventure"
            ></Project>
          </div>
          <div className="col">
            <Project
              name="Portfolio Website"
              image={Portfolio}
              skills={["React.js", "TypeScript", "CSS", "Bootstrap"]}
              link="/Projects/Portfolio-Website"
            ></Project>
          </div>
        </div>
      </div>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}

export default ProjectPage;
