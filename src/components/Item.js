import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseItem,decreaseItem } from '../features/cartSlice/cartSlice'

function Item({name,quantity,price,index}) {
    
const dispatch = useDispatch()
return (
    <main className='item'>
        <p className=''>{name}</p>
        <div className="quantity-container">
            <div className="btn-container">
                <button onClick={ ()=>{ dispatch( increaseItem(index) ) }} >increase</button>
                <button onClick={ ()=>{ dispatch( decreaseItem(index) ) }} >decrease</button>
            </div>
            <span>{quantity}</span>
        </div>
        <p>{price}</p>
    </main>
                    // <button onClick={ ()=>{ dispatch( increaseItem(index) ) }} >increase</button>

)
}

export default Item