import { createSlice } from "@reduxjs/toolkit";
import itemList from '../../utils/itemsList'
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const initialState = {
    items:[...itemList],
    totalPrice:0,
    totalItems:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        increaseItem:( state, {payload:index}) => {
            state.items[index].quantity++
        },
        decreaseItem:( state, {payload:index} ) => {
            if (state.items[index].quantity!=0) {state.items[index].quantity--}
        },
        calculateTotal:(state) => {
            let totalAmount = 0
            let totalQuantity = 0
            state.items.map((e) => {
                totalAmount += e.price*e.quantity
                totalQuantity += e.quantity
            })
            return {...state,totalPrice:totalAmount,totalItems:totalQuantity}
        }
    }
})

export const {increaseItem,decreaseItem,calculateTotal} = cartSlice.actions
export default cartSlice.reducer