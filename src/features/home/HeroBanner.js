import React from 'react';
import styled from 'styled-components';

//----------------------------------------------


const data =[
  {img:require('../../assets/img/banner/hop-banner-2.jpg'),text:'Exercitation Ullamco Laboris'},
  {img:require('../../assets/img/banner/hop-banner-3.jpg'),text:'Research Direct Route Gloves'},
  {img:require('../../assets/img/banner/hop-banner-4.jpg'),text:'Ice Snow Grips Shoe'},

]
export default ({}) => {
  return (
    <BannerStyle className='banner-area'>
      <div className='container'>
        <div className='row'>
          {(data || []).map((item,index)=>(
            <div key={index} className='col-lg-4'>
              <div className="hop-single-banner mb-30">
                <a href="#"><img alt="" src={item.img} /></a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </BannerStyle>
  )
}

const BannerStyle = styled.div`
margin-top: 40px;
.hop-single-banner {
    overflow: hidden;
}
.hop-single-banner img {
    transition: all 1.4s ease 0s;
    width: 100%;
}
.hop-single-banner:hover img {
    transform: scale(1.1);
}
  
`
