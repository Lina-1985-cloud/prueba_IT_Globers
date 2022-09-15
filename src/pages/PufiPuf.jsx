import React from "react";
import Collage from "../components/collage/Collage";

import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

// importamos imagenes

import umbrella from "../assets/umbrella.png";
import scene_umbrella from "../assets/scene_umbrella.jpg"
import puf from "../assets/puf.png"
import scene_puff from "../assets/scene_puff.jpg"
import bag from "../assets/bag_shop.png"
import scene_shop from "../assets/scene_shop.png"
import pillow from "../assets/pillow.png"
import scene_pillow from "../assets/pillow_scene.jpg"
import PuffiPuff from "../components/pufipuff/PuffiPuff";
import PufiRain from "../components/pufiRain/PufiRain";
import PufiCart from "../components/pufiCart/PufiCart";
import PufiNap from "../components/pufiNap/PufiNap";
import Newsletter from "../components/newsletter/Newsletter";



export default function PufiPuf() {
  return (
    <div>
      <Navbar />
      <Header/>
      <PufiRain imgUrl={scene_umbrella} iconUrl={umbrella} product = {'RAIN'} />
      <PuffiPuff imgUrl={scene_puff} iconUrl={puf} product = {'PUFF'} /> 
      <PufiCart imgUrl={scene_shop} iconUrl={bag} product = {'PUFF'}  />
      <PufiNap imgUrl={scene_pillow} iconUrl={pillow} product = {'NAP'} />
      <Collage />
      <Newsletter/>
      <Footer/>
    </div>
  );
}
