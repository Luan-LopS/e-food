import { ModalContainer, ModalContent, ImgModal, BodyModal} from './styles'
import Button from '../Button'

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


const Modal = ({descricao, foto, id, isVisible, nome, onClick, porcao, preco, children}:Props) =>(
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
                <Button variant='addCarrinho' >{`Adicionar ao  carinho- R$ ${preco}`}</Button>
                
            </BodyModal>
        </ModalContent>
    </ModalContainer>
)

export default Modal