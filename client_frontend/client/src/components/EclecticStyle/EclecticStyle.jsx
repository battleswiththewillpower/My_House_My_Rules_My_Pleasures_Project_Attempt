import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import './EclecticStyle.css'

import banpicone from '../../assets/images/bannerpicone.jpeg'
import banpictwo from '../../assets/images/bannerpictwo.jpeg'
import banpicthree from '../../assets/images/bannerpicthree.jpeg'
import banpicfour from '../../assets/images/bannerpicfour.jpeg'
import banpicfive from '../../assets/images/bannerpicfive.jpeg'
import banpicsix from '../../assets/images/bannerpicsix.jpeg'

import diamondone from '../../assets/images/gold.png'
import diamondtwo from '../../assets/images/gold.png'
import diamondthree from '../../assets/images/gold.png'
import diamondfour from '../../assets/images/gold.png'
import diamondfive from '../../assets/images/gold.png'
import diamondsix from '../../assets/images/gold.png'

import daylook from '../../assets/images/daylook.png'
import nightlook from '../../assets/images/nightLook.png'
import guccishades from '../../assets/images/guccishades.png'

import daylooktwo from '../../assets/images/dayLooksnake.png'
import nightlooktwo from '../../assets/images/nightLooksnke.png'
import snakenecklace from '../../assets/images/necklace.png'

import daylookthree from '../../assets/images/daybookdress.png'
import nightlookthree from '../../assets/images/nightlookdress.png'
import pinkguccidress from '../../assets/images/gucciDress.PNG'



const EclecticStyle = () => {
  const [productInfo, setProductInfo] = useState()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products`)
      .then(reponse => {
        console.log(reponse.data)
        setProductInfo(reponse.data)
        setLoaded(true)
      })
      .catch(err => console.log(err))
  }, [])

  return (
 

    <div>

      <Products className='bannerstyle'>


        <div className='banner'>
          <img src={banpicone} alt="" />
          <img src={banpictwo} alt="" />
          <img src={banpicthree} alt="" />
          <img src={banpicfour} alt="" />
          <img src={banpicfive} alt="" />
          <img src={banpicsix} alt="" />
          

        </div>
      </Products>
        
      <Products className='productstyle'>

      {loaded && (
        <>
    
      
      <div className='one'>

        <div className='diamondOne'>
        <img className='lvmules' src={productInfo[1].imgUrlThree} alt="" />
        <img src={diamondone} alt="" />
        </div>

        <div className='box-one'>
        <img className='dayone' src={daylook} alt="" />
        <img className='nightone' src={nightlook} alt="" />
        </div>

         
                <img className='guccishades' src={guccishades} alt="" />
                
             

      </div>

         

 
    <div className='two'>

      <div className='box-two'>
        <img src={daylooktwo} alt="" />
        <img src={nightlooktwo} alt="" />
    
      </div>

      <div className='diamondtwo'>
      <img className='lvmules' src={productInfo[5].imgUrlTwo} alt="" />
      <img src={diamondtwo} alt="" />

      <img className='necklace' src={snakenecklace} alt="" />
      </div>

    </div>


    <div className='three'>
      <div className='diamondthree'>
      <img className='lvmules' src={productInfo[2].imgUrlTwo} alt="" />
      <img src={diamondthree} alt="" />
      </div>

      <div className='box-three'>
        <img src={daylookthree} alt="" />
        <img src={nightlookthree} alt="" />

      </div>
 <img className='guccidress' src={pinkguccidress} alt="" />
      
    </div>


    <div className='four'>
      <div className='diamondfour'>
    <img className='lvmules' src={productInfo[0].imgUrlThree} alt="" />
      <img src={diamondfour} alt="" />
      </div>

      {/* <div className='box-four'>
        <img src={daylookthree} alt="" />
        <img src={nightlookthree} alt="" />

      </div> */}

    </div>


    <div className='five'>
      <div className='diamondfive'>
      <img className='yslskirt' src={productInfo[4].imgUrlOne} alt="" />
      <img src={diamondfive} alt="" />
      </div>

      <div>

      </div>

    </div>


    <div className='six'>
      <div className='diamondsix'>
      <img className='lvmules' src={productInfo[3].imgUrlTwo} alt="" />
      <img src={diamondsix} alt="" />
      </div>

      <div>

      </div>
    </div>

    </>
      )}

    </Products>
    
    </div>
  )
}

const Products = styled.div`
justify-content: space-evenly;
// margin-top: 1rem;
// background-color: #50c878;
// .dress, .three {
//    display: flex;
//    flex-direction: column;
// }
.lvmules {
  z-index: 1;
  position: absolute;
  width: 20%;
  margin-left:8rem;
  margin-top:7rem;
}

.yslskirt {
  z-index: 1;
  position: absolute;
  width: 20%;
  clip: rect(120px,340px,500px,-0px);
  margin-left: 8rem;
}

.banner {
  display:flex;
}

.banner img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}


 .one, .three {
   display: flex;
   align-items: center;
  //  flex-direction: row;
  
 }

 .guccishades {
   margin-top: 40rem;
   margin-right: 30rem;

 }

 .box-one {
   position: relative;
   width: 100vw;
   height: 100vh;
   transform-style: preserve-3d;
  //  margin-top: 5rem;
  //  perspective: 1000px;
 }

 .box-one img {
   position: absolute;
   backface-visibility: hidden;
   transition: 1s;
  //  margin-top: 4rem;
 }

 .box-one img:nth-child(2) {
   transform: rotateY(180deg)
 }

 .box-one:hover img:nth-child(2) {
   transform: rotateY(0deg);
 }
 
 .box-one:hover img:nth-child(1) {
   transform: rotateY(-180deg);
 }

//  .necklace {
//    margin-right: 15rem;
//  }

 .box-two {
  position: relative;
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
 //  perspective: 1000px;
}

.box-two img {
  position: absolute;
  backface-visibility: hidden;
  transition: 1s;
}

.box-two img:nth-child(2) {
  transform: rotateY(180deg)
}

.box-two:hover img:nth-child(2) {
  transform: rotateY(0deg);
}

.box-two:hover img:nth-child(1) {
  transform: rotateY(-180deg);
}

// .three {
//   background-color: #8b72be;
// }

.box-three {
  position: relative;
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
 //  perspective: 1000px;
}

.box-three img {
  position: absolute;
  backface-visibility: hidden;
  transition: 1s;
}

.box-three img:nth-child(2) {
  transform: rotateY(180deg)
}

.box-three:hover img:nth-child(2) {
  transform: rotateY(0deg);
}

.box-three:hover img:nth-child(1) {
  transform: rotateY(-180deg);
}

 .guccidress {
  margin-top: 25rem;
  margin-right:38rem;
 }


.two, .four, .six {
  display: flex;
  justify-content: flex-end;

}
`
export default EclecticStyle