import { TagType, TagContainer } from './styles'

type Props ={
    typeFood: string,
    emphasis: boolean
}

const Tag =({emphasis, typeFood}: Props)=>{
    const TypeFood = typeFood[0].toUpperCase() + typeFood.slice(1)
    return (
    <TagContainer>
    {
        emphasis ? (
            <>
                <TagType emphasis={emphasis} >
                {emphasis ? 'Destaque da semana' : ''}
                </TagType>
            </>) : 
            ('')
    }
    
    <TagType emphasis={emphasis} >
        {TypeFood}
    </TagType>
    
    </TagContainer>
)
}

export  default Tag