import React from 'react'
import "./Sevice.css"

import Card from '../Card/Card'
import Crd from '../Card/Crd'
import Crds from '../Card/Crds'
import { themeContext} from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import Resume from './resume.pdf'
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration: 1, type: 'spring '}
  return (
    <div className='service' id='Services'>
        <div className='awesome'>
              <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
              <span>service</span>
              <spane>Loem ispum is simply dummy text of printing of printing Lorem
                 <br/>
                 ispum is simply dummy text of printing.
              </spane>
              <a href={Resume} download>
              <button className='button s-button'>Download CV</button></a>
              <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
        </div>
      <div className='cards'>
            <motion.div 
            whileInView={{left: '14rem'}}
            initial={{left: '25rem'}}
            transition={transition}
            style={{left: '60%'}}
            >
             <Card />  
             <Crd/> 
            <Crds/>
            </motion.div>
            <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div>
        </div>
    </div>
  )
}

export default Services
