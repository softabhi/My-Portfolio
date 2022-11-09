import React from 'react'
import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'
import HeroImg from '../componets/HeroImg'
import Title from '../componets/Title'
import Middle from '../componets/Middle'
import Text1 from '../componets/Text1'


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Title />
      <Middle />
      <Text1 />
      <Footer />
    </div>

  )
}

export default Home