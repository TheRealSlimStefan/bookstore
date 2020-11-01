import React from 'react';

import noImg from '../img/noImg.png'

import '../css/Cart.css'

const Cart = ({actualUser}) => {
    const cartContent = actualUser.cart.map(book => (
        <div className="cartItem">
            <img src={book.volumeInfo.hasOwnProperty('imageLinks') ? book.volumeInfo.imageLinks.thumbnail : noImg} alt={book.volumeInfo.description}/>
            <div className="description">
                <h1>{book.volumeInfo.title}</h1>
                <h2>{book.volumeInfo.authors}</h2>
                <p>Cena: {book.saleInfo.saleability === "FOR_SALE" &&  book.saleInfo.listPrice.amount !== 0 ? book.saleInfo.listPrice.amount + " zł": "darmowa"}</p>
            </div>
        </div> 
    ));

    return ( 
        <div className="cart">
            {cartContent}
        </div>
     );
}
 
export default Cart;