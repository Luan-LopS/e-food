import { ContainerUl } from '../../GlobalStyles'
import { useParams } from 'react-router-dom'
import MenuItem from '../../Components/MenuRestaurant'
import { useRestaurents } from '../../Models/Dados'
import Button  from '../../Components/Button/'
import { useState } from 'react'
import Modal from '../../Components/Modal'

const ContainerMenu  =()=>{
    const { id } = useParams()
    const { restaurants } = useRestaurents()
    const restaurente = restaurants.find(r=>r.id === Number(id))
    const [modal, setModal] = useState<number | null>(null)
    const cardapio = restaurente?.cardapio.find(r=>r.id === modal)

    return(
        <ContainerUl home={false}>
            {restaurente?.cardapio.map((items)=>(
                    <MenuItem key={items.id}  home={false} descricao={items.descricao} id={items.id} 
                    foto={items.foto} nome={items.nome} preco={items.preco} porcao={items.porcao} menuDetails={false}>
                        <Button variant='default' onClick={()=>setModal(items.id)}>Mais detalhes</Button>
                    </MenuItem>))}
                    {modal !==  null && cardapio &&(<Modal isVisible={true} onClick={modal !== null ? () => setModal(null): undefined}
                    descricao={cardapio.descricao} foto={cardapio.foto} id={cardapio.id} nome={cardapio.nome}  porcao={cardapio.porcao}
                    preco={cardapio.preco}>
                        <Button variant='default' onClick={()=>setModal(cardapio.id)}></Button>
                    </Modal>)}
        </ContainerUl>
    )
}

export default ContainerMenu