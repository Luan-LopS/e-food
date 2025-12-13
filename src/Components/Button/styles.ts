import styled from "styled-components";

export const Btn = styled.button<{type: boolean}>`
    padding: ${(props)=>(props.type ? '4px 6px': '4px')};
    background-color:${(props)=>(props.type ? '#E66767': '#FFEBD9')};
    color: ${(props)=>(props.type ? '#FFEBD9': '#E66767')};
    width: ${(props)=>(props.type ? '': '100%')};
    border: none;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`