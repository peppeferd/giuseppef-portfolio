import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectsCards";
import Particle from "../Particle";

import bitsOfCode from "../../Assets/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Work in progress.."
              ghLink="https://github.com/peppeferd"
            
            />
          </Col>


      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

