import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import CardGrid from "../components/CardGrid";
import ContentRenderer from "../components/ContentRenderer";

const smallImgStyle = { maxWidth: 750, width: "100%", height: "auto", margin: "0 auto", display: "block" };

const Projects: React.FC = () => {
  const { projectId, subId } = useParams();
  
  // If no projectId, show the main projects grid
  if (!projectId) {
    // Get all sub-project IDs from group projects
    const subProjectIds = projects
      .filter(p => p.isGroup && p.subProjects)
      .flatMap(p => p.subProjects || []);
    
    // Filter out sub-projects from the main grid
    const mainProjects = projects.filter(p => !subProjectIds.includes(p.id));
    
    return (
      <CardGrid
        items={mainProjects}
        basePath="/projects"
        title="Projects"
        cols={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        smallImgStyle={smallImgStyle}
      />
    );
  }
  
  // Handle nested routing for group projects
  const mainProject = projects.find(p => p.id === projectId);
  if (mainProject && mainProject.isGroup && mainProject.subProjects) {
    // If no subId, show the group page
    if (!subId) {
      const subProjectItems = mainProject.subProjects.map(subId => {
        const subProject = projects.find(p => p.id === subId);
        return subProject || { id: subId, title: "Unknown", image: "", tags: [], description: "" };
      });
      return (
        <CardGrid
          items={subProjectItems}
          basePath={`/projects/${projectId}`}
          title={`${mainProject.title}`}
          cols={{ xs: 1, sm: 2, md: 2 }}
          smallImgStyle={{ maxWidth: 300, width: "100%", height: "auto", margin: "0 auto", display: "block" }}
        />
      );
    }
    // Find the specific sub-project
    const subProject = projects.find(p => p.id === subId);
    if (!subProject || !subProject.content) {
      return <div>Sub-project not found.</div>;
    }
    return (
      <Card className="shadow-lg p-4">
        <Card.Title as="h2">{subProject.title}</Card.Title>
        <ContentRenderer sections={subProject.content} smallImgStyle={smallImgStyle} />
      </Card>
    );
  }

  // Handle regular projects
  const project = projects.find(p => p.id === projectId);
  if (!project || !project.content) {
    return <div>Project not found.</div>;
  }

  return (
    <Card className="shadow-lg p-4">
      <Card.Title as="h2">{project.title}</Card.Title>
      <ContentRenderer sections={project.content} smallImgStyle={smallImgStyle} />
    </Card>
  );
};

export default Projects;
