import styled from "styled-components";

export  const TagContainer = styled.div`
    position: absolute;
    right: 16px;
`

export const TagType = styled.span<{emphasis: boolean}>`
    background-color: #E66767;
    color: #FFEBD9;
    padding: 4px 6px;
    margin-left: 8px;
    font-size: 12px;
    font-weight: 700;
    line-height: 100%;
`