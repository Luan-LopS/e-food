import { HeaderContainer, Container, Hero, SubHeader, Content, FoodType, Title } from "./styles"
import LogoHero from '../../Assets/image/logo.png'
import { Link, useLocation } from "react-router-dom"

type Props = {
    name: string
    type: string
    image?: string
}

const Header = ({name, type, image}: Props)=>{
    const location = useLocation()
    const home = location.pathname === '/'
    const TypeFood = type? type[0].toUpperCase() + type.slice(1) : ''

    return(
    <>
        <HeaderContainer home={home}>
            <Container home={home}>   
                {home ? 
                <>
                    <img src={LogoHero} alt="" />
                    <Hero>Viva experiências gastronômicas no conforto da sua casa</Hero>
                </>: 
                <>
                    <Link to='/'>Restaurantes</Link>
                    <img src={LogoHero} alt=""/>
                    <p>0 produto(s) no carrinho</p>
                </> }
            </Container>
        </HeaderContainer>
        {!home &&  image &&
            <SubHeader image={image} >
                <Content>
                    <FoodType>{TypeFood}</FoodType>
                    <Title>{name}</Title>
                </Content>
                
            </SubHeader>
        }
    </>
    
    )
}

export default Header