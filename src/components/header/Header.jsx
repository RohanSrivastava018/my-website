import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/headshot_no-bg.png';
import HeaderSocial from './HeaderSocials';
import Typewriter from 'typewriter-effect';

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1 className='top_name'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
              .changeDelay(125)
              .pauseFor(500)
              .typeString("Hey!")
              .pauseFor(1500)
              .deleteAll()
              .typeString("I'm Rohan Srivastava!")
              .pauseFor(5000)
              .callFunction(function(state) {
                state.elements.cursor.style.color = 'transparent';
              })
              .start()
            }}
          />
        </h1>
        {/* <h5 className='text-light'>
          <Typewriter 
              options={{cursor:''}}
              onInit={(typewriter) => {
                typewriter
                .pauseFor(5000)
                .changeCursor('|')
                .changeDelay(50)
                .typeString("Senior @ Georgia Tech")
                .callFunction(function(state) {
                  state.elements.cursor.style.color = 'transparent';
                })
                .start()
              }}
          />
        </h5> */}
        {/* <h5 className='text-light'>
          <Typewriter 
              options={{cursor:''}}
              onInit={(typewriter) => {
                typewriter
                .pauseFor(7000)
                .changeCursor('|')
                .changeDelay(50)
                .typeString("Currently recruiting for full time roles that start in May 2023.")
                .pauseFor(4900)
                .callFunction(function(state) {
                  state.elements.cursor.style.color = 'transparent';
                })
                .start()
              }}
          />
        </h5> */}
        <h5 className='text-light'>Image Science Engineer @ L3Harris Technologies</h5>
        <h5 className='text-light'>B.S. in Physics | Minor in Computing & Intelligence | Georgia Tech</h5>

        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header
