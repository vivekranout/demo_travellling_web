import React from 'react'
import "./Download.css"
const Download = () => {
  return (
    <>
      <section className='download top'>
           <div className='container flex_space'>
              <div className='row'>
                <h3>Download Our app</h3>
                <h1>Wow! Get This Template App For Your Mobile</h1>
                <ul> 
                    <li>&#10003; Get paperless  confirmation</li>
                    <li>&#10003; Get paperless  confirmation</li>
                    <li>&#10003; Get paperless  confirmation</li>
                    <li>&#10003; Get paperless  confirmation</li>
                    <li>&#10003; Get paperless  confirmation</li>
                    <li>&#10003; Get paperless  confirmation</li>
                    <li>&#10003; Get paperless  confirmation</li>
                </ul>
                <div className='img flex'>
                    <img src='/img/appstore-button.png' alt=''  />
                    <img src='/img/google-play-button.png' alt=''  />
                </div>
              </div>
              <div className='row row2'>
                <img src='/imgs/app-image-1.png' alt='' />
              </div>
           </div>    
      </section> 
    </>
  )
}

export default Download
