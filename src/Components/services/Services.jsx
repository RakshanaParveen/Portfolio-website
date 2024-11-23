import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Know</h5>
      <h2>Courses & Training</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Java Essential Training</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Completed basics of OOPS concepts in java programming</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li> */}
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Advanced Java Training</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Completed Generics, Streams, Lamdas, working with I/O</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managing files & directories.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Sql Essential Training</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Completed SQL essentials using MYSQL management system</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li> */}
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Soft Skills and Aptitude Skills </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Completed a training in development of Interpersonal Skills</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Full Stack Development- Ongoing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Completed HTML,CSS and Javascript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Backend- Ongoing</p>
            </li>
          </ul>
        </article>

        
      </div>
    </section>
  )
}

export default Services