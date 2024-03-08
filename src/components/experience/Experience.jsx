import React from 'react';
import './experience.css';
import {BsFillCheckCircleFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='small-words'>What I've worked with</h5>
      <h2>My Skills</h2>
      
      <div className="container experience_container">

        <div className="experience_languages">
          <h3>Languages & Frameworks</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>Flask</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>C</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
              <h4>MATLAB</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>



        <div className="experience_technologies">
        <h3>Technologies & Packages</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>Jupyter Notebook</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>TensorFlow</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>Anaconda</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>macOS</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div> 
                <h4>NumPy</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>OpenCV</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>VSCode</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>Linux</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>PyTorch</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
