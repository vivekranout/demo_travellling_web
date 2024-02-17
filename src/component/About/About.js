import React from 'react'
import AboutCards from './AboutCards'
import HeadTitle from '../HeadTitle/HeadTitle'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const About = () => {
  return (
    <>
       <HeadTitle/>
      <section className='about top'>
        <div className='container'>
          <AboutCards />
        </div>
      </section>

      <section className='features top'>
        <div className=' container aboutCard aboutcards '>
          <h1> Our <span>Features</span></h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eius nisi deleniti voluptatibus minus nostrum deserunt fugiat provident reprehenderit ullam quod veniam.</p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eius nisi deleniti voluptatibus minus nostrum deserunt fugiat provident reprehenderit ullam quod veniam.</p>
         <Link to="/Features" > <button className='secondary-btn'>Explore More</button></Link>
            
          
        </div>
        <div className='row image images'>
          <img src='/imgs/feature.jpeg'></img>
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default About

