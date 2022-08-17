import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsLinkedin} from 'react-icons/bs';
import {BsPhone} from 'react-icons/bs';

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wm3ehen', 'template_eq85jkg', form.current, 'L6V7yol3bMMUzRgPp')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch!</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
          <div className="contact_options">
              <article className='contact_option'>
                <MdOutlineEmail className='contact-icon'/>
                <h5>rsrivastava61@gatech.edu</h5>
                <a href="mailto:rsrivastava61@gatech.edu" target='_blank' rel='noreferrer'>Send a message</a>
              </article>

              <article className='contact_option'>
                <BsLinkedin className='contact-icon'/>
                <h5>Feel free to message me!</h5>
                <a href="https://www.linkedin.com/in/rohan018/" target='_blank' rel='noreferrer'>View Profile</a>
              </article>

              <article className='contact_option'>
                <BsPhone className='contact-icon'/>
                <h5>(864) 396 - 3054</h5>
                <a href="tel:8643963054" target='_blank' rel='noreferrer'>Call me</a>
              </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
          {/* <form action=""> */}
              <input type="text" name="name" placeholder='Your Full Name' required/>
              <input type="text" name='email' placeholder='Your Email' required/>
              <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
