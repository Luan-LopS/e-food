import { FooterContainer, Container, Redes, Instagram, P } from  './styles'
import imgLogo from '../../Assets/image/logo.png'
import insta from '../../Assets/image/instagram.png'
import face from '../../Assets/image/facebook.png'
import twit from '../../Assets/image/twitter.png'


const Footer = ()=>(
    <FooterContainer>
        <Container>
            <img src={imgLogo} alt="efood" />
            <Redes>
            <li>
                <Instagram to='#' image={insta}/>
            </li>
            <li>
                <Instagram to='#' image={face}/>
            </li>
            <li>
                <Instagram to='#' image={twit}/>
            </li>
            </Redes>
            <P>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </P>
        </Container>
    </FooterContainer>
)

export default Footer