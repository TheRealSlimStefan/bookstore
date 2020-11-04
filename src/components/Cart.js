import React from 'react';
import { useHistory } from 'react-router-dom';

import CartItem from '../components/CartItem';



import '../css/Cart.css'

const Cart = ({actualUser}) => {
    const history = useHistory();

    const routeChange = (where) => {
        history.push(where);
    }
  
    const handleClick = (where) => {
        routeChange(where);
    }

    console.log(actualUser);

    const cartContent = actualUser.cart.map(book => {
        return <CartItem book={book} key={book.id + Math.floor(Math.random()* 100)}/>   
    });

    return ( 
        <div className="cart">
            <h1>Shopping Cart:</h1>
            {cartContent}
            <div className="cartPanel">
                <button onClick={() => handleClick('main')}>CANCEL</button>
                <button>BUY</button>
            </div>
        </div>
     );
}
 
export default Cart;