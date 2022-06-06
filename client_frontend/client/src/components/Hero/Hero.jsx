import React from 'react'
import styled from 'styled-components';
import herovideo from '../../assets/Photos_for_video/frontPage_video.mp4'
const Hero = () => {
  return (
    //   <h1>hi</h1>
    <Section id='home'>
        <div className='background'>
        
      <video style={{width:"100vw"}} src={herovideo} autoPlay loop muted />

        </div>

    </Section>
  )
}

const Section = styled.section`
    
    
`
export default Hero