import React from 'react';

import '../css/CartItem.css'

import noImg from '../img/noImg.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CartItem = ({book, actualUser, setActualUser}) => {

    const handleDelete = () => {
        for(let i = 0; i < localStorage.length; i++){
            let user = JSON.parse(localStorage.getItem(`user${i}`));

            if(user.email === actualUser.email && user.password === actualUser.password) {

                const newCart = user.cart.filter(item => {
                    if(item.id !== book.id) return true;
                    else return false;
                });

                localStorage.setItem(`user${i}`, JSON.stringify({email: user.email, password: user.password, books: user.books, cart: newCart, cash: user.cash,}));
                setActualUser({email: user.email, password: user.password, books: user.books, cart: newCart, cash: user.cash,
                });
            }
        }
    }

    return ( 
        <div className="cartItem">
            <img src={book.volumeInfo.hasOwnProperty('imageLinks') ? book.volumeInfo.imageLinks.thumbnail : noImg} alt={book.volumeInfo.description}/>
            <div className="description">
                <h1>{book.volumeInfo.title}</h1>
                <h2>{book.volumeInfo.authors[0]}</h2>
                <p>Cena: {book.saleInfo.saleability === "FOR_SALE" &&  book.saleInfo.listPrice.amount !== 0 ? book.saleInfo.listPrice.amount + " zł": "darmowa"}</p>
            </div>
            <div className="panel">
                <button onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div> 
     );
}
 
export default CartItem;