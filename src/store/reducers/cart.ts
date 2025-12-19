import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodItems } from "../../Models/Dados";


type  CartState  =  {
    items: FoodItems[]
    isOpen:  boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:  {
        add: (state,  action: PayloadAction<FoodItems>)=>{
            state.items.push(action.payload)
        },
        remove:(state, action: PayloadAction<number>)=>{
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        open:(state) =>{
            state.isOpen = true
        },
        close:(state)=>{
            state.isOpen = false
        } 
    }
})

export const { add, open, close, remove}  = cartSlice.actions
export default cartSlice.reducer