import { TagType, TagContainer } from './styles'

type Props ={
    typeFood: string,
    emphasis: boolean
}

const Tag =({emphasis, typeFood}: Props)=>(
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
        {typeFood}
    </TagType>
    
    </TagContainer>
)

export  default Tag