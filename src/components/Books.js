import React from 'react';
import { useHistory, Route, Redirect } from 'react-router-dom';

import BookItem from '../components/BookItem';

import '../css/Books.css'

const Books = ({actualUser}) => {
    const history = useHistory();

    const routeChange = (where) => {
        history.push(where);
    }
  
    const handleClick = (where) => {
        routeChange(where);
    }

    const books = actualUser.books.map(book => {
        return <BookItem book={book} key={book.id + Math.floor(Math.random()* 100)}/>   
    });

    return ( 
        <Route render={() => ((actualUser.email !== "" && actualUser.password !== "") ? (
            <div className="books">
                <h1>Your Books:</h1>
                {books}
                <div className="booksPanel">
                    <button onClick={() => handleClick('userPanel')}>CANCEL</button>
                </div>
            </div>
        ) : (<Redirect to="/" />))}/>
     );
}
 
export default Books;