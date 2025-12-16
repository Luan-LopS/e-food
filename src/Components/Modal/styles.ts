import styled from "styled-components";


interface ModalProps{
    isVisible: boolean
}


export const ModalContainer = styled.div<ModalProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    z-index: 1000;
`

export const ModalContent = styled.div`
    background-color: #E66767;
    padding: 32px;
    max-width: 1024px;
    width: 100%;
    max-height: 344px;
    height: 100%;
    display: flex;
    flex-direction: row;
    position: relative;

    > span{
        position: absolute;
        padding: 8px;
        top: 0;
        right: 0;
        cursor: pointer;
        color: #fff;
        font-size: 16px;
    }
`

export const ImgModal = styled.div<{image: string}>`
    background-image: url(${(props)=>(props.image || '')});
    background-size: cover;
    background-position: center;
    max-width: 280px;
    width:  100%;
    height: 280px;
    margin: 0 24px 0  0;
    position: relative
`

export const BodyModal = styled.div`
    width:  100%;
    height: 100%;

    h3{
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 900;
        line-height: 100%;
        margin-bottom: 16px;
    }

    p{
        color: #FFFFFF;
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;

    }
`