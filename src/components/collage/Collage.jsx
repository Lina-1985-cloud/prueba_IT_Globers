import React from 'react'
import collage from '../../assets/BeFunky-collage.png'

export default function Collage() {
  return (
    <section id='collage' className='container__collage'>
        <h6 style={{color:'gray'}}>INSTAGRAM</h6>
        <h1>#ESPUFI</h1>
        <img className='collage__image' src={collage} alt="collage" />
    </section>
  )
}
