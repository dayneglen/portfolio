import React from 'react';

const About = () => {
    return (
      <section id="about" className="about-section">
        <h1>About Me</h1>
        <section className="about-container">
          <section className="about-me-paragraphs">
            <p>
              What first attracted me to web development is my love of learning.
              Learning has always been a huge passion, and web development gives
              me so many opportunities to keep learning and improving. I decided
              to take the next big step of becoming a web developer and enrolled
              myself in Devmountain. Since then my love for technology and web
              has only grown immensely. I especially love the logic behind
              Javascript, React and NodeJS.
            </p>
          </section>
          <div className="about-img-container">
            <img
              className="profile-pic"
              src={require("../images/profile/dayne-bio-pic.jpg").default}
              alt="About Me"
            />
          </div>
        </section>
      </section>
    );
}

export default About;