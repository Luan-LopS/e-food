import styled from "styled-components";

export const Btn = styled.button<{variant: 'home' | 'default' | 'addCarrinho'}>`
    padding: ${({variant})=>{if(variant === 'home') return '4px 6px'
                            if(variant === 'addCarrinho')return '4px 6px'
                            return '4px'}};
    background-color:${(props)=>(props.variant === 'home'? '#E66767': '#FFEBD9')};
    color: ${(props)=>(props.variant === 'home' ? '#FFEBD9': '#E66767')};
    width: ${({ variant })=>{
        if(variant === 'home') return ''
        if(variant === 'addCarrinho') return ''
        return '100%'}};
    border: none;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`