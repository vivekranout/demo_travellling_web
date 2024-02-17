import React from 'react'
import "./Works.css"

import { themeContext} from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import Resume from '../Service/resume.pdf'
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className='works'>
      <div className='awesome'>
              <span style={{color: darkMode? 'white': ''}}>Works for All these</span>
              <span>Brands & Clients</span>
              <spane>Loem ispum is simply dummy text of printing of printing Lorem
                 <br/>
                 ispum is simply dummy text of printing
                 <br/>
                 ispum is simply dummy text of printing, text of printing
                 <br/>
                 Loem ispum is simply dummy text
              </spane>
              <a href={Resume} download>
              <button className='button s-button'>Download CV</button></a>
              <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
        </div>

        <div 
           
            className='w-right'>
            <motion.div
            initial={{rotate:45}}
            whileInView={{rotate: 0}}
            viewport={{margin: '-40px'}}
             transition={{duration: 3.5, type: 'spring'}}
            className='w-mainCircle'>
                <div className='w-secCircle' >
                 <img src='/img/Upwork.png' alt=''/>   
                </div>

                <div className='w-secCircle'>
                 <img src='/img/fiverr.png' alt=''/>   
                </div>
                <div className='w-secCircle'>
                 <img src='/img/amazon.png' alt=''/>   
                </div>
                <div className='w-secCircle'>
                 <img src='/img/Shopify.png' alt=''/>   
                </div>
                <div className='w-secCircle'>
                 <img src='/img/Facebook.png' alt=''/>   
                </div>
            </motion.div>

            <div className='w-backCircle b-Circle'></div>
            <div className='w-backCircle y-Circle'></div>
        </div>
    </div>
  )
}

export default Works
