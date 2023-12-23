import './CartItem.css'
import { CartContext } from '../context/CartContext'
import React from 'react'
import { useContext } from 'react'

const CartItem = ({ name, price, id, quantity }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className='ProdCarrito'>
            <h2 className='NombreP'>{name}</h2>
            <p className='CantidadP'>Cantidad:{quantity}</p>
            <p className='SubtotalP'>Subtotal:{price * quantity}</p>
            <button onClick={() => removeItem(id)}>Eliminar</button>
        </div>
    )
}

export default CartItem



