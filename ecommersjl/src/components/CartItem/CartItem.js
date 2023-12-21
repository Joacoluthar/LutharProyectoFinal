import './CartItem.css'
import { CartContext } from '../../context/CartContext'
import React from 'react'
import { useContext } from 'react'

const CartItem = ({name,price,id,quantity}) => {

    const { removeItem} = useContext(CartContext)

    return (
        <div>
            <h2>{name}</h2>
            <p>Cantidad:{quantity}</p>
            <p>Subtotal:{price*quantity}</p>
            <button onClick={()=> removeItem(id)}>Eliminar</button>
        </div>
    )
}

export default CartItem



