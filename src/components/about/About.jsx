import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FaLaptopCode} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
    <div className="about__cards">
      <article className="about__card">
        <FaLaptopCode className='about__icon'/>
        <h5>Freelancer</h5>
        <small>Open to Collaborate</small>
      </article>

     

      <article className="about__card">
        <VscFolderLibrary className='about__icon'/>
        <h5>Projects</h5>
        <small>25+ Completed</small>
      </article>
    </div>

    <p>
      I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience. <br/>
      <br/>
      I'm interested in the whole frontend stack Like trying new things and building great projects.
    </p>

    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About