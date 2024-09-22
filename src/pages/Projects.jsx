import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import urbansteps from "../assets/projects/urbansteps.png";
import spiritedaway from "../assets/projects/spiritedaway.png";
import xtalk from "../assets/projects/xtalk.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urbansteps}
              isBlog={false}
              title="UrbanSteps"
              description="Urban Steps is a website and online directory that helps people discover and get involved in local dance studios in their area. I have always been interested in combining my passion for dance and technical skills so I built this project to combine the two! A lot of dance studios in my area currently do not have their own websites, so this project's purpose was to resolve basic interactions a dance studio and student would want."
              ghLink="https://github.com/dianapnle/UrbanSteps"
              demoLink="https://urbansteps.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spiritedaway}
              isBlog={false}
              title="Spirited Away"
              description="Spirited Get Away is a clone of the website Airbnb, an online market place that connects people who are looking for accomodations in a particular area with people who are renting out their properties. The backend of Spirited Get Away is built on Javascript, SQL, sequelize, and express with a PostgreSQL database. Frontend rendering is handled with React and Redux."
              ghLink="https://github.com/dianapnle/spirited-away"
              demoLink="https://spirited-away.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xtalk}
              isBlog={false}
              title="X-Talk"
              description="Cross-Talk is a Python-based clone of the website Discord, an app that allows users to communicate in real time using text. Similarly, Cross-Talk allows for users to organize servers and smaller communities, rather than having a single central community. Users can join any public server and also create a smaller server for a group of friends."
              ghLink="https://github.com/apatel978/Discord-Clone-XTalk"
              demoLink="https://xtalk-h48u.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
