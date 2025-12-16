import { Btn } from "./styles"

type Props = {
    variant: 'home' | 'default' | 'addCarrinho'
    onClick?: ()=>void
    children?: React.ReactNode
}

const Button  = ({variant= 'default', onClick, children}:Props)=>(
    <Btn type="button" variant={variant} onClick={onClick}>{children}</Btn>
)

export default Button