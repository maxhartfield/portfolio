import Project from "../components/Project";
import ChessWebsite from "../images/Chess-Website.png";
import DodgeAdventure from "../images/Dodge-Adventure.png";
import TTS from "../images/TTS.png";
import Portfolio from "../images/Portfolio.png";
import OS from "../images/OS.png";
import charm from "../images/charm.png";
import BackButton from "../components/BackButton";
import cook from "../images/cook.png";

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
          <div className="col-12 col-md-6">
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
            />
          </div>
          <div className="col-12 col-md-6">
            <Project
              name="Chess Website"
              image={ChessWebsite}
              skills={["JavaScript", "HTML", "CSS"]}
              link="/Projects/Chess-Website"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <Project
              name="Easy Cook"
              image={cook}
              skills={["Flutter", "Dart", "Mobile Development", "OpenAI API"]}
              link="/Projects/EasyCook"
            />
          </div>
          <div className="col-12 col-md-6">
            <Project name="OS" image={OS} skills={[]} link="/Projects/OS" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <Project
              name="Computer Architecture"
              image={charm}
              skills={[]}
              link="/Projects/CompArch"
            />
          </div>
          <div className="col-12 col-md-6">
            <Project
              name="Dodge Adventure"
              image={DodgeAdventure}
              skills={["Java", "Game Design", "Graphics2D"]}
              link="/Projects/Dodge-Adventure"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <Project
              name="Portfolio Website"
              image={Portfolio}
              skills={["React.js", "TypeScript", "CSS", "Bootstrap"]}
              link="/Projects/Portfolio-Website"
            />
          </div>
        </div>
      </div>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}

export default ProjectPage;
