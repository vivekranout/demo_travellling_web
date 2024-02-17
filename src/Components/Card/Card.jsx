import React from 'react'
import "./Card.css"
import { motion } from 'framer-motion'
const Card = () => {
  const transition = {duration: 1, type: 'spring '}
  return (
    <>
  
    <motion.div 
    whileInView={{left: '45rem'}}
    initial={{right: '14rem'}}
    transition={transition}
    style={{left:'14rem'}}
    
    className='card'>
        <img src='/img/h-emoji.png' alt='' />
        <span>Design</span>
        <span>Figma, Sketch, Photoshop, Adobe, Adobe xd</span>
      <a>
        <button className='c-button'>Learn More</button>
        </a>
        </motion.div>
   

</>
  )
}

export default Card
