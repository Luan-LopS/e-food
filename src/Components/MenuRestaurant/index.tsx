import { Card, CardHeader, P, CardBody } from '../../GlobalStyles'
import { CardImg} from './styles'

interface Props {
    id: number
    nome: string
    descricao: string
    preco: number
    foto: string
    porcao: string
    home?:boolean
    children?: React.ReactNode
    menuDetails: boolean
}

const MenuItem = ({ descricao, ...items }: Props) => {

    const description =(descricao:string)=>{
        if (descricao.length > 170){
            return descricao.slice(0, 170)+'...'
        }
        return descricao
    }

    return(
        <Card $home={false}>
                <CardImg image={items.foto}/>
                <CardBody>
                    <CardHeader $home={false}>
                        <h3>{items.nome}</h3>
                    </CardHeader>
                    <P>{description(descricao)}</P>
                    {items.children}                    
                </CardBody>
            </Card>
    )
}

export default MenuItem