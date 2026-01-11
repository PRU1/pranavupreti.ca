import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownShort, Github, Linkedin, FileEarmarkText} from 'react-bootstrap-icons';
import 'animate.css';
import resume from '../assets/img/industry.pdf';
import TrackVisibility from 'react-on-screen';
import { TypeAnimation } from 'react-type-animation';

export const Banner = () => {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={7} xl={8}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`text-center ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <h1>
                    <TypeAnimation
                      sequence={[
                        "Hi! I'm Pranav,", // Types the string
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={0}
                      style={{ display: 'inline-block' }}
                    />
                  </h1>
                  <p>
                    <b>EngSci @ UofT</b> | Interested in quantum computing and ML.
                  </p>
                  <div className="social-links mt-3">
                    <a href="https://github.com/PRU1" target="_blank" rel="noopener noreferrer" className="btn btn-social github mx-1" aria-label="GitHub" title="GitHub">
                      <Github className="social-icon-svg" />
                    </a>
                    <a href="https://www.linkedin.com/pranav-upreti" target="_blank" rel="noopener noreferrer" className="btn btn-social linkedin mx-1" aria-label="LinkedIn" title="LinkedIn">
                      <Linkedin className="social-icon-svg" />
                    </a>
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="btn btn-social cv mx-1" aria-label="resume" title="resume">
                      <FileEarmarkText className="social-icon-svg" />
                    </a>
                  </div>
                  <div className="mt-3">
                    <span
                      role="button"
                      onClick={scrollToAbout}
                      className="scroll-caret"
                      style={{ fontSize: '2rem', cursor: 'pointer' }}
                      aria-label="Scroll to about"
                    >
                      <ArrowDownShort />
                    </span>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
