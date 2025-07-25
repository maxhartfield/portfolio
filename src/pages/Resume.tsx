import React from "react";
import { Card } from "react-bootstrap";

const resumeImg = require("../images/Resume.png");
const resumePdf = require("../assets/resume.pdf");

const largeImgStyle = { maxWidth: 500, width: "100%", height: "auto", margin: "0 auto", display: "block" };

const Resume: React.FC = () => (
  <Card className="shadow-lg text-center p-4">
    <Card.Img
      variant="top"
      src={resumeImg}
      alt="Resume preview"
      style={largeImgStyle}
    />
    <Card.Body>
      <Card.Title as="h2">Resume</Card.Title>
      <a
        href={resumePdf}
        download
        className="btn btn-primary mt-3"
      >
        Download PDF
      </a>
    </Card.Body>
  </Card>
);

export default Resume;