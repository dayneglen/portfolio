import React from "react";
import Fade from 'react-reveal/Fade';

const Skills = () => {
  
  return (
    <section className="skills-section">
      <section id="skills" className="skills-container">
        <Fade left duration={2000} delay={1000}>
          <h2>Skills</h2>
        </Fade>
        <Fade right duraction={2000} delay={1000}>
          <div className="skill-list">
            <i className="fab fa-react" aria-hidden="true">
              <span>REACT</span>
            </i>
            <i className="fab fa-node" aria-hidden="true">
              <span>NODE</span>
            </i>
            <i className="fab fa-js-square" aria-hidden="true">
              <span>JAVASCRIPT</span>
            </i>
            <i className="fab fa-css3-alt" aria-hidden="true">
              <span>CSS</span>
            </i>
            <i className="fab fa-html5" aria-hidden="true">
              <span>HTML</span>
            </i>
            <i className="fab fa-sass" aria-hidden="true">
              <span>SASS</span>
            </i>

            <div>
              <img
                className="skill-img"
                src={require(`../images/skills/redux.png`).default}
                alt="redux"
              />
              <p>REDUX</p>
            </div>
            <i className="fab fa-aws" aria-hidden="true">
              <span>AWS</span>
            </i>
            <div>
              <img
                className="skill-img"
                src={require(`../images/skills/postgresql.png`).default}
                alt="postgres"
              />
              <p>POSTGRES</p>
            </div>
            <div className="git-img">
              <img
                className="skill-img"
                src={require(`../images/skills/git.png`).default}
                alt="git"
              />
              <p>GIT</p>
            </div>
          </div>
        </Fade>
      </section>
    </section>
  );
};

export default Skills;
