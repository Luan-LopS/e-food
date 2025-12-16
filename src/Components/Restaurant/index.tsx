import { Link } from 'react-router-dom'
import { Card, CardHeader, P, CardBody } from '../../GlobalStyles'
import { CardImg } from './styles'
import star from '../../Assets/image/star.png'
import Button from '../Button'
import Tag from '../Tag'

type Props = {
    id: number
    title: string
    image: string
    descricao: string
    rating: number
    type: string
    emphasis: boolean,
    home?:boolean
}

const Restaurent = ({id, title, image, descricao, rating, home, emphasis, type}: Props) =>{
    const description = (descricao: string)=>{
        if (descricao.length > 272 ){
            return descricao.slice(0, 250)+'...'
        } 
        return descricao
    }


    return(
        <Card $home>
            <CardImg image={image} >
                <Tag typeFood={type} emphasis={emphasis}/>
            </CardImg>
            <CardBody>
                <CardHeader $home={true}>
                    <h3>{title} </h3>
                    <span>{rating} <img src={star} alt={star}/></span>
                </CardHeader>
                <P>{description(descricao)}</P>
                <Link to={`/restaurant/${id}`}>
                    <Button variant='home'>Saiba Mais</Button>
                </Link>
            </CardBody>
        </Card>
    )
}

export default Restaurent