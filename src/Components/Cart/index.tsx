import Button from "../Button"
import { Overlay, CartContainer, CartPrice, CartImg, CartContent, Trash } from './styles'
import trash from '../../Assets/image/lixeira-de-reciclagem.png'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import {close, remove} from '../../store/reducers/cart'
import {formatPrice} from '../Modal/index'

const Cart  = ()=>{
    const { isOpen, items } = useSelector((state: RootReducer)=>state.cart)
    const dispatch = useDispatch()
    const isClose =  () =>{
        dispatch(close())
    }

    const removeitems = (id:  number)  =>{
        dispatch(remove(id))
    }
    const getTotal = (items: { preco: number}[])=>{
        return items.reduce((total, item)=> total + item.preco, 0)
    }

    return(
        <CartContainer className={isOpen ? 'is-open': ''}>
            <Overlay onClick={isClose}/>
            <CartContent>
                <ul>
                    {items.map((item)=> (
                    <CartImg key={item.id}>
                        <img src={item.foto} alt="" />
                        <div>
                            <h3>{item.nome}</h3>
                            <p>{formatPrice(item.preco)}</p>
                        </div>
                            <Trash image={trash}  onClick={() => removeitems(item.id)}/>
                    </CartImg>
                    ))}
                </ul>
                <CartPrice>
                    <p>Valor total</p>
                    <p>{formatPrice(getTotal(items))}</p>
                </CartPrice>
                <Button variant="default">Continuar com  entrega</Button>
            </CartContent>
        </CartContainer>
    )
}

export default Cart