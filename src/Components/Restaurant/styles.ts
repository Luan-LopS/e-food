import styled from "styled-components";

export const Card = styled.div<{home:boolean}>`
    width: ${(props) =>(props.home  ? '472px': '320px')};
    max-height: ${(props) => (props.home ? '398px' : '338px')};
    height: 100%;
    color: ${(props)=>(props.home ? '#E66767': '#FFEBD9')};
    background-color: ${(props)=> (props.home ? '': '#E66767')};

    p{
        margin-bottom: ${(props) => (props.home ? '16px' : '8px')};
    }
`
export const CardImg = styled.div<{image: string}>`
    background-image: url(${(props)=>(props.image || '')});
    background-size: cover;
    width: 472px;
    height: 217px;
    padding: 16px;
    position: relative
`

export const CardBody = styled.div`
    padding: 8px 8px;
    border: 1px solid #E66767;
    border-top: none;
    margin: 0;
`

export const CardHeader = styled.header<{home:boolean}>`
    font-size: ${(props)=>(props.home ? '18px': '14px')} ;
    font-weight: 700;
    margin-bottom: ${(props)=>(props.home ? '16px': '8px')} ;
    display: flex;
    justify-content: space-between;
`

export const P = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: ;
    line-height: 20px;
    letter-spacing: 0;
`
