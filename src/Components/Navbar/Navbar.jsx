import React from 'react'
import "./navbar.css"
import Toogle from '../Toogle/Toogle'
import {Link} from 'react-scroll'
import Services from '../Service/Services'
import Experience from '../Experience/Experience'
import Portfolio from '../Portfolio/Portfolio'
import Testimonial from '../Testimonial/Testimonial'
const Navbar = () => {
  return (
 
    <nav className='navbar'>
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name'>Viv.</div>
      <Toogle/>
      </div>
      <div className='n-right'>
        <div className='n-list'>
          <ul style={{listStyleType:'none'}}>
            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
            <li>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true}>
            <li>Services</li> 
             </Link>
            <Link spy={true} to='Experience' smooth={true}>
            <li>Experience</li> 
             </Link>
            <Link spy={true} to='Portfolio' smooth={true} >
            <li>Portfolio</li>
              </Link>
            <Link spy={true} to='Testimonial' smooth={true}>
            <li>Testimonials</li>
              </Link>
          </ul>
        </div>
        <Link  spy={true} to='Contact Us' smooth={true}>
       <button className='button n-button'>
        Contact Us
       </button>
       </Link>
      </div>
    </div>
    </nav>
  
  )
}

export default Navbar