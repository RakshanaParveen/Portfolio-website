import React from 'react'
import './about.css'
import ME from '../../assets/react-portfolio-thumbail.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About image'/>
          </div>
        </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon'/>
            <h5>Engineeering Student</h5>
            <small>At S.A.Engineering College</small>
          </article>
          <article className="about__card">
          <FiUsers className='about__icon'/>
            <h5>Branch</h5>
            <small>Computer Science</small>
          </article>
          <article className="about__card">
          <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>Completed React Portfolio Responsive Website</small>
          </article>
        </div>
        <p>I'm Rakshana Parveen a Computer Science Engineering student at SAEC. </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    
    </section>
  )
}

export default About