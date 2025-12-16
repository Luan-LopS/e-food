import { useParams } from "react-router-dom"
import Header from "../../Components/Header"
import ContainerMenu from "../../Container/MenuContainer"
import { useRestaurents } from "../../Models/Dados"

const Restaurents = () =>{
    const { id } = useParams()
    const { restaurants } = useRestaurents()
    const restaurente = restaurants.find(r=>r.id=== Number(id))

    return(
        <>
            {restaurente && (
                <Header image={restaurente.capa} name={restaurente.titulo} type={restaurente.tipo}/>)}
            <ContainerMenu />
        </>
    )
}




export default Restaurents