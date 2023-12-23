import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(totalPrice());
    }, [totalPrice]);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id}{...p} />)}
            <h3 className='Total'>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='Option'>Vaciar Carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart