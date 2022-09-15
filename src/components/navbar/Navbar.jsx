import React from 'react'
import { FiUmbrella,FiShoppingBag } from "react-icons/fi";
import { MdOutlineHotel }from "react-icons/md"
import { IoBedOutline }from "react-icons/io5"


export default function Navbar() {
  return (
    <>
        <nav className='navbar_box fixed-top' style={{padding:'30px 30px 10px 30px'}}>
          <a href='/' style={{textDecoration:'none'}} className='navbar__title'>Pufi</a>
          <div className="navbar__containerLinks">
            <span className='navbar__pufiRain' ><FiUmbrella className='icon' /><a href='#pufiRain' className='navbar__links' style={{color:'#010101',fontWeight:'700'}}>PUFFI RAIN</a></span>
            <span className='navbar__pufiPuf '><IoBedOutline className='icon'/><a href='#pufiPuf' className='navbar__links' style={{color:'#010101',fontWeight:'700,'}}>PUFI PUFF</a></span>
            <span className='navbar__cart'><FiShoppingBag className='icon'/><a href='#cart' className='navbar__links' style={{color:'#010101',fontWeight:'700'}}>PUFI CART</a></span>
            <span className='navbar__pufiNap'><MdOutlineHotel className='icon'/><a href='#pufiNap' className='navbar__links' style={{color:'#010101',fontWeight:'700'}}>PUFI NAP</a></span>
          </div>
          <section className="navbar__session">
            <select className='navbar__select' name="miCuenta" id="cuenta">
              <option value="myAccount">MI CUENTA</option>
              <option value="myAccount">MI CUENTA</option>
              <option value="myAccount">MI CUENTA</option>
            </select>
            <a className='navbar__myCart' href = '#index'style={{color:'#010101',fontWeight:'300'}}>MI COMPRA</a>
          </section>
        </nav>
    </>
  )
}
