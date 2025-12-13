import { Link } from 'react-router-dom'
import { Card, CardHeader, CardImg, P, CardBody } from './styles'
import star from '../../Assets/image/star.png'
import Button from '../Button'
import { FoodItems } from '../../Models/Dados'
import Tag from '../Tag'

export type Props = {
    id: number
    title: string
    description: string
    image: string
    rating: number
    link: string
    type: string
    emphasis: boolean
    menu: FoodItems[]
    home: boolean
}


const Restaurent = ({id, title, image, description, link, rating, home, emphasis, type}: Props) =>{

    return(
        <Card home={home}>
            <CardImg image={image} >
                <Tag typeFood={type} emphasis={emphasis}/>
            </CardImg>
            <CardBody>
                <CardHeader home={true}>
                    <h3>{title} </h3>
                    <span>{rating} <img src={star} alt={star}/></span>
                </CardHeader>
                <P>{description}</P>
                <Link to={`restaurent/${link}-${id}`}>
                    <Button type={true} action='home'/>
                </Link>
            </CardBody>
        </Card>
    )
}

export default Restaurent