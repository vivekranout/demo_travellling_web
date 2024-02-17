import React from 'react'
import "./Intro.css"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Float from '../FloatingDiv/Float'
import { themeContext } from '../../Context'
import { useContext } from 'react'

import {motion} from 'framer-motion'
const Intro = () => {

  const transition = {duration: 1, type: 'spring '}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className='i-left'>
<div className='i-name'>
    <span style={{color: darkMode? 'white': ''}}>Hy! I Am </span>
    <span>Vivu Ranout</span>
    <span>Frontend Developer with experience in web designing nad development,<br/> producting the Quality work.</span>
</div>

<button className='button i-button'>Hire me</button>
<div className='i-icons'>
    <img src='/img/github.png'alt />
    <img src='/img/instagram.png'alt />
    <img src='/img/linkedin.png'alt />
</div>
        </div>
       <div className='i-right'>
       <img src='/img/Vector1.png'alt='' />
    <img src='/img/Vector2.png'alt='' />
    <img src='/img/boy.png'alt='' />
    <motion.img
     initial={{left: '-36%'}}
     whileInView={{left: '-24%'}}
     transition={transition}
    
    src='/img/g-imoji.png'alt='' />
    <motion.div
      initial={{top: '-4%', left: '74%'}}
      whileInView={{left: '68%'}}
      transition={transition}

    style={{top: '-4%', left: '68%'}}>   
        <FloatingDiv />
    </motion.div>
   <motion.div 
    initial={{left: '9rem', top: '18rem'}}
    whileInView={{left: '0.5rem'}}
    transition={transition}

   style={{   top: '18.4rem',
    left: '0.5rem'}}
   >
      <Float />
   </motion.div>
   <div className='blur' style={{background: "rgba(238 210 256)"}}></div>
        </div>
        <div className='blur'
         style={{
          background:"#C1FSFF",
          top:"17rem",
          width:"21rem",
          height:"11rem",
          left:"-9rem",
         }}
        ></div>
    </div>
  )
}

export default Intro
