import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

export default function PufiCart({ imgUrl, iconUrl, product }) {
  return (
    <main id='cart'className="product">
      <section className="product__img">
        <img className="product__scene" src={imgUrl} alt="product" />
      </section>
      <section className="product__description">
        <img className="product__umbrella" src={iconUrl} alt="icon" />
        <h3>Pufi CART</h3>
        <hr className="product__line" />
        <p>Descripción del producto</p>
        <p>
          <MdArrowForwardIos />
          VER MÁS
        </p>
      </section>
    </main>
  );
}
