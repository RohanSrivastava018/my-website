import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsMailbox2} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/rohan018/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href='https://github.com/RohanSrivastava018' target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href='#contact'><BsMailbox2 /></a>
    </div>
  )
}

export default HeaderSocials
