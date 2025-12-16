import styled from "styled-components";

export const CardImg = styled.div<{image: string}>`
    background-image: url(${(props)=>(props.image || '')});
    background-size: cover;
    background-position: center;
    width: 304px;
    height: 167px;
    margin: 8px;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    margin: 8px;
`
