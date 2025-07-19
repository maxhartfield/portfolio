import React from "react";
import { Card, Row, Col, Ratio } from "react-bootstrap";
import { Link, Routes, Route, useParams } from "react-router-dom";

const achievements = [
  {
    id: "eagle-scout",
    title: "Eagle Scout",
    image: require("../images/EagleScout2.png"),
    link: "/achievements/eagle-scout",
    tags: ["Leadership", "Teamwork", "Communication"],
    description: "Achieved the highest rank in scouting, demonstrating leadership and teamwork."
  },
  {
    id: "gymnastics",
    title: "Gymnastics National Qualifier",
    image: require("../images/GymnasticsImage.jpg"),
    link: "/achievements/gymnastics",
    tags: ["Gymnastics", "Dedication", "Persistence", "Time Management"],
    description: "Qualified for nationals after 13 years of gymnastics, showing dedication and persistence."
  },
  {
    id: "community-coding",
    title: "Community Coding",
    image: require("../images/Community-Coding.png"),
    link: "/achievements/community-coding",
    tags: ["Teaching", "Java", "Problem Solving", "Communication"],
    description: "Offered free Java lessons to the community, demonstrating communication and coding skills."
  }
];

const AchievementDetail: React.FC = () => {
  const { achievementId } = useParams();
  switch (achievementId) {
    case "eagle-scout":
      return (
        <Card className="shadow-lg p-4">
          <Card.Title as="h2">Eagle Scout</Card.Title>
          <Card.Text>I have been part of scouting since I was a kid and it has tought me many skills like leadership, communication, and teamwork. After many years I finally achieved the highest rank, Eagle Scout.</Card.Text>
          <Row className="mb-3">
            <Col md={6}><Card.Img src={require("../images/EagleScout.png")} alt="Eagle Scout Badge" className="mb-2" /></Col>
            <Col md={6}><Card.Img src={require("../images/EagleScout2.png")} alt="Eagle Scout Ceremony" className="mb-2" /></Col>
          </Row>
          <Card.Text>My eagle scout project was a 42 ft x 8 ft screening fence located at Saint Andrew’s United Methodist Church in Plano. It took a total of 14 hours to complete with me and my fellow scouts. Building and designing this fence was an intricate task and took a great deal of effort. My favorite part of this project was personally welding together the gate. My eagle scout project demonstrates my ability to prepare, manage a budget, delagate tasks, communicate with my fellow scouts and my benificiary, etc. Here are some photos documenting the project:</Card.Text>
          <Row className="mb-3">
            <Col md={4}><Card.Img src={require("../images/Welding.jpeg")} alt="Welding" className="mb-2" /></Col>
            <Col md={4}><Card.Img src={require("../images/Eagle-Project4.jpeg")} alt="Eagle Project 4" className="mb-2" /></Col>
            <Col md={4}><Card.Img src={require("../images/Eagle-Project5.jpeg")} alt="Eagle Project 5" className="mb-2" /></Col>
          </Row>
          <Card.Img src={require("../images/Eagle-Project.jpg")} alt="Eagle Project Main" className="mb-3" />
        </Card>
      );
    case "gymnastics":
      return (
        <Card className="shadow-lg p-4">
          <Card.Title as="h2">Gymnastics National Qualifier</Card.Title>
          <Card.Text>I have done gymnastics for 13 years of my life. Although I retired after senior year of high school, gymnastics still played a major part in my life and instilled skills like dedication, persistence, and time management. Gymnastics is a time consuming and physicaly demanding sport, and it was very difficult to manage school and 20 hours of gymnastics a week. Despite fracturing my spine twice, I recovered and eventually qualified for nationals. Here are some of my highlights:</Card.Text>
          <Row className="mb-3">
            <Col md={6} className="mb-2">
              <Ratio aspectRatio="16x9">
                <video controls>
                  <source src={require("../videos/GymnasticsVideo4.mov")} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Ratio>
            </Col>
            <Col md={6} className="mb-2">
              <Ratio aspectRatio="16x9">
                <video controls>
                  <source src={require("../videos/GymnasticsVideo2.mov")} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Ratio>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6} className="mb-2">
              <Ratio aspectRatio="16x9">
                <video controls>
                  <source src={require("../videos/GymnasticsVideo1.mov")} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Ratio>
            </Col>
            <Col md={6} className="mb-2">
              <Ratio aspectRatio="16x9">
                <video controls>
                  <source src={require("../videos/GymnasticsVideo3.mov")} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Ratio>
            </Col>
          </Row>
        </Card>
      );
    case "community-coding":
      return (
        <Card className="shadow-lg p-4">
          <Card.Title as="h2">Community Coding</Card.Title>
          <Card.Text>I offered free Java lessons to members of the community in collaboration with Professor Jey Veerasamy of UT-Dallas. These problems were held over zoom and featured a variety of Java problems that help kids learn Java and problem solving skills. This achievement demonstrates my ability to communicate effectively and my passion for coding.</Card.Text>
          <Card.Img variant="top" src={require("../images/Community-Coding.png")} alt="Community Coding" className="mb-3" />
        </Card>
      );
    default:
      return <div>Achievement not found.</div>;
  }
};

const Achievements: React.FC = () => (
  <Routes>
    <Route
      path="/"
      element={
        <div>
          <h2 className="mb-4">Achievements</h2>
          <Row xs={1} sm={2} md={3} className="g-4">
            {achievements.map((ach, idx) => (
              <Col key={idx}>
                <Card className="h-100 shadow-sm">
                  <Link to={ach.id} style={{ textDecoration: "none", color: "inherit" }}>
                    <Card.Img variant="top" src={ach.image} alt={ach.title} />
                    <Card.Body>
                      <Card.Title>{ach.title}</Card.Title>
                      <Card.Text>{ach.description}</Card.Text>
                      <div className="mb-2">
                        {ach.tags.map((tag, i) => (
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
    <Route path=":achievementId" element={<AchievementDetail />} />
  </Routes>
);

export default Achievements;
