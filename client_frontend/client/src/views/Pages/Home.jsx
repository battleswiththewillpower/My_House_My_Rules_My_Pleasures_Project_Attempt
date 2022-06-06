import React from 'react'
import Banner from '../../components/Banner/Banner'
import Cards from '../../components/Cards/Cards'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import ReusableStyles from '../../components/ReusableStyles/ReusableStyles'

const bgColor = {
  backgroundColor: "#ffb957"
  
}
const Home = () => {
  return (
    <>
    
  <div style={bgColor}>
    <Hero />
    <Cards />
    <ReusableStyles />
    <Banner />
    <Footer />
  </div>
  </>
  )
}

export default Home