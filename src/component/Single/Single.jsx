// import React, { useEffect, useState } from 'react'
import HeadTitle from '../HeadTitle/HeadTitle'
// import EmptyFile from '../../Common/EmptyFile/EmptyFile'
// import Sdata from '../Destination/Sdata'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import "./Single.css"
const Single = () => {

  return (
    <>
     <HeadTitle/>

      <section className='single-page top'>
        <div className='container'>
            <Link to='/destination' className='primary-btn'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back 
            </Link>  
        </div>
    
      </section>

    </>
  )
}

export default Single
