import React from 'react'
import styled from 'styled-components';
import footlogo from '../../assets/images/navbar-logo2.png'
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    
    <div className='footer'>
      <Section>
        <div className='brandContainer'>
          <ul>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <GrLinkedinOption />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        <a id='logo' href="/"><img src={footlogo} alt="" /></a>
          <p>Add some website details</p>
          
        <div className='contact'>
          <div className='title'>
            <h3>Contact Us</h3>
            <p>222-222-222</p>
            <p>email@email.com</p>

          </div>

        </div>
        </div>


      </Section>
      <LowerFooter className="lowerFooter">
        <h2>
          Copyright &copy; 2022 <span>My House, My Rules, My Pleasures</span>
        </h2>
      </LowerFooter>
    </div>
    
  )
}

const Section = styled.footer`
  margin: 0;
  background: #990000;
  color: #ffd700;
  display: flex;
  padding: 1vw;
  text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: #8b72be;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: #ffb957;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  

  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
      

`
const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: #800000;
  color: white;
  padding: .5rem;
  font-size: 0.625rem;
  h2 {
    span {
      // font-size: 0.625rem;
      color: #8b72be;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`
export default Footer