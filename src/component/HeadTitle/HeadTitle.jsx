
import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import "./HeadTitle.css"
const HeadTitle = () => {
    const location = useLocation()
  return (
    <>
      <section className='image-heading'>
        <div className='container'>
            <h1>{location.pathname.split("/"[0])}</h1>

            <button>
                <Link to="/">Home</Link>
                <span>{location.pathname.split("/"[1])}</span>
            </button>
        </div>
      </section>
    </>
  )
}

export default HeadTitle