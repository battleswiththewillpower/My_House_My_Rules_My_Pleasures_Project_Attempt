import React from 'react'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const bgColor = {
  backgroundColor: "#8b72be"
  
}
const Contactus = () => {
  return (
    <div style={bgColor}>
        <Contact />
        <Footer />
    </div>
  )
}

export default Contactus