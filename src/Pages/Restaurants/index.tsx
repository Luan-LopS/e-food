import { useParams } from "react-router-dom"
import Header from "../../Components/Header"
import ContainerMenu from "../../Container/MenuContainer"
import { restaurents } from "../../Models/Dados"

const Restaurents = () =>{
    const { linkRestaurents } = useParams()
    const idLink = Number(linkRestaurents?.split('-').pop())
    const restaurente = restaurents.find(r=>r.id=== idLink)

    return(
        <>
            {restaurente && (
                <Header image={restaurente.image} name={restaurente.title} type={restaurente.type}/>)}
            <ContainerMenu />
        </>
    )
}




export default Restaurents