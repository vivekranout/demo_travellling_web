import React from 'react'
import "./Portfolio.css"


import { themeContext} from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
      <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      <div className='portfolio-slider' spacebetween={30} slidePreView={3}
      grabCusor={true}> 
      <div className='images'>
        <img className='imgs' src='/img/sidebar.png' alt='' />
        <img src='/img/ecommerce.png' alt='' />
        <img src='/img/hoc.png' alt='' />
        <img src='/img/musicapp.png' alt='' />
        </div>
      </div>
    </div>

    
  )
}

export default Portfolio
