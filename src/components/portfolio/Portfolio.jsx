import React from 'react';
import './portfolio.css';
import biltmore from '../../assets/biltmore.jpeg'
import wildfire from '../../assets/wildfire.jpeg'
import lebron from '../../assets/lebron.png';
import universe from '../../assets/universe.png';
import website from '../../assets/website.png';
import step_calc from '../../assets/step_calc.png'
import {AiOutlineFire} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa';
import {RiGitlabLine} from 'react-icons/ri';
import {AiOutlineYoutube} from 'react-icons/ai';
import {TbBallBasketball} from 'react-icons/tb';
import {BiSlideshow} from 'react-icons/bi';
import {BsCalculator} from 'react-icons/bs'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='small-words'>Some side projects</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio_container">
        <article className='portfolio_item'>
            <div className='portfolio_item-image'>
                <img src={wildfire} alt="Wildfire Classifier" />
            </div>
            <h3>Wildfire Classifier</h3>
            <div className="portfolio_item-cta">
              <a href="https://rohansrivastava018.github.io/ml_project/" className='btn' target='_blank' rel='noreferrer'>
                <article className='links'>
                  <AiOutlineFire className='git-icon'/> 
                  <div>
                    check it out!
                  </div>
                </article>
              </a>
              {/* <a href='https://nba.com' className='btn btn-primary' target='_blank' rel='noreferrer'> */}
                {/* https://lebron-or-kareem-flask.herokuapp.com */}
                {/* <article className='links'> */}
                  {/* <TbBallBasketball className='git-icon'/>  */}
                  {/* <div> */}
                    {/* check it out! */}
                  {/* </div> */}
                {/* </article> */}
              {/* </a> */}
            </div>
        </article>

        <article className='portfolio_item'>
            <div className='portfolio_item-image'>
                <img src={biltmore} alt="Biltmore Estate" />
            </div>
            <h3>House Price Predictor</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/RohanSrivastava018/house-price-prediction" className='btn' target='_blank' rel='noreferrer'>
              <article className='links'>
                <FaGithub className='git-icon'/> 
                <div>
                  src
                </div>
              </article>
            </a>
            </div>
        </article>

        <article className='portfolio_item'>
            <div className='portfolio_item-image'>
                <img src={step_calc} alt="Step Calculator Website" />
            </div>
            <h3>Step Calculator Website</h3>
            <div className="portfolio_item-cta">
              <a href="https://www.step-calc.com/" className='btn' target='_blank' rel='noreferrer'>
                <article className='links'>
                  <BsCalculator className='git-icon'/> 
                  <div>
                    check it out!
                  </div>
                </article>
              </a>
              <a href='https://github.com/RohanSrivastava018/step-calculator' className='btn btn-primary' target='_blank' rel='noreferrer'>
                <article className='links'>
                  <FaGithub className='git-icon'/> 
                  <div>
                    src
                  </div>
                </article>
              </a>
            </div>
        </article>


        <article className='portfolio_item'>
            <div className='portfolio_item-image'>
                <img src={lebron} alt="Lebron Or Kareem?" />
            </div>
            <h3>Lebron Or Kareem?</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/RohanSrivastava018/Lebron-or-Kareem" className='btn' target='_blank' rel='noreferrer'>
                <article className='links'>
                  <FaGithub className='git-icon'/> 
                  <div>
                    src
                  </div>
                </article>
              </a>
              {/* <a href='https://nba.com' className='btn btn-primary' target='_blank' rel='noreferrer'> */}
                {/* https://lebron-or-kareem-flask.herokuapp.com */}
                {/* <article className='links'> */}
                  {/* <TbBallBasketball className='git-icon'/>  */}
                  {/* <div> */}
                    {/* check it out! */}
                  {/* </div> */}
                {/* </article> */}
              {/* </a> */}
            </div>
        </article>

        <article className='portfolio_item'>
            <div className='portfolio_item-image'>
                <img src={universe} alt="Dark Side of the Universe" />
            </div>
            <h3>Dark Side of the Universe</h3>
            <div className="portfolio_item-cta">
              <a href="https://gitlab.com/phys3266/darksim" className='btn' target='_blank' rel='noreferrer'>
                <article className='links'>
                  <RiGitlabLine className='git-icon'/> 
                  <div>
                    src
                  </div>
                </article>
              </a>
              <a href='https://www.youtube.com/channel/UC55UoPo_8jY-iLoBns5QGPw' className='btn btn-primary' target='_blank' rel='noreferrer'>
                <article className='links'>
                  <AiOutlineYoutube className='git-icon'/> 
                  <div>
                    watch!
                  </div>
                </article>
              </a>
              <a href='https://docs.google.com/presentation/d/1huL1xAyO-IhxbBHa5RCct1UDpR_Vd6to0ppdbBvPSqQ/edit?usp=sharing' className='btn btn-primary slides' target='_blank' rel='noreferrer'>
                <article className='links'>
                  <BiSlideshow className='git-icon'/> 
                  <div>
                    slides!
                  </div>
                </article>
              </a>
            </div>
        </article>

        <article className='portfolio_item'>
            <div className='portfolio_item-image'>
                <img src={website} alt="This Website!" />
            </div>
            <h3>This Website!</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/RohanSrivastava018/my-website" className='btn' target='_blank' rel='noreferrer'>
              <article className='links'>
                <FaGithub className='git-icon'/> 
                <div>
                  src
                </div>
              </article>
            </a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
