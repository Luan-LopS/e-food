import styled from "styled-components";
import backgroundHero from '../../Assets/image/Vector.png'


export const HeaderContainer = styled.header<{home: boolean}>`
    height: ${(props)=>(props.home? '384px' : '186px')} ;
    background-image: url(${backgroundHero});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 60px 0 40px 0;
    color: #E66767;
    font-weight: 900;
    font-size: 18px;

    a{
        color: #E66767;
    }
`

export const Container = styled.div<{home: boolean}>`
    width: ${(props)=>(props.home ? '539px': '1024px')};
    text-align: center;
    margin: 0 auto;
    display: ${(props)=>(!props.home && 'flex')};
    justify-content: space-between;
    align-items: center;
`

export const Hero = styled.p`
    font-weight: 900;
    font-size: 36px;
    line-height: 100%;
    margin-top: 138.5px;
`

export const SubHeader = styled.div<{image: string}>`
    background-image: url(${(props)=>(props.image)});
    background-size: cover;
    background-position: center;
    height: 280px;
    width: 100%;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.5);
    }
`

export const Content = styled.div`
        width: 1024px;
        height: 100%; 
        margin: 0 auto;
        position: relative;
        z-index: 1;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 25px 0 32px 0;
        font-size: 32px;
`

export const FoodType = styled.p`
    font-weight: 100;
`

export const Title = styled.h3`
    font-weight: 900;
`
