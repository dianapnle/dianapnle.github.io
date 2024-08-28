import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiPython,
  DiCss3
} from "react-icons/di";
import {
  SiFlask,
  SiPostgresql,
  SiSqlalchemy,
  SiRedux,
  SiExpress,
  SiHtml5,
  SiSqlite,
  SiSocketdotio,
  SiSequelize
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div>
        <SiHtml5 />
        </div>
        <div className="tech-description">
            Html5
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiJavascript1 />
        </div>
        <div className="tech-description">
            Javascript
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiNodejs />
        </div>
        <div className="tech-description">
            Nodejs
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiReact />
        </div>
        <div className="tech-description">
            React
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <SiRedux/>
        </div>
        <div className="tech-description">
            Redux
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
        <SiExpress />
        </div>
        <div className="tech-description">
            ExpressJs
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <SiPostgresql />
      </div>
      <div className="tech-description">
            Postgresql
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <SiFlask />
      </div>
      <div className="tech-description">
            Flask
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <DiPython />
      </div>
      <div className="tech-description">
            Python
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <DiGit />
      </div>
      <div className="tech-description">
            Git
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <SiSqlalchemy />
      </div>
      <div className="tech-description">
            SQLAlchemy
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <SiSqlite />
      </div>
      <div className="tech-description">
            SQLite
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <FaAws />
      </div>
      <div className="tech-description">
            AWS
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <SiSocketdotio />
      </div>
      <div className="tech-description">
            Socket.io
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <DiCss3 />
      </div>
      <div className="tech-description">
            CSS3
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <SiSequelize />
      </div>
      <div className="tech-description">
            Sequelize
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
