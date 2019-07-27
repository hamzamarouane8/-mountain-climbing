import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {CarousselContent} from "./styles/serviceGridSlider";
import {withRouter} from 'react-router-dom';


//--------------------------------------------------------

let data = [
  {
    img: require('../../assets/img/services/p11.jpg'),
    productTitle: 'Dorji bari East Long Style',
    productPrice: '$199.99',
    productUrl: 'dresses'
  },
  {
    img: require('../../assets/img/services/p5.jpg'),
    productTitle: 'Dorji bari East Long Style',
    productPrice: '$199.99',
    productUrl: 'dresses'
  },
  {
    img: require('../../assets/img/services/p6.jpg'),
    productTitle: 'Dorji bari East Long Style',
    productPrice: '$199.99',
    serviceUrl: 'service-details-left-sidebar'
  },
  {
    img: require('../../assets/img/services/p9.jpg'),
    productTitle: 'Dorji bari East Long Style',
    productPrice: '$199.99',
    serviceUrl: 'service-details-left-sidebar'
  },
  {
    img: require('../../assets/img/services/p10.jpg'),
    productTitle: 'Dorji bari East Long Style',
    productPrice: '$199.99',
    serviceUrl: 'service-details-left-sidebar'
  },
];

export default withRouter(({history,match}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    centerMode: true,

  }

  function handleClick(link){
    history.push(`${match.url}${link}`);
  }

  return (
    <CarousselContent>
      {/*====================  service grid slider area ====================*/}
      <div className="service-grid-slider-area pt-50 pb-90">
        <div className="service-grid-slider-area__content">
        <h1>Featured Products</h1>
        <p>Voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        </div>
            <div className="service-slider">
              <Slider {...settings}>
                {(data || []).map(item => (
                  <SliderItem onClick={()=>handleClick(item.serviceUrl)} item={item}/>
                ))}
              </Slider>
            </div>

      </div>
      {/*====================  End of service grid slider area  ====================*/}
    </CarousselContent>
  )
})

const SliderItem = ({item,onClick}) => (
  <div className="single-aboss-product" >
    <div className="pro-grid-item__image" >
      <div className="pro-grid-item__image-wrapper">
        <a href={null}>
          <img src={item.img} className="img-fluid" alt=""/>
        </a>
      </div>
    </div>
    <div className="pro-grid-item__content">
      <h3 className="pro-grid-item__title" onClick={onClick}>
        <a href="#">{item.productTitle}</a>
      </h3>
      <div className='pro-price-cart'>
        <div className='pro-home-price'>
          <span>{item.productPrice}</span>
        </div>
        <div className='pro-cart'>
          <a href='#'><i className='icon-cart'></i> </a>
          <a href='#'><i className='icon-like'></i> </a>
        </div>
      </div>
    </div>
  </div>
)
