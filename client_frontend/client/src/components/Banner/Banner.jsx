import React from 'react'
import modelBanner from '../../assets/images/BannerW:Model.png'
import styled from 'styled-components';

const Banner = () => {
  return (
    <Section>
    <div className='background'>
       <img src={modelBanner} alt='Jordan Dunn modeling' />
    </div>
    <div className='content'>
    <button>Werk that look!</button>
    </div>
    </Section>
  )
}

const Section = styled.section`
height: 90vh;
width: 100vw;
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  // filter: brightness(60%);
}
.content {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: flex-start;
  
  button {
    margin-left: 8rem;
    font-family: cursive;
    padding: 0.6rem 3rem;
    letter-spacing: 0.2rem;
    border-radius: 2rem;
    font-size: 1rem;
    border: none;
    color: #ffd700;
    background-color: #8b72be;
    transition: 0.3s ease-in-out;
    &:hover {
      background: linear-gradient(to right, #e85d04, #ffb957);
  }
`
export default Banner