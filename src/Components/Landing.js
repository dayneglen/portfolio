import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

const Landing = () => {
   
    return (
      <section className="landing-container">
        <Fade duration={3000} delay={500}>
          <section className="welcome-container">
            <h1>DAYNE PORTER</h1>
            <h2>Full Stack Web Developer</h2>
            <Fade delay={1000} left>
              <ul>
                <li>HTML</li>
                <li>|</li>
                <li>CSS</li>
                <li>|</li>
                <li>REACT</li>
                <li>|</li>
                <li>NODEJS</li>
                <li>|</li>
                <li>POSTGRESQL</li>
              </ul>
            </Fade>
          </section>
        </Fade>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <section className="about-arrow">
            <Fade duration={2000} delay={1500}>
              <h3 className="welcome-container">About Me</h3>
            </Fade>
            <Fade duration={2000} delay={2500}>
              <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Fade>
          </section>
        </Link>
      </section>
    );
}

export default Landing;