import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaInstagramSquare } from 'react-icons/fa'

import compraSegura from '../../assets/icono-compra-segura.png'

export default function Footer() {
  return (
    <>
        <section className="container__footer">
            <h1 className='footer__title'>Pufi</h1>
            <section className="footer__nav">
                <a href="#pufiRain">PUFI RAIN</a>
                <a href="#pufiPuf">PUFI PUFF</a>
                <a href="#cart">PUFI CART</a>
                <a href="#pufiNap">PUFI NAP</a>
            </section>
            <section className="footer__contact">
                <a href="/">CONTACTO</a>
                <a href="/">AYUDA</a>
                <a href="/">CÓMO COMPRAR</a>
                <a href="/">TÉRMINOS Y CONDICIONES</a>
            </section>
            <section className="footer__information">
                <p style={{fontSize:'0.8rem'}}>COMPRA 100% SEGURA</p>
                <div className="footer__items">
                    <img style={{width:'40px', height:'45px', marginRight:'10px'}} src={compraSegura} alt="Icono compra segura" />
                    <p style={{fontSize:'0.6rem'}}>COMPRA CON <br /> LA GARANTÍA <br /> DE PUFI</p>
                </div>
            </section>
            <section className="footer__sociaMedia">
                <p>SEGUINOS EN</p>
                <a href='https://www.facebook.com/'>
                    <FaFacebookF style={{color:'#1877f2', marginLeft:'10px', fontSize: '2rem'}}/>
                </a>
                <a href="https://twitter.com/">
                    <BsTwitter style={{color:'#1da1f2', marginLeft:'10px', fontSize: '2rem'}}/>
                </a>
                <a href="https://www.instagram.com/">
                    <FaInstagramSquare style={{color:'#c13584', marginLeft:'10px', fontSize: '2rem'}}/>
                </a>
            </section>
        </section>
        <section className="footer__copyRight">
            <p style={{color:'#343a407b'}}>
                PUFI CopyRight - Todos los derechos reservados
            </p>
        </section>
    </>
  )
}
