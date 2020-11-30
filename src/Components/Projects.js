import React from 'react';

const Projects = () => {
    return (
      <section className="projects-section">
        <section className="projects-container">
          <h1 className="projects-header">My Projects</h1>
          <section className="current-projects">
            <section className="projects">
              <section className="project-img-container">
                <a href="https://www.mrk500.com">
                  <img
                    className="project-img"
                    src={require("../images/projects/mrk500.jpg").default}
                    alt="MRK 500"
                  />
                </a>
              </section>
              <section className="project-details">
                <h1 className="project-name">MRK 500</h1>
                <p>
                  MRK 500 was born from my desire to make premium t-shirts for
                  tall men. If you look around, you will find it is very hard to
                  find tall t-shirts that don't cost a lot. MRK500 was designed
                  to fill that gap.
                </p>
                <p>
                  MRK 500 is a fully-functioning ecommerce site where customers
                  can log in, select t-shirts from all different sizes, and
                  checkout using the Stripe api. It is also has an admin
                  functionality allowing the admin to edit, add, and delete
                  products from the website.
                </p>
                <p>
                  <span>Technology Used: </span>React, SASS, NodeJS, Bcrypt,
                  PostgreSQL, Stripe API, Nodemailer
                </p>
                <section className="project-links">
                  <a href="https://www.mrk500.com">Live Website</a>
                  <a href="https://github.com/dayneglen/mrk500">Github Repo</a>
                </section>
              </section>
            </section>
            <section className="projects">
              <section className="project-img-container phone-screen">
                <a href="https://www.noobtube.app">
                  <img
                    className="project-img"
                    src={require("../images/projects/Noobtube.jpg").default}
                    alt="MRK 500"
                  />
                </a>
              </section>
              <section className="project-details">
                <h1 className="project-name">
                  Noobtube - A Youtube Alternative
                </h1>
                <p>
                  Noobtube is a group project designed and coded with three
                  other developers at Devmountain coding camp. Noobtube is a
                  youtube alternative. Users can upload, delete, and view other
                  user's videos.
                </p>
                <p>
                  Noobtube uses Amazon's AWS S3 buckets to dynamically upload,
                  delete, and view videos. As a team, we created tags where the
                  program will suggest alternative videos for users that have
                  similar tags.
                </p>
                <section className='noobtube-demo'>
                  <p>
                    To demo website:
                  </p>
                  <p>
                    Email: dayneglendevelopment@gmail.com
                  </p>
                  <p>
                    Password: 123
                  </p>
                </section>

                <p>
                  <span>Technology Used: </span>React, SASS, NodeJS, Bcrypt,
                  PostgreSQL, Amazon AWS
                </p>
                <section className="project-links">
                  <a href="https://www.noobtube.app">Live Website</a>
                  <a href="https://github.com/devmountain-noobtube-chaps/noobtube">
                    Github Repo
                  </a>
                </section>
              </section>
              <section className="project-img-container larger-screen">
                <a href="https://www.noobtube.app">
                  <img
                    className="project-img"
                    src={require("../images/projects/Noobtube.jpg").default}
                    alt="MRK 500"
                  />
                </a>
              </section>
            </section>
          </section>
        </section>
      </section>
    );
}

export default Projects;