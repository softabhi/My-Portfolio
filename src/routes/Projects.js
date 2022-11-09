import React from 'react'
import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'
import Heroimg2 from '../componets/Heroimg2'
import PricingCard from '../componets/PricingCard'
import WorkCard from '../componets/WorkCard'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading={""} text={""}/>
      <WorkCard/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Projects