import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { achievements } from "../data/achievements";
import CardGrid from "../components/CardGrid";
import ContentRenderer from "../components/ContentRenderer";

const smallImgStyle = { maxWidth: 750, width: "100%", height: "auto", margin: "0 auto", display: "block" };

const Achievements: React.FC = () => {
  const { achievementId } = useParams();
  
  // If no achievementId, show the main achievements grid
  if (!achievementId) {
    return (
      <CardGrid
        items={achievements}
        basePath="/portfolio/achievements"
        title="Achievements"
        cols={{ xs: 1, sm: 2, md: 3 }}
        smallImgStyle={smallImgStyle}
      />
    );
  }
  
  // Show specific achievement detail
  const achievement = achievements.find(a => a.id === achievementId);
  if (!achievement || !achievement.content) {
    return <div>Achievement not found.</div>;
  }

  return (
    <Card className="shadow-lg p-4">
      <Card.Title as="h2">{achievement.title}</Card.Title>
      <ContentRenderer sections={achievement.content} smallImgStyle={smallImgStyle} />
    </Card>
  );
};

export default Achievements;
