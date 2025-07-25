import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

interface CardGridProps {
  items: Array<{
    id: string;
    title: string;
    image: any;
    tags: string[];
    description: string;
  }>;
  basePath: string;
  title?: string;
  cols?: { xs?: number; sm?: number; md?: number; lg?: number };
  smallImgStyle?: React.CSSProperties;
}

const CardGrid: React.FC<CardGridProps> = ({
  items,
  basePath,
  title,
  cols = { xs: 1, sm: 2, md: 2, lg: 3 },
  smallImgStyle
}) => (
  <div>
    {title && <h2 className="mb-4">{title}</h2>}
    <Row 
      xs={cols.xs} 
      sm={cols.sm} 
      md={cols.md} 
      lg={cols.lg} 
      className="g-4"
    >
      {items.map((item, idx) => (
        <Col key={idx}>
          <ProjectCard
            id={item.id}
            title={item.title}
            image={item.image}
            tags={item.tags}
            description={item.description}
            link={`${basePath}/${item.id}`}
            smallImgStyle={smallImgStyle}
          />
        </Col>
      ))}
    </Row>
  </div>
);

export default CardGrid; 