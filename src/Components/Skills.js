import React from "react";
import Fade from 'react-reveal/Fade';

const Skills = () => {
  
  return (
    <section id="skills" className="skills-container">
      <Fade left duration={2000} delay={1000}>
        <h2>Skills</h2>
        <div className="skill-list">
          <i class="fab fa-react" aria-hidden="true">
            <span>REACT</span>
          </i>
          <i class="fab fa-node" aria-hidden="true">
            <span>NODE</span>
          </i>
          <i class="fab fa-js-square" aria-hidden="true">
            <span>JAVASCRIPT</span>
          </i>
          <i class="fab fa-css3-alt" aria-hidden="true">
            <span>CSS</span>
          </i>
          <i class="fab fa-html5" aria-hidden="true">
            <span>HTML</span>
          </i>
          <i class="fab fa-sass" aria-hidden="true">
            <span>SASS</span>
          </i>
          <div>
            <img
              className="skill-img"
              src={require(`../images/skills/redux.png`).default}
              alt="redux"
            />
            REDUX
          </div>
          <div>
            <img
              className="skill-img"
              src={require(`../images/skills/git.png`).default}
              alt="git"
            />
            GIT
          </div>
          <div>
            <img
              className="skill-img"
              src={require(`../images/skills/postgresql.png`).default}
              alt="postgres"
            />
            POSTGRES
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Skills;
