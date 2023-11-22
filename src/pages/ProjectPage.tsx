import React from "react";
import Project from "../components/Project";
import chess_website from "../images/Chess-Website.png";
function ProjectPage() {
  return (
    <>
      <Project
        name="Chess-Website"
        image={chess_website}
        skills={["JavaScript", "HTML", "CSS"]}
      ></Project>
    </>
  );
}

export default ProjectPage;
