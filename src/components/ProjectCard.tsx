import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  image: any;
  tags: string[];
  description: string;
  link: string;
  smallImgStyle?: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  image,
  tags,
  description,
  link,
  smallImgStyle = { maxWidth: 750, width: "100%", height: "auto", margin: "0 auto", display: "block" }
}) => (
  <Card className="h-100 shadow-sm">
    <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
      <Card.Img variant="top" src={image} alt={title} style={smallImgStyle} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="mb-2">
          {tags.map((tag, i) => (
            <span key={i} className="badge bg-secondary me-1">{tag}</span>
          ))}
        </div>
      </Card.Body>
    </Link>
  </Card>
);

export default ProjectCard; 