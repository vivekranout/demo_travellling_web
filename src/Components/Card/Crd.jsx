import React from 'react'
import "./Crd.css"

import { motion } from 'framer-motion'
const Crd = () => {
  const transition = {duration: 1, type: 'spring '}
  return (
    <>
      
<motion.div 
  whileInView={{left: '1rem'}}
  initial={{right: '14rem'}}
  transition={transition}

className='crd1' style={{top:"12rem", left:"30rem"}}>
<img src='/img/glasses.png' alt='' />
<span>Developer</span>
<span>Html, Css, JavaScript, React</span>
<a>
  <button className='c-button1'>Learn More</button>
  </a>
</motion.div>
    </>
  )
}

export default Crd
