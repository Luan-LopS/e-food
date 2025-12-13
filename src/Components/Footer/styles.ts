import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    height: 298px;
    width: 100%;
    background-color: #FFEBD9;
    padding: 40px 0;

`

export const Redes = styled.ul`
    width: 88px;
    height: 24px;
    display: flex;
    justify-content: space-between;
    margin: 32.5px auto 80px;
`

export const Instagram = styled(Link)<{image: string}>`
    width: 24px;
    height: 24px;
    display: block;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
`

export const Container = styled.div`
    width: '539px';
    text-align: center;
`

export const P = styled.p`
    width: 480px;
    font-size:10px;
    color: #E66767;
    line-height:  100%;
    font-weight: 400;
    letter-spacing: 0%;
    margin: 0 auto;
`