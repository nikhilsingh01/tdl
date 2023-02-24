import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/images/thinkdata-final-logo-removebg-preview.png'
import { Link } from 'react-scroll';

const Navbar = () => {
const [click,setClick] = useState(false);
const closeMenu = () => setClick(false);
  const Menu = () => {
    return (
      <>
        <p><Link to="hero" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link></p>
        <p><Link to="about-us" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About Us</Link></p>
        <p><Link to="services" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Our Services</Link></p>
        <p><Link to="features" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Features</Link></p>
        <p><Link to="testimonial" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Testimonial</Link></p>
        <p><Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contact</Link></p>
      </>)
  }
  const [toggleMenu, setToggleMenu] = useState(false);
  console.log(toggleMenu, 'check')
  return (
    <div className='gk__navbar'>
      <div className='gk__navbar-links'>
        <div className='gk__navbar-links-logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gk__navbar-links-container'>
          <Menu />
        </div>
      </div>
      <div className='gk__navbar-menu'>
        {toggleMenu ?
          <RiCloseLine color='#fff' size="32px" onClick={() => setToggleMenu(false)} />
          :
          <RiMenu3Line color='#fff' size="32px" onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (<div className='gk__navbar-menu-container scale-up-tr'>
          <div className='gk__navbar-menu-container-links'>
            <Menu />
          </div>
        </div>)}
      </div>
    </div>
  )
}
export default Navbar
