import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import graphlaptop from "../../assets/graphlaptop.png";
import Tilt from "react-parallax-tilt";



const VolunteerLeadership = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Diana Le</span>
                 and I'm from <span className="yellow"> San Diego, California.</span>
                <br />
                <br />
                I graduated in 2018 with a Bachelor's of Science degree in <span className="yellow">General Biology </span>. Previously, I was interested in medicine and worked in the ER. I was fortunate to have worked closely with physicians and staff for 2.5 years before becoming fascinated with code!
                During my time there, the ER staff and I experienced many frustrations with the software we were using at the hospital. What started as <span className="yellow">curiousity</span> became <span className="yellow">passion</span>, as I realized that the programs and applications we currently use can be <span className="yellow">improved </span>. I made the transition into software development, a career that allowed me to combine both my passion for health care and developing tools.
                I am excited to <span className="yellow">leverage my skills and experiences</span> to create useful tools that will improve quality of life for others!
                <br />
                <br />
                  I recently completed a year at App Academy as a
                  <b className="yellow"> Full-Stack Developer</b>.
                  I enjoy tackling new challenges and am eager to continuously expand my skillset in order to create tools that make life easier.
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> Javascript, </b>
                    as well as have knowledge in programming languages such as
                  <b className="yellow"> Java, Python, SQL, and React</b> to name a few. I also have been working with Google App Scripts to automate processes. I also have some experience working with different Zoho tools.
                  <br />
                  <br />
                  I am interested in learning new skills to be able to build
                  <i>
                    <b className="yellow"> full-stack applications and products, </b>
                    as well as exploring areas related to
                    <b className="yellow"> artificial intelligence and machine learning.</b>
                  </i>
                  <br />
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={graphlaptop} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>
      );

}

export default VolunteerLeadership
