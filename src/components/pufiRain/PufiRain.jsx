import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";

export default function PufiRain( {imgUrl, iconUrl, product}) {
  return (
    <main id='pufiRain' className="product">
      <section className='product__img' >
        <img className='product__scene' src={imgUrl} alt="product" />
        <button className='product__button product_button--shop_none'>SHOP</button>
      </section>
      <section className='product__description'>
        <img className='product__umbrella' src={iconUrl} alt="icon" />
        <h3>Pufi {product}</h3>
        <hr className='product__line' />
        <p>Descripción del producto</p>
        <p><MdArrowForwardIos/>VER MÁS</p>
      </section>
    </main>
  )
}
