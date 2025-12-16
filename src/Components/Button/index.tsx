import { Btn } from "./styles"

type Props = {
    action: string
    type: boolean
}

const Button  = ({action, type}:Props)=>(
    <Btn type={type}>{action === 'home' ? 'Saiba mais' : 'Adicionar ao carrinho'}</Btn>
)

export default Button