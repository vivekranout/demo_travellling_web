import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import HeadTitle from '../../HeadTitle/HeadTitle'

import Sdata from '../../Destination/Sdata'
const BlogSingle = () => {
  const { id } = useParams(0)
  const [item, setItem] = useState(1)

  useEffect (() => {
     let item = Sdata.find((item) => item.id === parseInt(id))

     if(item) {
      setItem(item)
     }
  },[id])
  return (
    <>
    <HeadTitle/>
       <section className='single-page top'>
        <div className='container'>
            <Link to='/blog' className='primary-btn'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back 
            </Link>
          

            <article className='content flex'>
                <div className='main-content'>
                    <img src={item.img} alt='' />
                    </div>

                    <div className='side-content'>
                <div className='box'>
                    <h2>How can we help you?</h2>
                    <p>{item.sidepara}</p>
                    <button className='outline-btn'>
                        <i className='fa fa-phone-alt'></i>
                        Contact Us
                    </button>
                    </div>
                    <div className='box'>
                    <p>{item.sidepara}</p>    
                    </div>
                  
                </div>
              </article>
              </div>
            </section>
    </>
  )
}

export default BlogSingle
