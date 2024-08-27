import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptop from "../../assets/laptop.jpg";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  // AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  VOLUNTEER /<span className="yellow"> LEADERSHIP </span>
                </h1>
                <p className="home-about-body">
                 In addition, I was <span className="yellow"> actively </span>
                 involved in <span className="yellow"> APHF</span> as a <span className="yellow">volunteer</span>, <span className="yellow">coordinator</span>, and <span className="yellow">manager</span>.
                <br />
                <br />
                Here, I led a team of volunteers where we hosted <span className="yellow">free monthly health screenings</span>  to the underprivileged communities in San Diego. These health screenings notified
                people if they have any possible health conditions that they may need to seek further medical attention for.
                As part of the leadership team at APHF, we continuously <span className="yellow">forged partnerships</span> with healthcare providers and organizations to be able to continue the success of our services.
                <br />
                <br />
                  These experiences allowed me to practice
                  <b className="yellow"> leadership, communication, and time management</b>.

                  <br />
                  <br />If I am not volunteering or coding, I like to
                    <b className="yellow"> dance, </b>
                  <b className="yellow">play video games, and find good food places to eat!</b>
                  <br />
                  <br />
                  <br />
                  <br />

                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={laptop} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/dianapnle"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/diana-le-b88a11209/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );

}

export default About
