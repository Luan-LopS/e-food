import Restaurent from '../../Components/Restaurant'
import { ContainerUl } from '../../GlobalStyles'
import { restaurents } from '../../Models/Dados'


const Container = () =>{

    return(
      <ContainerUl home={true}>
          {restaurents.map((item)=>(
            <Restaurent key={item.id} home={true} {...item} / >))}
      </ContainerUl>
  )
}

export default Container