import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import popData from './popData';


const SampleNextArrow =(props) =>{
const {onClick} = props
return(
  <div className='control-btn' onClick={onclick}>
    <button className='next'>
      <i><img src='' alt='' /></i>
    </button>
  </div>
)

}
const SamplePrevArrow =(props) =>{
  const {onClick} = props
  return(
    <div className='control-btn' onClick={onclick}>
      <button className='Prev'>
        <i><img src='' alt='' /></i>
      </button>
    </div>
  )
  
  }
const Cards = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
       nextArrow: <SampleNextArrow/>,
       nextArrow: <SamplePrevArrow/>,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
             
            }
          },
         
        ]
    };
  return (
    <>
     <Slider {...settings}>
    {popData.map((value)=>{
        return (
           
      <div className='cards'>
      <div className='item'>
        <div className='image'>
            <img src={value.img} alt='' />
            </div>
        </div>
        <div className='text'>
            {value.review}
           </div>         
      </div>
      )
    })}
    </Slider>
    </>
  )
}

export default Cards
