// src/components/Hero.jsx
import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";

const skillCategories = {
  "💻 Programming Languages": ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  "🚀 Frameworks & Libraries": ["Django", "React.js", "Bootstrap", "Angular (Basics)"],
  "🗃️ Databases": ["MySQL", "SQLite"],
  "🛒 CMS & No-Code": ["Shopify", "Odoo"],
  "⚒️ Developer Tools": ["VS Code", "Git/GitHub", "SQL Workbench", "AWS (EC2/S3)"],
};

const Hero = () => {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: "#f0f8ff" }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Column */}
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <h1 className="fs-2 fw-bold text-center text-md-start">
              Hi, I’m Shloka Kamdar 
            </h1>
            <p className="lead mt-3 text-center text-md-start">
              Designing and developing modern web interfaces with a focus on usability and performance.
              <br />
              Pairing technical skills with visual storytelling to elevate every user journey.
            </p>
            <div className="text-center text-md-start">
              <Button
                href="#contact"
                variant="primary"
                className="mt-4 shadow-sm"
                style={{ backgroundColor: "#1565c0", border: "none" }}
              >
                Get in touch
              </Button>
            </div>
          </Col>

          {/* Right Column */}
          <Col xs={12} md={6}>
            <h4 className="fw-semibold mb-3 text-center text-md-start">🧠 My Skill Set</h4>
            {Object.entries(skillCategories).map(([category, skills], index) => (
              <div key={index} className="mb-4">
                <h6 className="fw-bold text-secondary text-center text-md-start">{category}</h6>
                <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2">
                  {skills.map((skill, idx) => (
                    <Badge key={idx} bg="info" text="dark" className="p-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
