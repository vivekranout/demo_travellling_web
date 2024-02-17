import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

const Navbar = () => {
  const [click, setClick] = useState(false)


  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='container flex-space nav-container'>
          <div className='meni-icon' onClick={handleClick}>
            <a href='/'> <span>V</span>iv.</a>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li> <Link to='/' closeMobileMenu>Home</Link> </li>
            <li> <Link to='/about' closeMobileMenu>About</Link> </li>
            <li> <Link to='/gallery' closeMobileMenu>Gallery</Link> </li>
            <li> <Link to='/destination' closeMobileMenu>Destination</Link> </li>
            <li> <Link to='/blog' closeMobileMenu>Blog</Link> </li>
            <li> <Link to='/contact' closeMobileMenu>Contact Us</Link> </li>

          </ul>
          <div className='login-area flex'>
            <li>
              <Link to='/login'>
                <i className='fas fa-chevron-right'>Sign In</i>
              </Link>
            </li>

            <li>
              <Link to='/contact'>
                <button className='primary-btn'>Request a Quote</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className='container flex-space'>
          <div className='logo'>
            <img src='/imgs/logo-1.png' alt='' />Travel.
          </div>

          <div className='contact flex-space'>
            <div className='box flex-space'>
              <div className='icons'>
                <img src='/imgs/clock1.jpg' />
              </div>
              <div className='text'>
                <h4>Working Hour</h4>
                <Link to='/contact'>Monday - Sunday: 9.00am to 6.00pm</Link>
              </div>
            </div>
            <div className='box flex-space'>
              <div className='icon'>
                <img src='/imgs/phone.png' alt='' />
              </div>
              <div className='text'>
                <h4>Call Us Hour</h4>
                <Link to='/contact'>+011 123 4567</Link>
              </div>
            </div>

            <div className='box flex-space'>
              <div className='icons'>
                <img src='/imgs/mail.png'></img>
              </div>
              <div className='text'>
                <h4>Mail Us</h4>
                <Link to='/contact'>info@example.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Navbar
