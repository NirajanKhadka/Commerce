import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Item from './Item'
import { calculateTotal, increaseItem,displayState} from '../features/cartSlice/cartSlice'
import { useEffect } from 'react'

const Cart = () => {
    const dispatch = useDispatch()
    const {items,totalItems,totalPrice} = useSelector(store => store.cart)
    // console.log(calculateTotal)

    useEffect(()=>{
        dispatch(calculateTotal())
    },[items])

    return (
        <main>
            <div className="total-items">Total Items = {totalItems}</div>
            <div className="total-price">Total Price = {totalPrice}</div>
            
            <div className="items-container">
                { items.map( (e,index) => {
                    return <Item key={index} {...e} index={index} />
                        }
                    )  
                }
            </div>
            
        </main>
    )
}

export default Cart