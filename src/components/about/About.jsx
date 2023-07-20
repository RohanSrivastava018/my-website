import React from 'react';
import './about.css';
import greece from '../../assets/greece.png';
import {FaUniversity} from 'react-icons/fa';
import {GiKnockedOutStars} from 'react-icons/gi';
import {BsCodeSlash} from 'react-icons/bs';

const About = () => {
  return (
    <section id='about'>
      <h5 className='small-words'>Who I am</h5>
      <h2>About Me</h2>
      <container className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={greece} alt='About'></img>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaUniversity className='about_icon'/>
              <h5>Georgia Institute of Technology</h5>
              <small>College</small>
            </article>

            <article className="about_card">
              <GiKnockedOutStars className='about_icon'/>
              <h5>Physics</h5>
              <small>Major</small>
            </article>

            <article className="about_card">
              <BsCodeSlash className='about_icon'/>
              <h5>Computing & Intelligence</h5>
              <small>Minor</small>
            </article>
          </div>
          <article className='text'>
            <p>
              I recently graduated from GT with a Bachelors of Science in Physics and a minor in Computer Science. I'm beginning a new role 
              as an Image Science Engineer at L3Harris Technologies. I am deeply intrigued by machine learning, specifically computer vision, 
              and am actively working to gain knowledge and experience in this field. I really enjoy playing basketball, coding, learning, 
              listening to music, and travelling.
            </p>
          </article>

          <a href='#contact' className='btn btn-primary'>Contact Me!</a>
        </div>
      </container>
    </section>
  )
}

export default About
