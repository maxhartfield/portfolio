import React from "react";
import Project from "../components/Project";
import ChessWebsite from "../images/Chess-Website.png";
import DodgeAdventure from "../images/Dodge-Adventure.png";

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
    </>
  );
}

export default ProjectPage;
