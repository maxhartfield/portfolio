import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavigationBar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Max Hartfield</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              active={isActive("/") && location.pathname === "/"}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/projects" 
              active={isActive("/projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/internships" 
              active={isActive("/internships")}
            >
              Internships
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/achievements" 
              active={isActive("/achievements")}
            >
              Achievements
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/resume" 
              active={isActive("/resume")}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 