import React from 'react';
import Fade from 'react-reveal/Fade';

const Landing = () => {
   
    return (
      <section className="landing-container">
        <Fade duration={3000} delay={500}>
          <section className="welcome-container">
            <h1>Hi, I'm Dayne!</h1>
            <h1>I'm a Full Stack Web Developer</h1>
          </section>
        </Fade>
        <Fade duration={2000} delay={2000} >
            <h3 className='about-me'>About Me</h3>
        </Fade>
      </section>
    );
}

export default Landing;