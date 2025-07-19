import React from "react";
import { Card, Row, Col, Ratio } from "react-bootstrap";
import { Link, Routes, Route, useParams } from "react-router-dom";

const internships = [
  {
    id: "cox-automotive",
    title: "Cox Automotive",
    image: require("../images/Cox.png"),
    link: "/internships/cox-automotive",
    tags: ["Software Engineering", "Fullstack", "AWS", "Stencil.js", ".NET", "TypeScript", "C#"],
    description: "Software Engineer Intern at Cox Automotive, working on fullstack projects and cloud technologies."
  }
];

const InternshipDetail: React.FC = () => {
  const { internshipId } = useParams();
  switch (internshipId) {
    case "cox-automotive":
      return (
        <Card className="shadow-lg p-4">
          <Card.Title as="h2">Software Engineer Intern at Cox Automotive</Card.Title>
          <Card.Text>During the summer of 2024, I completed my first software engineering internship. Cox Automotive was a great oppurtunity for me to learn how developers use agile development to push code to production. The company was amazing and the people were very supportive. I expanded my programming skills in the frontend and backend and got exposure to Stencil.js, .NET, C#, AWS, Terraform, Github Actions, and much more. This internship boosted my confidence as a programmer as I transitioned from the fundamentals taught in school to real world experiences. It also made me even more sure that software engineering is the path I want to take in the future. Here is my final presentation from my internship that highlights what I worked on during the 12 weeks:</Card.Text>
          <Card.Img variant="top" src={require("../images/CoxPresentation.jpeg")} alt="Cox Presentation" className="mb-3" />
        </Card>
      );
    default:
      return <div>Internship not found.</div>;
  }
};

const Internships: React.FC = () => (
  <Routes>
    <Route
      path="/"
      element={
        <div>
          <h2 className="mb-4">Internships</h2>
          <Row xs={1} sm={2} md={3} className="g-4">
            {internships.map((intern, idx) => (
              <Col key={idx}>
                <Card className="h-100 shadow-sm">
                  <Link to={intern.id} style={{ textDecoration: "none", color: "inherit" }}>
                    <Card.Img variant="top" src={intern.image} alt={intern.title} />
                    <Card.Body>
                      <Card.Title>{intern.title}</Card.Title>
                      <Card.Text>{intern.description}</Card.Text>
                      <div className="mb-2">
                        {intern.tags.map((tag, i) => (
                          <span key={i} className="badge bg-secondary me-1">{tag}</span>
                        ))}
                      </div>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      }
    />
    <Route path=":internshipId" element={<InternshipDetail />} />
  </Routes>
);

export default Internships;
