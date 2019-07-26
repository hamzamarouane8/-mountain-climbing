import styled from "styled-components";

export const CarousselContent = styled.div`
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
`

