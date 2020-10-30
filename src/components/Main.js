// API key=AIzaSyDjD_8SrWamB5rRUl-umwzlnNUCR1xXf1o

import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

import BookOffer from './BookOffer'

import '../css/Main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

class Main extends Component {
    state = {
        books: [],
        isLoaded: false,
    }

    generateCode = () => {
        let amountOfChars = Math.floor(Math.random() * (4 - 1)) + 1;
        let string = '';

        for(let i = 0; i < amountOfChars; i++){
            string += String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
        }

        return string;
    }

    componentDidMount(){
        this.mounted = true;

        fetch(`https://books.googleapis.com/books/v1/volumes?q=${this.generateCode()}&download=DOWNLOAD_UNDEFINED&filter=paid-ebooks&maxResults=40&orderBy=newest&printType=BOOKS&projection=FULL&key=AIzaSyDjD_8SrWamB5rRUl-umwzlnNUCR1xXf1o`).then(response => response.json()).then(data => {
            if(this.mounted) this.setState({
                    books: data.items,
                    isLoaded: true,
                });
        });
    }

    componentWillUnmount(){
        this.mounted = false;
    }

    //dodać przekierowanie jeśli ktoś ręcznie wpisze link
    render(){
        const { books, isLoaded } = this.state;

        //console.log(books, isLoaded);

        const booksOffers = books.map(book => <BookOffer key={book.id + Math.floor(Math.random() * 100 + 1)} book={book}/>);

        return (
            <div className="main">
                <nav>
                    <div className="logo">
                        <span>Bookstore App</span>
                    </div>
                    <div className="buttons">
                        <button><FontAwesomeIcon icon={faShoppingCart} /></button>
                        <button><FontAwesomeIcon icon={faUser} /></button>
                    </div>
                    <div className="search">
                        <input type="text"/>
                        <button><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </nav>
                {isLoaded ? (<div className="results">
                    <>
                        {booksOffers}
                    </>
                </div>) : null} 
            </div>
        )
    }
}

export default Main;
