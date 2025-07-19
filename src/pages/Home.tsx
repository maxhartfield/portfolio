import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const profileImg = require("../images/Profile.jpeg");

const Home: React.FC = () => (
  <Row className="justify-content-center align-items-center min-vh-60">
    <Col xs={12} md={8} lg={6}>
      <Card className="shadow-lg text-center p-4">
        <Card.Img
          variant="top"
          src={profileImg}
          alt="Max Hartfield profile"
          style={{ width: "180px", height: "180px", objectFit: "cover", margin: "0 auto", borderRadius: "50%" }}
        />
        <Card.Body>
          <Card.Title as="h1" className="mb-3">Hello I'm Max Hartfield!</Card.Title>
          <Card.Text className="mb-2">
            I am a CS major at the University of Texas at Austin.
          </Card.Text>
          <Card.Text>
            Use the navigation bar to look at my projects and achievements!
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Home;