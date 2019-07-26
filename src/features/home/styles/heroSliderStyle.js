import styled from "styled-components";

export const CarousselContent = styled.div`
.hero-slider{

    &__single-item {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center bottom;
        width: 100vw;
    }
    
    &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 600px;
        width: 580px;
        max-width: 100%;
    }
    
    &__title {
        color: #fff;
        font-size: 70px;
        line-height: 1.2;
        margin-bottom: 40px;
        margin-top: -15px;
    }
    
    &__text {
        font-size: 16px;
        color: #fff;
        line-height: 1.8;
        margin-bottom: 50px;
    }
    
    &__btn {
        font-size: 13px;
        line-height: 1;
        padding: 20px 60px;
        color: #fff;
        border: 1px solid #fff;
        align-self: flex-start;
        border-radius: 50px;
        transition: all .3s cubic-bezier(.645,.045,.355,1);
        
        &:hover, &:focus, &:active {
            color: #fff;
            background-color: #f0542d;
            border-color: #f0542d;
        }
    }
}
`

