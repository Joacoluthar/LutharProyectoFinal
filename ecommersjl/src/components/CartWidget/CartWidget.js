import './CartWidget.css';
import cart from './assets/Online-Shopping-Cart-Logo-_1_.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const totalQuantity = useContext(CartContext);

  return (
    <Link to='/cart' className='CardWidget' style={{ display: totalQuantity.totalQuantity > 0 }}>
      <img className='CartImg' src={cart} alt="cart-widget" />
      {totalQuantity.totalQuantity > 0 && <span>{totalQuantity.totalQuantity}</span>}

    </Link>
  );
};

export default CartWidget;