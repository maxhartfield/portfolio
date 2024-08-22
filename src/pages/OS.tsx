import Project from "../components/Project";
import BackButton from "../components/BackButton";
import UTCSShell from "../images/UTCSShell.png";
import os from "../images/OS.jpeg";

function OS() {
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
              name="Pintos"
              image={os}
              skills={[
                "C",
                "Collaborative",
                "Operating System",
                "Synchronization",
                "Threads",
                "User Programs",
                "Virtual Memory",
                "File Systems",
              ]}
              link="/Projects/OS/Pintos"
            ></Project>
          </div>
          <div className="col">
            <Project
              name="UTCS Shell"
              image={UTCSShell}
              skills={[
                "C",
                "Collaborative",
                "Linux",
                "Unix",
                "Concurrency",
                "Paralellism",
                "Operating System",
              ]}
              link="/Projects/OS/UTCS-Shell"
            ></Project>
          </div>
        </div>
      </div>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}

export default OS;
