import React from 'react';
import {HeroSlider, ServiceGridSlider ,HeroBanner} from "../../features/home";
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
    </>
  )
}
