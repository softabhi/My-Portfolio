import React from 'react'
import Footer from '../componets/Footer'
import HeroImg from '../componets/HeroImg'
import Middle from '../componets/Middle'
import Navbar from '../componets/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Middle/>
      <Footer/>
    </div>
 
  )
}

export default Home