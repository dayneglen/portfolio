import React from 'react';

const About = () => {
    return (
      <section id="about" className="about-section">
        <h1>About Me</h1>
        <section className="about-container">
          <div className="about-img-container">
            <img
              className="profile-pic"
              src={require("../images/profile/dayne-bio-pic.jpg").default}
              alt="About Me"
            />
          </div>
          <section className="about-me-paragraphs">
            <p>
              What first attracted me to web development is my love of learning.
              Learning has always been a huge passion, and web development gives
              me so many opportunities to keep learning and improving. I decided
              to take the next big step of becoming a web developer and enrolled
              myself in Devmountain. Since then my love for technology and the web
              has only grown immensely. I especially love the logic behind
              Javascript, React and NodeJS.
            </p>
            <p>
              Part of my passion comes from mental health. One of the reasons I
              decided to become a developer was to help combine technology with
              mental health treatment. I continue to grow my skills to better be
              able to facilitate improvement in treatment. When I'm not coding, you'll see me reading a good book and enjoying the beautiful mountains of Utah.
            </p>
            <a href='https://docs.google.com/document/d/1rIizShr3b0IleOczi0CawUd2fDZ6nucIsdmZlU62t30/edit?usp=sharing'>Resume</a>
          </section>
        </section>
      </section>
    );
}

export default About;