import React, { useState, useEffect, useRef } from 'react';
import './nav.css';
import {BsMailbox} from 'react-icons/bs';
import {BiHome, BiUser, BiBook, BiBriefcaseAlt} from 'react-icons/bi';
import {FiFolder} from 'react-icons/fi';
import {useState} from 'react';
// import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className="nav_container">
      <nav>
          <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome/></a>
          <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
          <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
          <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><BiBriefcaseAlt/></a>
          <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FiFolder/></a>
          <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsMailbox/></a>
      </nav>
    </div>
  )
}

export default Nav