import { HeaderContainer, Container, Hero, SubHeader, Content, FoodType, Title,BtnCart } from "./styles"
import LogoHero from '../../Assets/image/logo.png'
import { Link, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {open} from '../../store/reducers/cart'
import { RootReducer } from "../../store"

type Props = {
    name: string
    type: string
    image?: string
}

const Header = ({name, type, image}: Props)=>{
    const location = useLocation()
    const home = location.pathname === '/'
    const TypeFood = type? type[0].toUpperCase() + type.slice(1) : ''
    const dispatch = useDispatch()
    const isOpen =  () =>{
        dispatch(open())
    }
    const { items } = useSelector((state: RootReducer)=>state.cart)
    const totalItems = items.length

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
                    <BtnCart onClick={isOpen}> {totalItems} produto(s) no carrinho</BtnCart>
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