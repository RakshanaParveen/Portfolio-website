import React from 'react'
import RAKSHANA_RESUME from '../../assets/Rakshana Parveen Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={RAKSHANA_RESUME} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA