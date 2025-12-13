import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
}
` 

export const ContainerUl = styled.main<{home:boolean}>`
    max-width: 1024px;
    width: 100%;
    margin: 80px auto 120px;
    display: grid;
    grid-template-columns: ${(props)=>(props.home ? '1fr 1fr' : '1fr 1fr 1fr')};
    gap: ${(props)=>(props.home ? '42px 80px' : '32px')};
`
