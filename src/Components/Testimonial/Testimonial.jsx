import React from 'react'
import "./Testimonial.css"

const Testimonial = () => {
  const clients = [
    {
        img: "/img/profile1.jpg",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed"
    },
    {
        img: "/img/profile2.jpg",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed"
    },
    {
        img: "/img/profile4.jpg",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed"
    },
    {
        img: "/img/profile6.jpg",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed"
    },
]
  return (
    <section className='t-wrapper' id='Testimonial'>
        <div className='t-heading'>
            <span className='spans'>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me...</span>
            <div className='blur t-blur1' style={{background:"var(--purple)"}} ></div>
            <div className='blur t-blur2' style={{background:"skyblue"}} ></div>
        </div>
      <div>
        {clients.map((client, index)=>
        {
          return (
            <div className='testimonial' key={index}>
              <img src={client.img} alt='' />
              <span>{client.review}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonial
