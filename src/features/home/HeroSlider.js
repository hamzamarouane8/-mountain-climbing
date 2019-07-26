import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import {CarousselContent} from './styles/heroSliderStyle';

//---------------------------------------------

let data = [
  {bgImg: require('../../assets/img/slider-bg-3.jpg'), sliderTitle: 'Build Your Dream With Passion', sliderSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.', btnLink: 'contact-us'},
  {bgImg: require('../../assets/img/slider-bg-2.jpg'), sliderTitle: 'Build Your Dream With Passion', sliderSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.', btnLink: 'contact-us'},
  {bgImg: require('../../assets/img/slider-bg-3.jpg'), sliderTitle: 'Build Your Dream With Passion', sliderSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.', btnLink: 'contact-us'}
];

export default ({}) => {
  const settings ={
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return(
    <CarousselContent>
      <Slider {...settings}>
        {(data || []).map(item=>(
          <SliderItem title={item.sliderTitle} subtitle={item.sliderSubtitle} img={item.bgImg} />
        ))}
      </Slider>
    </CarousselContent>
  )
}

const SliderItem = ({title,subtitle,img}) => (
  <div className="hero-slider__single-item" style={{backgroundImage: `url(${img})`}}>
    <div className="hero-slider__content-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-slider__content">
              <h1 className="hero-slider__title">{title}</h1>
              <p className="hero-slider__text">{subtitle}</p>
              <a className="hero-slider__btn" href="#">Explore Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

