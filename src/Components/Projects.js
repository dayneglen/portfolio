import React from 'react';

const Projects = () => {
    return (
      <section>
        <section className="projects-container">
          <h1 className='projects-header'>My Projects</h1>
          <section className='project-details'>
            <h1 className='project-name'>MRK 500</h1>
            <p>
              MRK 500 was born from my desire to make premium t-shirts for tall
              men. If you look around, you will find it is very hard to find
              tall t-shirts that don't cost a lot. MRK500 was designed to fill
              that gap.
            </p>
            <p>
              MRK 500 is a fully-functioning ecommerce site where customers can
              log in, select t-shirts from all different sizes, and checkout
              using the Stripe api. It is also has an admin functionality
              allowing the admin to edit, add, and delete products from the
              website.
            </p>
            <p>
              <span>Technology Used:</span>React | SASS | NodeJS | Bcrypt |
              PostgreSQL | Stripe API | Nodemailer
            </p>
            <a href="https://www.mrk500.com">Live Website</a>
            <a href="https://github.com/dayneglen/mrk500">Source Code</a>
            
          </section>
          <section className='project-img-container'>
            <img className='project-img' src={require('../images/projects/mrk500.jpg').default} alt='MRK 500' />
          </section>
        </section>
      </section>
    );
}

export default Projects;