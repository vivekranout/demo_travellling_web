
import React from 'react'
import './Abouts.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import video from '../Assets/video.mp4'
const AboutCards = () => {
  return (
    <>
      <div className='aboutCard mtop flex-space'>

     
        <div className='row row1'>
        <h4>About Us</h4>
          <h1>We <span>provide Solution</span> to grow your business</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusantium perspiciatis doloremque, repellendus nobis eius. Molestiae perferendis dignissimos laudantium mollitia.</p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusantium perspiciatis doloremque, repellendus nobis eius. Molestiae perferendis dignissimos laudantium mollitia.</p>
        
          <Link to="/Details" > <button className='secondary-btn'>Explore More</button></Link>
        </div>
        
          
        <div className='row video'>
        
        
        <video src={video} autoPlay loop muted ></video>
         
        </div>
      </div>
    </>
  )
}

export default AboutCards