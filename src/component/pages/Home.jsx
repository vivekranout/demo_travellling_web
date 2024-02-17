import React from 'react'
import Hero from '../Homesection/Hero'
import HomeAbout from '../Homesection/HomeAbout'
import MostPopular from '../Homesection/popular/MostPopular'
import DestinationHome from '../Homesection/Destina/DestinationHome'
import Download from '../Homesection/Download/Download'
import Work from '../Homesection/Work/Work'
import Gallery from '../Homesection/Gallery/Gallery'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <>
      <Hero/>
      <HomeAbout/>
     <MostPopular/>
      <DestinationHome/>
     <Download/>
     <Work/>
     <Gallery/>
     <Footer/>
    </>
  )
}

export default Home
