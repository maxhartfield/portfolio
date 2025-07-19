import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar: React.FC = () => (
  <Navbar bg="light" expand="md" className="mb-4" sticky="top">
    <Container>
      <Navbar.Brand as={NavLink} to="/">
        Max Hartfield
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar-nav" />
      <Navbar.Collapse id="main-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/" end>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/projects">
            Projects
          </Nav.Link>
          <Nav.Link as={NavLink} to="/achievements">
            Achievements
          </Nav.Link>
          <Nav.Link as={NavLink} to="/internships">
            Internships
          </Nav.Link>
          <Nav.Link as={NavLink} to="/resume">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavbar; 