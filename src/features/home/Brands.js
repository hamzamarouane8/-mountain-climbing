import React from 'react';
import styled from 'styled-components';

//-----------------------------------------
const listBrands = [
  {img: require('../../assets/img/brands/brand-1.png')},
  {img: require('../../assets/img/brands/brand-2.png')},
  {img: require('../../assets/img/brands/brand-3.png')},
  {img: require('../../assets/img/brands/brand-4.png')},
  {img: require('../../assets/img/brands/brand-5.png')},
]
export default ({}) => {
  return(<BrandStyle className="brands-area pt-80 pb-87">
    {(listBrands || []).map((item,index)=>(
      <div className='brands-area__content' key={index}><img src={item.img} alt='' /></div>
    ))}
  </BrandStyle>)
}

const BrandStyle = styled.div`
display: flex;
align-items:center;
justify-content: space-around;
.brands-area__content {
    margin-left: 20px;
}
`
