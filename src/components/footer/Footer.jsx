import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {MdOutlineEmail} from 'react-icons/md';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Rohan Srivastava</a>

      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Skills</a></li>
      <li><a href="#services">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://www.linkedin.com/in/rohan018/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/RohanSrivastava018' target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="mailto:rsrivastava61@gatech.edu" target='_blank' rel="noreferrer"><MdOutlineEmail /></a>
      </div>
    </footer>
  )
}

export default Footer
