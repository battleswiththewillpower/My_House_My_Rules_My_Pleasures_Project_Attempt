import React, { useState, useEffect } from 'react'
import diamond from '../../assets/images/diamond.png'
// import topdiamondtwo from '../../assets/images/diamond.png'
// import topdiamondthree from '../../assets/images/diamond.png'
// import topdiamondfour from '../../assets/images/diamond.png'
// import topdiamondfive from '../../assets/images/diamond.png'
// import topdiamondsix from '../../assets/images/diamond.png'
import styled from 'styled-components';
import axios from 'axios'


const Cards = () => {
  const [products, setProducts] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products`)
      .then(reponse => {
        console.log(reponse.data)
        setProducts(reponse.data)
        setLoaded(true)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <Section id='diamonds'>
      {loaded && (
        <>
          
            <h1 className='title'>STYLE PICKS: </h1>
          

          <div className='top-col'>
            <div className='one'>
              <img className='lvmules' src={products[0].imgUrlOne} alt="" srcset="" />
              <img src={diamond} alt='' />
              <h2> {products[0].title} </h2>
              <p>{products[0].description}</p>
              <button>Pick</button>
            </div>

            <div className='two'>
              <img className='lvmules' src={products[1].imgUrlOne} alt="" />
              <img src={diamond} alt='' />
              <h2>{products[1].title}</h2>
              <p>{products[1].description}</p>
              <button>Pick</button>
            </div>

            <div className='three'>
            <img className='lvmules' src={products[2].imgUrlOne} alt="" />
              <img src={diamond} alt='' />
              <h2>{products[2].title}</h2>
              <p>{products[2].description}</p>
              <button>Pick</button>
            </div>

          </div>


          <div className='mid-col'>
            <div className='four'>
              <img className='lvmules' src={products[3].imgUrlOne} alt="" />
              <img src={diamond} alt='' />
              <h2>{products[3].title}</h2>
              <p>{products[3].description}</p>
              <button>Pick</button>
            </div>

            <div className='five'>
            <img className='yslskirt' src={products[4].imgUrlOne} alt="" />
              <img src={diamond} alt='' />
              <h2>{products[4].title}</h2>
              <p>{products[4].description}</p>
              <button >Pick</button>
            </div>

          </div>

          <div className='bot-col'>
            <div className='six'>
            <img className='lvmules' src={products[5].imgUrlOne} alt="" />
              <img src={diamond} alt='' />
              <h2>{products[5].title}</h2>
              <p>{products[5].description}</p>
              <button>Pick</button>
            </div>
          </div>
        </>
      )}
    </Section>
  )

}


const Section = styled.section`
 
  margin-left: 4rem;

  .title {
    display: flex;
     align-items: center;
     justify-content: space-evenly;
     margin-bottom: 20px;
     font-size: 1.5rem;
     text-decoration-line: underline;
  }

  .lvmules {
    z-index: 1;
    position: absolute;
    width: 14%;
    margin-top:.5rem;
  }

  .yslskirt {
    // (top, right, bottom, left)
    clip: rect(120px,350px,350px,-0px);
    margin-top: -7rem;
    z-index: 1;
    position: absolute;
    width: 14%;

  }
 
   .top-col {
     display: flex;
     align-items: center;
     justify-content: space-evenly;

   }

   .one,.two, .three, .four, .five, .six {
     display: flex;
     flex-direction: column;
     align-items: center;
   }

   .bot-col, .mid-col {
    margin-top: 6rem;
    display: flex;
     align-items: center;
     justify-content: space-evenly;
   }

   img:hover {
    transform: scale(1.1);
    animation-name: img;
    animation-duration: 2s;
  }

   h2 {
    margin-top: .5rem;
    text-align: center;
    line-height: 2rem;
    text-decoration-line: underline;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    
   }
   
   p {
   
    text-align: center;
    line-height: 2rem;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
  }

  button {
    font-family: cursive;
    padding: 0.6rem 3rem;
    letter-spacing: 0.2rem;
    border-radius: 2rem;
    font-size: 1rem;
    border: none;
    color: #ffd700;
    background-color: #990000;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #8b72be;
    }

    @media only screen and (min-width: 1200px) {
      . {
        width: 84%;
      }
    }
    
    @media only screen and (min-width: 1024px) {
      .top-col, .mid-col, .bot-col {
        display: flex;
      }
    }
    
    @media only screen and (max-width: 1024px) {
      .top-col, .mid-col, .bot-col  {
        margin-bottom: 2rem;
      }
    }
    
`

export default Cards