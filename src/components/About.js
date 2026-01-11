import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PhotoSlider from './PhotoSlider';

export const About = () => {
  return (
    <section id="about" className="about full-bleed py-5">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8} className="text-center text-md-left">
            <h2>About Me</h2>
            <div>
              <p className="lead">
                I'm an engineering student who wants to design the next generation of quantum computers. Recently, I audited CSC2332 (Introduction to Quantum Algorithms) and am working on a variational quantum algorithm for spectral analysis. I am also doing embedded programming for UTBIOME's droplet generator team.              </p>

              <p className="lead">
                I have also studied process modelling and simulation in the context of chemical engineering, focussing on CSTRs. Further, I have experience with ML and full-stack web applications (see <a href="https://github.com/PRU1">my GitHub</a>).
              </p>

              <p className="lead">
                Outside engineering and academics, I am an avid hiker and aspiring dragon boater. Feel free to <a href="mailto:pranav.upreti@mail.utoronto.ca">reach out!</a>
              </p>
            </div>
          </Col>

          <Col xs={12} md={4} className="text-center">
            <PhotoSlider />
          </Col>
        </Row>
        
      </Container>
    </section>
  );
}

export default About;
