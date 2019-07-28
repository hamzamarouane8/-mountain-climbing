import React from 'react';
import styled from 'styled-components';

//-------------------------------------

const assets={
  img:require('../../assets/img/footer-bg-2.jpg')
}

export default ({})=>(
  <FooterStyle>
    {/* Footer Area Start Here */}
  <footer class="footer-area bg-img footer-white-color">
    <div class="footer-top bg-img pt-82 pb-50" style={{backgroundImage:`url(${assets.img})`}}>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-4 d-md-block d-lg-none">
            <div class="footer-widget mb-40">
              <div class="footer-title mb-55">
                <h4>Language</h4>
              </div>
              <div class="footer-content">
                <ul>
                  <li><a href="#">English</a></li>
                  <li><a href="#">اللغة العربية</a></li>
                  <li><a href="#">Bangla </a></li>
                  <li><a href="#">Hindi </a></li>
                  <li><a href="#">Spanish </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 d-md-block d-lg-none">
            <div class="footer-widget mb-40">
              <div class="footer-title mb-55">
                <h4>Currency</h4>
              </div>
              <div class="footer-content">
                <ul>
                  <li><a href="#">€ Euro</a></li>
                  <li><a href="#">$ US dollar</a></li>
                  <li><a href="#">$ SAR Riyal</a></li>
                  <li><a href="#">$ INR Rupee</a></li>
                  <li><a href="#">$ AED Dirham </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-md-4">
            <div class="footer-widget mb-40">
              <div class="footer-title mb-55">
                <h4>Support</h4>
              </div>
              <div class="footer-content">
                <ul>
                  <li><a href="#">QUeality</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                  <li><a href="login.html">log in</a></li>
                  <li><a href="#">Shipping</a></li>
                  <li><a href="#">Store Detail</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-md-4">
            <div class="footer-widget mb-40">
              <div class="footer-title mb-55">
                <h4>Account</h4>
              </div>
              <div class="footer-content">
                <ul>
                  <li><a href="#">My Account</a></li>
                  <li><a href="account.html">Order History</a></li>
                  <li><a href="wishlist.html">WishList</a></li>
                  <li><a href="cart.html">Cart Detail</a></li>
                  <li><a href="compare.html">Compare</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-md-4">
            <div class="footer-widget mb-40">
              <div class="footer-title mb-55">
                <h4>Services</h4>
              </div>
              <div class="footer-content">
                <ul>
                  <li><a href="#">Free Shipping</a></li>
                  <li><a href="#">Product Delivary</a></li>
                  <li><a href="#">Product Tracking</a></li>
                  <li><a href="#">Online Pyament</a></li>
                  <li><a href="#">Discount</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-md-4">
            <div class="footer-widget">
              <div class="footer-logo mb-43">
                <a href="index.html">
                  <img alt="brand-image" src="img/logo/footer-logo2.png" />
                </a>
              </div>
              <div class="footer-addres">
                <p>7 Sevents Streth, jobinas road Tirmonial Poient. USA</p>
                <div class="footer-phn-email">
                  <a href="#">+14 2266 3336 55</a>
                  <a href="#">+14 2266 3336 66</a>
                </div>
                <div class="footer-phn-email">
                  <a href="#">domain@mail.com</a>
                  <a href="#">company@support.info</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="copyright text-center">
          <p>Copyright ©<a href="#">Climbing</a>. All Right Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
    {/* Footer Area End Here */}

  </FooterStyle>)

const FooterStyle= styled.div`
.footer-content ul > li > a { 
    color: #fff;
}

 .footer-content ul li {
        padding-bottom: 16px;
    }

.footer-content ul { 
  list-style: none; /* Remove list bullets */
}

.footer-title > h4 {
    color: #666666;
    font-size: 24px;
    font-weight: 500;
    position: relative;
    margin-bottom: 40px;
}
.footer-title > h4::before {
    background-color: #ccc;
    bottom: -20px;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    width: 70px;
}
.footer-content ul li {
    padding-bottom: 27px;
}
.footer-content ul li:last-child {
    padding-bottom: 0px;
}
.footer-content ul li a {
    color: #333;
    font-size: 16px;
    font-weight: 500;
}
.footer-content ul li a:hover,
.footer-phn-email > a:hover {
    color: #9db5d9;
}

.footer-white-color .footer-title > h4 {
    color: #eeeeee;
}
.footer-white-color .footer-content ul li a,
.footer-white-color .footer-addres > p,
.footer-white-color .footer-phn-email > a {
    color: #e3e3e3;
}
.footer-white-color .footer-content ul li a:hover,
.footer-white-color .footer-addres > p:hover,
.footer-white-color .footer-phn-email > a:hover {
    color: #aaa;
}

`
