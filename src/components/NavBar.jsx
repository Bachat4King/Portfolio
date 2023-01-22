import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { NavLink } from "react-router-dom";

export default function MyNav() {
  return (
    <Navbar className="justify-content-end" bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Bastian
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
