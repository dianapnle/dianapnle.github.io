import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  // AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect! I am eager to expand my skillset and learn new technologies!</span>
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/dianapnle"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  {/* <li className="contact-icons">
                    <a
                      href="https://twitter.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li> */}
                  <li className="contact-icons">
                    <a
                      href="https://www.linkedin.com/in/diana-le-b88a11209/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  {/* <li className="contact-icons">
                    <a
                      href="hhttps://leetcode.com/19sajib/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <SiLeetcode />
                    </a>
                  </li> */}
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social