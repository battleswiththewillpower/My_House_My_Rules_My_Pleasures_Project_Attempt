import React from 'react'
import navlogo from '../../assets/images/navbar-logo2.png'
import styled from 'styled-components';
// import {Link} from "react-router-dom"


const Navbar = () => {
    

    return (
        <>
            <Nav>
                <div className='brand'>
                    <a id='logo' href="/"><img src={navlogo} alt='My House, My Rules, My Pleasures' /></a>
                    <div className='toggle'></div>
               </div>
                <ul className='links'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/products">Style Board</a>
                    </li>
                    <li>
                        <a href="/moodboard">Mood Board</a>
                    </li>
                    <li>
                        {/* <Link to="/contact-us"></Link> */}
                        <a href="/contact-us">Contact Us</a>
                    </li>
                    <li>
                        <a href="/sign-up">Sign Up</a>
                    </li>
                    {/* <li>
                         <button>Sign In</button> 
                        <a href="/signin">Sign In</a>
                    </li> */}
                    
                </ul>
                
            </Nav>


        </>
    )
    
}


const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0vw 4vw;
    background-color: #990000;
    .brand {
        // img {
        
        // }
        .toggle {
            display: none;
        }
    }
    .links {
        display: flex;
        list-style-type: none;
        gap: 2rem;
        
        li {
            a {
                
                font-size: 1.125rem;
                text-transform: uppercase;
                text-decoration: none;
                color:#ffd700; 
                letter-spacing: 0.2rem;
                transition: 0.3s ease-in-out;
                &:hover {
                    color: #8b72be;
                }
            }
        
        }
    }

`
export default Navbar