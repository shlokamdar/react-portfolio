// src/components/Contact.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: "#e3f2fd" }}>
      <Container>
        <h2 className="text-center fw-bold mb-4">Get in Touch 💬</h2>

        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            {submitted && <Alert variant="success">Thank you! I’ll be in touch soon 💙</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" variant="primary" className="shadow-sm">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col xs={12} className="text-center">
            <p className="fw-bold mb-2">Or find me online 👇</p>
            <div className="d-flex justify-content-center flex-wrap gap-4">
              <a
                href="mailto:shlokamdar@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <FaEnvelope size={24} color="#0d47a1" />
              </a>
              <a
                href="https://www.linkedin.com/in/shlokamdar"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <FaLinkedin size={24} color="#0d47a1" />
              </a>
              <a
                href="https://github.com/shlokamdar"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <FaGithub size={24} color="#0d47a1" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
