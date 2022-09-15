import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";

export default function PuffiPuff({product, imgUrl, iconUrl}) {
  return (
    <main id='pufiPuf' className="product">
      <section className='product__description'>
        <img className='product__umbrella' src={iconUrl} alt="icon" />
        <h3>Pufi PUFF</h3>
        <hr className='product__line' />
        <p>Descripción del producto</p>
        <p><MdArrowForwardIos/>VER MÁS</p>
      </section>
      <section className='product__img' >
        <img className='product__scene' src={imgUrl} alt="product" />
      </section>
    </main>
  )
}
