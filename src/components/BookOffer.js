import React from 'react';

import noImg from '../img/noImg.png'

import '../css/BookOffer.css'

const BookOffer = ({book}) => {
    return ( 
        <div className="result">
            <img src={book.volumeInfo.hasOwnProperty('imageLinks') ? book.volumeInfo.imageLinks.thumbnail : noImg}/>
            <div className="description">
                <h1>{book.volumeInfo.title}</h1>
                <h2>{book.volumeInfo.authors}</h2>
                <p>Cena: {book.saleInfo.saleability === "FOR_SALE" &&  book.saleInfo.listPrice.amount !== 0 ? book.saleInfo.listPrice.amount + " zł": "darmowa"}</p>
            </div>
            <button>Add To Chart</button>
        </div> 
    );
}
 
export default BookOffer;