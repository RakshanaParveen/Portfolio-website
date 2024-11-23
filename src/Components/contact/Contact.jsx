import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    < section id='contact'>
      <h5>To Know More About My Work</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rakshana@gmail.com</h5>
            <a href='mailto:rakshanaparveen024@gmail.com' target='_blank'>Send a message</a>
         </article>

         <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Rakshana Parveen</h5>
            <a href='http://linkedin.com/in/rakshana-parveen' rel='noreferrer' target='_blank'>Send a message</a>
         </article>

         <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91..........</h5>
            <a href='https://api.whatsapp.com/send?phone=9150436348' rel='noreferrer' target='_blank'>Send a message</a>
         </article>
         
        </div>

        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

/* 
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n01upjg', 'template_ktqvlnr', form.current, 'm537LisIYD_NckzAb')
    
    e.target.reset()
  };

<form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        
        */