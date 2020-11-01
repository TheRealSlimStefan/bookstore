import React from 'react';

import noImg from '../img/noImg.png'

import '../css/BookOffer.css'

const BookOffer = ({book, addToCart}) => {
    return ( 
        <div className="result">
            <img src={book.volumeInfo.hasOwnProperty('imageLinks') ? book.volumeInfo.imageLinks.thumbnail : noImg} alt={book.volumeInfo.description}/>
            <div className="description">
                <h1>{book.volumeInfo.title}</h1>
                <h2>{book.volumeInfo.authors}</h2>
                <p>Cena: {book.saleInfo.saleability === "FOR_SALE" &&  book.saleInfo.listPrice.amount !== 0 ? book.saleInfo.listPrice.amount + " zł": "darmowa"}</p>
            </div>
            <button onClick={() => addToCart(book)}>Add To Chart</button>
        </div> 
    );
}
 
export default BookOffer;