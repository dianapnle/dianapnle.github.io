import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
  SiRender
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <div>
          <SiVisualstudiocode />
        </div>
        <div className="tech-description">
            Visual Studio Code
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
          <SiFigma />
        </div>
        <div className="tech-description">
            Figma
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
          <SiPostman />
        </div>
        <div className="tech-description">
            Postman
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
          <SiRender />
        </div>
        <div className="tech-description">
            Render
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
