import { ModalContainer, ModalContent, ImgModal, BodyModal} from './styles'
import Button from '../Button'
import { open, add } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

interface Props {
    id: number
    nome: string
    descricao: string
    preco: number
    foto: string
    porcao: string
    children?: React.ReactNode
    isVisible: boolean
    onClick?: ()=>void
}

export const formatPrice = (value: number) =>
    value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

const Modal = ({descricao, foto, id, isVisible, nome, onClick, porcao, preco, children}:Props) =>{
    

    const dispath =  useDispatch()
    const CartOpen = ()=>{
        dispath(open())
        dispath(add(
        {id,
        nome,
        descricao,
        preco,
        foto,
        porcao}
        ))
    }

    return(
        <ModalContainer isVisible={isVisible} >
            <ModalContent>
                <span onClick={onClick}>x</span>

                <ImgModal image={foto} />
                <BodyModal>
                    <h3>{nome}</h3>
                    <p>
                        {descricao} <br/><br/>
                        <span>Serve: de {porcao}</span>
                    </p>
                    <Button variant='addCarrinho' onClick={CartOpen}>{`Adicionar ao  carinho- ${formatPrice(preco)}`}</Button>
                    
                </BodyModal>
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal