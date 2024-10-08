import Project from "../components/Project";
import BackButton from "../components/BackButton";
import cox from "../images/Cox.png";

function Internships() {
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
          <div className="col-12 col-md-6 mx-auto">
            <Project
              name="Cox Automotive"
              image={cox}
              skills={[
                "Software Engineering",
                "Fullstack",
                "AWS",
                "Stencil.js",
                ".NET",
                "TypeScript",
                "C#",
                "Swagger",
                "Terraform",
                "GitHub Actions",
                "YAML",
                "Agile Development",
                "Scrum",
                "Google Chrome Extension",
                "Content Delivery Network",
              ]}
              link="/Internships/Cox-Automotive"
            ></Project>
          </div>
        </div>
      </div>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}

export default Internships;
