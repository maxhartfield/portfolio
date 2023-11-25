import React from "react";
import Project from "../components/Project";
import ChessWebsite from "../images/Chess-Website.png";
import DodgeAdventure from "../images/Dodge-Adventure.png";
import UTCSShell from "../images/UTCSShell.png";
function ProjectPage() {
  return (
    <>
      <Project
        name="Chess-Website"
        image={ChessWebsite}
        skills={["JavaScript", "HTML", "CSS"]}
        link="/Projects/Chess-Website"
      ></Project>
      <Project
        name="Dodge-Adventure"
        image={DodgeAdventure}
        skills={["Java"]}
        link="/Projects/Dodge-Adventure"
      ></Project>
      <Project
        name="UTSC-Shell"
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
    </>
  );
}

export default ProjectPage;
