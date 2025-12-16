import Restaurent from '../../Components/Restaurant'
import { ContainerUl } from '../../GlobalStyles'
import { useRestaurents } from '../../Models/Dados'


const Container = () =>{
    const { restaurants } = useRestaurents() 
    return(
      <ContainerUl home={true}>
          {restaurants.map((item)=>(
            <Restaurent key={item.id} home descricao={item.descricao}  
            emphasis={item.destacado} id={item.id} image={item.capa} title={item.titulo}
            type={item.tipo} rating={item.avaliacao}  />))}
      </ContainerUl>
  )
}

export default Container