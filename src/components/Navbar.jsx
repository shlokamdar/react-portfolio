// src/components/Navbar.jsx
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      bg="light"
      className="shadow-sm py-2"
      style={{ zIndex: 1000 }}
    >
      <Container fluid="lg">
        <Navbar.Brand href="#about" className="fw-bold fs-4 text-primary">
          Shloka Kamdar
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            {["about", "projects", "skills", "resume", "contact"].map((item) => (
              <Nav.Link
                key={item}
                href={`#${item}`}
                className="mx-2 text-capitalize"
                style={{ fontWeight: "500" }}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
