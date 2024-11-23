import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio11.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/kk.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Responsive Portfolio Website',
    github: 'https://github.com',
    //demo: 'https://dribbble.com/shots/22016436-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  },
  
  {
    id:3,
    image: IMG3,
    title: 'Anime Streaming Website',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22016436-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  },
  {
    id:2,
    image: IMG2,
    title: 'Music Composition in Matlab',
    github: 'https://github.com',
    //demo: 'https://dribbble.com/shots/22016436-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  }

 ]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Projects</h2>

          <div className="container portfolio__container">
            {
              data.map(({id,image,title,github,demo}) => {
                return (
                  <article key={id} className='portfolio__item'>
                    <div className='portfolio__item-image'>
                      <img src={image} alt={title}/>
                  
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      {/* <a href={github} className='btn' rel='noreferrer' target='_blank'>Github</a>
                      <a href={demo} className='btn btn-primary' rel='noreferrer' target='_blank'>Live Demo</a> */}
                    </div>
                </article>
                )
              })
            }
          </div>
    </section>
  )
}

export default Portfolio

/* 
<article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
            
          </div>
          <h3>Portfolio Title</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com' className='btn' target='_blank'>Github</a>
              <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
            
          </div>
          <h3>Portfolio Title</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com' className='btn' target='_blank'>Github</a>
              <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>*/