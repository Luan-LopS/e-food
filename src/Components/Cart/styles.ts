import styled from "styled-components";


export const CartContainer  = styled.div`
    display: none;

    &.is-open{
        display: block;
    }
`

export const Overlay  =  styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height:100vh;
    background-color: rgba(0,0,0,0.8);
    z-index: 1;
`

export  const CartContent = styled.aside`
    position: fixed;
    top:0;
    right: 0;
    background-color: #E66767;
    width: 360px;
    height: 100vh;
    padding: 16px 8px;
    z-index: 2;
`
export const CartImg = styled.li`
    display: flex;
    padding: 8px;
    background-color:#FFEBD9;
    margin: 16px 0;
    position: relative;

    img{
        height: 80px;
        width: 80px;
        object-fit: cover;
    }

    h3, p{
        color: #E66767;
        padding: 0 0 0 8px;
    }

    h3{
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
        line-height: 100%;
    }

    p{
        font-size: 14px;
        font-weight:400;
        line-height: 22px;
    }
`

export const CartPrice = styled.div`
    display: flex;
    justify-content: space-between;

    p{
        color: #FFEBD9;
        margin-bottom:  16px;
    }
`

export const Trash = styled.div<{image: string}>`
    background-image: url(${props => props.image});
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
`