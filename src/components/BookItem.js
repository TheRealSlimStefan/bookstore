import React from 'react';

import '../css/BookItem.css'

import noImg from '../img/noImg.png'

const BookItem = ({book}) => {
    return ( 
        <div className="cartItem">
            <img src={book.volumeInfo.hasOwnProperty('imageLinks') ? book.volumeInfo.imageLinks.thumbnail : noImg} alt={book.volumeInfo.description}/>
            <div className="description">
                <h1>{book.volumeInfo.title}</h1>
                <h2>{book.volumeInfo.authors[0]}</h2>
            </div>
        </div> 
     );
}
 
export default BookItem;