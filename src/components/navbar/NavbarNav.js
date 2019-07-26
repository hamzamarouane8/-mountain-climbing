import React from 'react';
import styled from 'styled-components';

export default ({}) => {
  return (
    <NavBarStyled>
      {/*====================  header area ====================*/}
      <div className="header-area header-sticky header-sticky--default">
        <div className="header-area__desktop header-area__desktop--default">
          {/*====================  header top bar ====================*/}
          <div className="header-info-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="header-info-wrapper">
                    {/* logo */}
                    <div className="logo">
                      <a href="#" >
                      <img src="assets/img/logo/logo.svg" className="img-fluid" alt="Logo" />
                      </a>
                    </div>
                    {/* header contact info */}
                    <div className="header-contact-info">
                      <div className="header-info-single-item">
                        <div className="header-info-single-item__icon">
                          <i className="zmdi zmdi-spartphone-android" />
                        </div>
                        <div className="header-info-single-item__content">
                          <h6 className="header-info-single-item__title">Phone</h6>
                          <p className="header-info-single-item__subtitle">98 764 7463</p>
                        </div>
                      </div>
                      <div className="header-info-single-item">
                        <div className="header-info-single-item__icon">
                          <i className="zmdi zmdi-spartphone-home" />
                        </div>
                        <div className="header-info-single-item__content">
                          <h6 className="header-info-single-item__title">Adress</h6>
                          <p className="header-info-single-item__subtitle">Your adress goes here</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====================  End of header top bar ====================*/}
        </div>
      </div>
      {/*====================  End of header area  ====================*/}
    </NavBarStyled>
  )
}

const NavBarStyled = styled.div`
.header-area{
    background-color: #fff;
    &__desktop{
            .header-contact-info{
                display: flex;
                justify-content: flex-end;
            }
    }
}
.header-info-area {
  padding: 35px 0;
}

.header-info-wrapper {
  display: flex;
  .logo {
    width: 280px;
    flex-basis: 280px;
  }
  .header-contact-info {
    width: calc(100% - 280px);
  }
}

.header-info-single-item {
  display: flex;
  justify-content: flex-end;
  &__icon {
  color: #f0542d;
  vorder: 1px solid #f0542d;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      text-align: center;
      margin-right: 15px;
      i {
        line-height: 50px;
        font-size: 26px;
      }
  }
  
  &__title {
      font-size: 18px;
      line-height: 1.5;
      margin-bottom: 0;
      font-weight: 500;
  }
}
`
