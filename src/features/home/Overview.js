import React from 'react';
import styled from 'styled-components';

//-------------------------------

const assets = {
  img: require('../../assets/img/overview.jpg')
}
export default ({}) => {
  return (
    <OverviewArea>
      <div className='overview-area big-img pt-155 pb-135' style={{backgroundImage: `url(${assets.img})`}}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='overview-content text-center'>
                <h3>GET <span>26%</span> OFF</h3>
                <h2>make a trip width<br/> a great discount.</h2>
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OverviewArea>
  )
}

const OverviewArea = styled.div`
.overview-content > h3 {
    font-size: 30px;
}
.overview-content > h3 span {
    font-weight: 500;
}
.overview-content > h2 {
    font-size: 36px;
    font-weight: 500;
    line-height: 50px;
    margin: 14px 0 34px;
}

.overview-content > a {
    border: 1px solid #000000;
    color: #36181c;
    text-decoration: none;
    border-radius: 20px;
    padding: 10px 40px;
    font-size: 16px;
    font-weight: 500;
    &:hover {
        background-color: #000000;
        color: #fff;
    }
}

`
