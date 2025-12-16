import { useEffect, useState } from 'react'

export interface FoodItems {
    id: number
    nome: string
    descricao: string
    preco: number
    foto: string
    porcao: string
}

export interface RestaurentModel {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: FoodItems[]
}

export const useRestaurents =  ()=>{
  const [restaurants, setRestaurant] = useState<RestaurentModel[]>([])

  useEffect(()=>{
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
    .then((res)=>res.json())
    .then((res)=> setRestaurant(res))
  },[])

  return { restaurants }
}
