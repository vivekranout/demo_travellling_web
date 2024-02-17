import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='tops'>
          <div className='tps'>
            <h1>Viv.</h1>
            <p>Choose your favourite destination</p>
          </div>
          <div className='icn'>
            <div className='icnss icns'>
              <a href='https://www.facebook.com/'>
                <img src='./imgs/fb.png' />
              </a>

            </div>
            <div className='icns iccn'>

              <a href='https://www.instagram.com/accounts/login/'>
                <img src='./imgs/insta.png' />

              </a>

            </div>
            <div className='icns iicn'>
              <a href='https://signup.live.com/'>
                <img src='./imgs/sky.png' />
              </a>

            </div>
            <div className='icns iicn'>
              <a href='https://twitter.com/i/flow/login'>
                <img src='./imgs/twitter1.png' />
              </a>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div>
            <h4>Project</h4>
            <a href=''>Changelog</a>
            <a href=''>Status</a>
            <a href=''>License</a>
            <a href=''>All Versions</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href=''>Github</a>
            <a href=''>Issue</a>
            <a href=''>Project</a>
            <a href=''>Twitter</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href=''>Support</a>
            <a href=''>Troubleshooting</a>
            <a href=''>Contact Us</a>

          </div>
          <div>
            <h4>Others</h4>
            <a href=''>Terms of Services</a>
            <a href=''>Privacy</a>
            <a href=''>Policy License</a>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
