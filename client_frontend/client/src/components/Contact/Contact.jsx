import styled from 'styled-components';
import modelPictureone from '../../assets/images/flowers.jpeg'
import jewelPicturetwo from '../../assets/images/jewerly.jpeg'
import modelPicturethree from '../../assets/images/whiteclass.jpeg'
import contact from '../../assets/images/getintouchhh.png'
// import modelPicturefour from '../../assets/images/heart.jpeg'
import React from 'react'

const Contact = () => {
  return (
    <div>
      
        <Contactstyle className='contactpage'>
            <div className='top'>

            <div className='one'>
            <img src={modelPictureone} alt='' />
            </div>

            <div className='two'>
            <img src={jewelPicturetwo} alt='' />
            </div>

            </div>

            <div className='mid'>
            <img src={modelPicturethree} alt='' />

            </div>

            <div className='bot'>

                {/* <div className='four'>
                <img src={modelPicturefour} alt='' />
                </div> */}

                <div className='contact'>
                <img src={contact} alt='' />
                </div>
            </div>
        </Contactstyle>

    </div>
  )
}

const Contactstyle = styled.div`
  .one {
    margin-top: 4rem
  }  

.top {
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
}

.mid {
  display:flex;
  margin-top: 2rem;
  align-content: center;
  justify-content: space-around;
}

.bot {
  margin-top: 2rem;
  margin-left: 7rem;
}


`

export default Contact