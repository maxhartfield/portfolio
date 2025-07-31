import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { internships } from "../data/internships";
import CardGrid from "../components/CardGrid";
import ContentRenderer from "../components/ContentRenderer";

const smallImgStyle = { maxWidth: 750, width: "100%", height: "auto", margin: "0 auto", display: "block" };

const Internships: React.FC = () => {
  const { internshipId } = useParams();
  
  // If no internshipId, show the main internships grid
  if (!internshipId) {
    return (
      <CardGrid
        items={internships}
        basePath="/internships"
        title="Internships"
        cols={{ xs: 1, sm: 2, md: 3 }}
        smallImgStyle={smallImgStyle}
      />
    );
  }
  
  // Show specific internship detail
  const internship = internships.find(i => i.id === internshipId);
  if (!internship || !internship.content) {
    return <div>Internship not found.</div>;
  }

  return (
    <Card className="shadow-lg p-4">
      <Card.Title as="h2">{internship.title}</Card.Title>
      <ContentRenderer sections={internship.content} smallImgStyle={smallImgStyle} />
    </Card>
  );
};

export default Internships;
