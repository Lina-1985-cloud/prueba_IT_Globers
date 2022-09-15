import React from 'react'
import Slider from '../slider/Slide'

export default function Header() {
  return (
    <div className='container__header'>
      <Slider />
      <p className='header__text' style={{position:'absolute', textAlign:'center'}}>ESTÁR CÓMODO <br />
        NUNCA FUE TAN FÁCIL
      </p>
      <button className='header__button' style={{position:'absolute', textAlign:'center'}}>
        SHOP
      </button>
    </div>
  )
}
