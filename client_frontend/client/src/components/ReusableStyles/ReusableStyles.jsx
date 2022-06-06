import React from 'react'
import modelPictureone from '../../assets/images/yellowdress.jpeg'
import modelPicturetwo from '../../assets/images/floral.jpeg'
import modelPicturethree from '../../assets/images/naturalHair-yellow.jpg'
import modelPicturefour from '../../assets/images/modelWlongbraids.jpeg'
import modelPicturefive from '../../assets/images/naturalCurls.png'
import modelPicturesix from '../../assets/images/Jadore2.jpeg'
import modelPictureseven from '../../assets/images/3d-jourdan.jpg'
import styled from 'styled-components';

const ReusableStyles = () => {
  return (
    <Section>
  <div className='top'>
    <div className='yellow'>
    <img src={modelPictureone} alt='Yellow satin dress with cover' />

    </div>
    <div className='floral'>
    <img src={modelPicturetwo} alt='Model with floral outfit' />

    </div>
  </div>

    <div className='mid'>
    <div className='froYellow'>
    <img src={modelPicturethree} alt='Model with natural hair' />

    </div>

    <div className='braids'>
    <img src={modelPicturefour} alt='Model with long braids like a crown' />

    </div>

     <div className='curls'>
    <img src={modelPicturefive} alt='Model with curls' />

    </div>

    </div>


    <div className='bot'>
    <div className='dior'>
    <img src={modelPicturesix} alt='Dior Fragrance' />

    </div>

    <div className='goldRobot'>
    <img src={modelPictureseven } alt='Model with floral outfit' />

    </div>
    </div>
    </Section>
  )
}
const Section = styled.section`
margin-left: 4rem;

img {
  width: 100%;
}
  
.top, .mid, .bot {
  display: flex;
  flex-direction: row;
}
.top {
  
  justify-content: space-evenly;
}

.floral {
margin-top: 8rem;
margin-right: 1rem;


}
.mid {
  margin-top: 2rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.braids {
  margin-bottom: 9rem;
  // margin-left: 8rem;
}

// .curls {
//   margin-left: 7rem;
// }

.bot {
  margin-top: 2rem;
  margin-left: 2rem;
}

.dior {
  // z-index: -1;
}

.goldRobot {
  margin-top: 16rem;
  position: relative;
  right: 4.5rem;

}

`

export default ReusableStyles