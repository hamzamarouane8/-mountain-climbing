import React from 'react';
import {HeroSlider, ServiceGridSlider ,HeroBanner,Overview,Brands} from "../../features/home";
import NavBar from '../../components/navbar';

//------------------------------------------------------------------


export default ({}) => {
  return (
    <>
      {/* Navigation bar */}
      <NavBar/>

      {/* Hero sldier */}
      <HeroSlider />

      {/* Banner */}
      <HeroBanner />

      {/* Service grid slider */}
      <ServiceGridSlider />

      {/* Discount Section */}
      <Overview />

      {/* Brands Section */}
      <Brands />
    </>
  )
}
