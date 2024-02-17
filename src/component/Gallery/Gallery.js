import React from 'react'
import HeadTitle from '../HeadTitle/HeadTitle'
import Cards from './Cards'
import GalleryData from './GalleryData'
import './Gallery.css'
import Footer from '../Footer/Footer'
const Gallery = () => {
  return (
    <>
       <HeadTitle/>

       <section className='gallery top'>
        <div className='container grid'>
          {GalleryData.map((value)=> {
            return <Cards img={value.img} title={value.title}/>
          }
           
          )}
          
        </div>
       </section>
       <Footer/>
    </>
  )
}

export default Gallery
