import { Card, CardHeader, P, CardBody } from '../Restaurant/styles'
import { CardImg } from './styles'
import { Link } from 'react-router-dom'
import Button from '../Button'

interface Props {
    id: number
    title: string
    description: string
    price: number
    image: string
    home: boolean
}


const MenuItem = ({ ...items }: Props) => (
    <Card home={false}>
        <CardImg image={items.image}/>
        <CardBody>
            <CardHeader home={false}>
                <h3>{items.title}</h3>
            </CardHeader>
            <P>{items.description}</P>
            <Link to={`restaurent/carrinho`}>
                    <Button type={false} action='menu'/>
            </Link>
        </CardBody>
    
    </Card>
)

export default MenuItem