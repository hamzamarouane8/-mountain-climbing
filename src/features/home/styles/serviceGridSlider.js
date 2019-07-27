import styled from "styled-components";

export const CarousselContent = styled.div`
.service-grid-slider-area {
    width: 90%;
    margin-left: auto;
        margin-right: auto;
    margin-top: 80px!important;

    &__content {
        text-align:center;
        margin-bottom:40px;
    }
}
.section-title-area {
    margin-top: 40px;
    margin-bottom: 20px;
    h2 {
        font-size: 30px;
        font-weight: 700;
    }
    
}
.service-grid-item {
    cursor :pointer;
    margin: 10px 20px;
    &__image {
        position: relative;
        margin-bottom: 60px;
        
        a {
            display: block;
            img {
                width: 100%;
                transition: all .3s cubic-bezier(.645,.045,.355,1);
                transition-duration: 0.6s;
            }
        }
    }
    
    &__image-wrapper {
        overflow: hidden;
    }
    
    &__content {
        line-height: 1;
        .title {
            a {
                text-decoration: none;
                font-size: 22px;
                color: #393939;
                font-weight: 700;
                transition: all .3s cubic-bezier(.645,.045,.355,1);
                &:hover {
                    color: #f0542d;
                }
            }
        }
        
        .subtitle {
            font-size: 16px;
            line-height: 1.8;
            margin-bottom: 15px;
            color: #5a5a5a;
        }
        
        .see-more-link {
            color: #393939;
            font-size: 12px;
            font-weight: 700;
            text-decoration: none;
            text-transform : uppercase;
  letter-spacing: 0px;
        }
    }
    
    &:hover {
        .service-grid-item__image {
            img {
                transform: scale(1.1);
            }
        }
        .service-grid-item__content{
            .see-more-link{
                color: #f0542d;
            }
        }
    }
}
${'/* Item of slider */'}
.single-aboss-product {
    border: 1px solid #efefef;
    margin-left: 10px;
}

.pro-grid-item__content {
    font-size: 16px;
    padding: 20px 30px;
    h3 {
        color: #23252a;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 13px;
    }
    h3 a {
        color: #23252a;
    }
    .pro-home-price {
        font-size: 19px;
        font-weight: 600;
        color: #666666;
    }
}
`

