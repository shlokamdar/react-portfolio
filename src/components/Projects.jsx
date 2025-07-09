// src/components/Projects.jsx
import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const projects = [
  {
    title: "ServeWare",
    demo: "https://serveware.pythonanywhere.com/",
    github: "https://github.com/shlokamdar/serveware",
    description:
      "A Django-based restaurant management system streamlining operations from kitchen to customer. QR-enabled, dashboard-driven, and OTP-secured.",
    tech: ["Django", "Bootstrap", "HTML", "SQLite"],
    features: [
      "Role-based accounts with OTP auth",
      "QR-linked table menus for customers",
      "CRUD for menus + real-time dashboard for orders",
    ],
  },
  {
    title: "WishNet",
    demo: "https://wishnet.pythonanywhere.com/",
    github: "https://github.com/shlokamdar/wishnet",
    description:
      "A gifting and wishlist platform for birthdays, holidays, and group gifting. Includes budget tracking, user connections, and smooth UI.",
    tech: ["Django", "Bootstrap", "HTML", "SQLite"],
    features: [
      "Wishlist & Secret Santa group management",
      "Secure gift assignment + wishlist viewing",
      "Budget alerts, OTP recovery, and clean UI",
    ],
  },
  {
    title: "Pixel Arcade",
    demo: "https://github.com/shlokamdar/pixel-arcade",
    github: "https://github.com/shlokamdar/pixel-arcade",
    description:
      "A nostalgic collection of browser-based mini-games built in vanilla JavaScript. Simple, fast, and fun gameplay.",
    tech: ["JavaScript", "HTML", "CSS"],
    features: [
      "Simple arcade games built from scratch",
      "Mobile-friendly gameplay",
      "CSS-based animations and sound effects",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5" style={{ backgroundColor: "#e3f2fd" }}>
      <Container>
        <h2 className="text-center fw-bold mb-5">Projects</h2>
        <Row>
          {projects.map((proj, idx) => (
            <Col xs={12} sm={12} md={6} lg={4} key={idx} className="mb-4 d-flex">
              <Card className="shadow-sm border-0 w-100 h-100">
                <Card.Body>
                  <Card.Title className="fw-bold">{proj.title}</Card.Title>
                  <Card.Text>{proj.description}</Card.Text>

                  <div className="d-flex flex-wrap gap-2 mb-2">
                    {proj.tech.map((tech, i) => (
                      <Badge bg="primary" key={i}>
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul style={{ paddingLeft: "1.2rem" }}>
                    {proj.features.map((feat, i) => (
                      <li key={i} className="small text-muted">
                        {feat}
                      </li>
                    ))}
                  </ul>
                </Card.Body>

                <Card.Footer className="bg-white border-0 d-flex flex-wrap justify-content-between gap-2">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    href={proj.demo}
                    target="_blank"
                    className="flex-grow-1"
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    href={proj.github}
                    target="_blank"
                    className="flex-grow-1"
                  >
                    GitHub
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
