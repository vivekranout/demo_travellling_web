import React from 'react'
import { Link } from 'react-router-dom'
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import Single from '../Single/Single';
const Dcard = ({ item : {id, img, title, desc, sidepara, paraImage_one, paraImage_two } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
            <img src={img} alt='' />

            {/* <Link to='/single'className='blogItem-link'>
                <i className='fas fa-external-link-alt'><PhotoCameraBackIcon/></i>
            </Link> */}
        </div>

        <div className='title'>
            <h3>{title}</h3>
          
        </div>
      </div>
    </>
  )
}

export default Dcard
