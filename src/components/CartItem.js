import React from 'react';

import '../css/CartItem.css'

import noImg from '../img/noImg.png'

const CartItem = ({book, actualUser}) => {

    return ( 
        <div className="cartItem">
            <img src={book.volumeInfo.hasOwnProperty('imageLinks') ? book.volumeInfo.imageLinks.thumbnail : noImg} alt={book.volumeInfo.description}/>
            <div className="description">
                <h1>{book.volumeInfo.title}</h1>
                <h2>{book.volumeInfo.authors[0]}</h2>
                <p>Cena: {book.saleInfo.saleability === "FOR_SALE" &&  book.saleInfo.listPrice.amount !== 0 ? book.saleInfo.listPrice.amount + " zł": "darmowa"}</p>
            </div>
            <div className="panel">
                <button>-</button>
                <p>0</p>
                <button>+</button>
            </div>
        </div> 
     );
}
 
export default CartItem;