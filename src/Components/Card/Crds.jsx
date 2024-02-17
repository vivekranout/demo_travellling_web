import React from 'react'
import "./Crds.css"
import { motion } from 'framer-motion'
const Crds = () => {
  const transition = {duration: 1, type: 'spring '}
  return (
    <>
       <motion.div
        whileInView={{left: '17rem'}}
        initial={{left: '-25rem'}}
        transition={transition}
       
       className='crd1' style={{top:"7rem", left:"17rem"}}>
<img src='/img/humble.png' alt='' />
<span>UI/UX</span>
<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sed!</span>
<a >
  <button className='c-button1'>Learn More</button>
  </a>
</motion.div>    

    </>
  )
}

export default Crds
