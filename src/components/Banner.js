import { ArrowDownShort, Github, Linkedin, FileEarmarkText } from 'react-bootstrap-icons';
import 'animate.css';
import resume from '../assets/img/industry.pdf';
import coverPhoto from '../assets/img/slider/cover_photo.png';
import TrackVisibility from 'react-on-screen';
import { TypeAnimation } from 'react-type-animation';

export const Banner = () => {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <section className="banner" id="home">
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={`hero-inner ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
            <div className="hero-row">
              <div className="hero-text">
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
                  <b>EngSci @ UofT</b> &nbsp;|&nbsp;  Photonic integrated circuit design acceleration.
                </p>
                <div className="social-links">
                  <a href="https://github.com/PRU1" target="_blank" rel="noopener noreferrer" className="btn btn-social github mx-1" aria-label="GitHub" title="GitHub">
                    <Github className="social-icon-svg" />
                  </a>
                  <a href="https://www.linkedin.com/pranav-upreti" target="_blank" rel="noopener noreferrer" className="btn btn-social linkedin mx-1" aria-label="LinkedIn" title="LinkedIn">
                    <Linkedin className="social-icon-svg" />
                  </a>
                  <a href={resume} target="_blank" rel="noopener noreferrer" className="btn btn-social cv mx-1" aria-label="Resume" title="Resume">
                    <FileEarmarkText className="social-icon-svg" />
                  </a>
                </div>
              </div>
              <div className="hero-headshot" aria-hidden="true">
                <img src={coverPhoto} alt="Pranav photo" />
              </div>
            </div>
            <div className="hero-scroll-wrap">
              <span
                role="button"
                onClick={scrollToAbout}
                className="hero-scroll-cue"
                aria-label="Scroll to about"
              >
                <ArrowDownShort size={26} />
              </span>
            </div>
          </div>
        }
      </TrackVisibility>
    </section>
  )
}
