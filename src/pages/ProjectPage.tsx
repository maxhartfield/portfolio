import Project from "../components/Project";
import ChessWebsite from "../images/Chess-Website.png";
import DodgeAdventure from "../images/Dodge-Adventure.png";
import UTCSShell from "../images/UTCSShell.png";
import DMA from "../images/DMA.png";
import Portfolio from "../images/Portfolio.png";
import OS from "../images/OS.jpeg";
import charm from "../images/charm.png";

function ProjectPage() {
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
              name="Chess Website"
              image={ChessWebsite}
              skills={["JavaScript", "HTML", "CSS"]}
              link="/Projects/Chess-Website"
            ></Project>
          </div>
          <div className="col">
            <Project
              name="Pintos"
              image={OS}
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
              link="/Projects/Pintos"
            ></Project>
          </div>
          <div className="col">
            <Project
              name="chArm-v2 System Emulator"
              image={charm}
              skills={[
                "C",
                "Collaborative",
                "Computer Architecture",
                "Assembly",
                "Cache",
                "Pipeline",
              ]}
              link="/Projects/chArm"
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
              link="/Projects/UTCS-Shell"
            ></Project>
          </div>
          <div className="col">
            <Project
              name="Dynamic Memory Allocator"
              image={DMA}
              skills={[
                "C",
                "Collaborative",
                "Linked List",
                "Heap",
                "Computer Architecture",
                "Operating System",
              ]}
              link="/Projects/Dynamic-Memory-Allocator"
            ></Project>
          </div>
        </div>
        <div className="row">
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
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
    </>
  );
}

export default ProjectPage;
