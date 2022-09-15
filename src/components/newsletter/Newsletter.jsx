import React from "react";
import Subscribe from "../suscribe/Subscribe";


export default function Newsletter() {
  return (
    <>
      <section id="form" className="container__newsletter">
        <h6 style={{ color: "gray" }}>NEWSLETTER</h6>
        <h2>SUSCRIBETE</h2>
        <p>Y entérate de todas las novedades</p>
        <div className="container__input">
          <Subscribe/>
        </div>
      </section>
    </>
  );
}
