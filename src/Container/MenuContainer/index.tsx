import { ContainerUl } from '../../GlobalStyles'
import { restaurents } from '../../Models/Dados'
import { useParams } from 'react-router-dom'
import MenuItem from '../../Components/MenuRestaurant'

const ContainerMenu  =()=>{
    const { linkRestaurents } = useParams()
    const idLink = Number(linkRestaurents?.split('-').pop())
    const restaurente = restaurents.find(r=>r.id=== idLink)

    return(
        <ContainerUl home={false}>
            {restaurente?.menu.map((items)=>(
                    <MenuItem key={items.id}  home={false} description={items.description} id={items.id} 
                    image={items.image} title={items.title} price={items.price}/>))}
        </ContainerUl>
    )
}

export default ContainerMenu