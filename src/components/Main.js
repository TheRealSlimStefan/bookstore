import React, { useState, useEffect } from 'react';
import { useHistory, Redirect, Route } from 'react-router-dom';

import BookOffer from './BookOffer'

import '../css/Main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

const Main = ({actualUser, setActualUser}) => {
    const history = useHistory();

    const [books, setBooks] = useState([]);
    const [input, setInput] = useState(""); 
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
        async function fetchData() {
            if(isMounted && books.length === 0){

            const response = await fetch(`https://books.googleapis.com/books/v1/volumes?q=${generateCode()}&download=DOWNLOAD_UNDEFINED&filter=paid-ebooks&maxResults=40&orderBy=newest&printType=BOOKS&projection=FULL`);

            const data = await response.json();

            if(Array.isArray(data.items)){
                setBooks(data.items)
                setIsLoaded(true);
                }
            }
        }

        fetchData();

        return () => setIsMounted(false)
    }, [isMounted, setIsMounted, books]);

    const generateCode = () => {
        let amountOfChars = Math.floor(Math.random() * (4 - 1)) + 1;
        let string = '';

        for(let i = 0; i < amountOfChars; i++){
            string += String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
        }

        return string;
    }

    const routeChange = (where) => {
        history.push(where);
    }
  
    const handleClick = (where) => {
        if(where === "cart"){
            for(let i = 0; i < localStorage.length; i++){
                let user = JSON.parse(localStorage.getItem(`user${i}`));
    
                if(user.email === actualUser.email && user.password === actualUser.password) {
                    let content = JSON.stringify({email: user.email, password: user.password, cart: user.cart, books: user.books, cash: user.cash});
                    localStorage.setItem(`user${i}`, content);
                    setActualUser(JSON.parse(content));
                }
            }
        }
        routeChange(where);
    }

    const addToCart = (book) => {
        for(let i = 0; i < localStorage.length; i++){
            let user = JSON.parse(localStorage.getItem(`user${i}`));

            let newCart = [];

            if(user.email === actualUser.email && user.password === actualUser.password) {

                newCart = [...user.cart];

                newCart = user.cart.filter(item => {
                     if(book.id === item.id) return false;
                     else return true;
                });

                newCart.push(book);

                let content = JSON.stringify({email: user.email, password: user.password, cart: newCart, books: user.books, cash: user.cash});
                localStorage.setItem(`user${i}`, content);
                setActualUser(JSON.parse(content));
            }
        }
        handleClick('cart');   
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSearch = () => {
        if(input !== ""){
            async function fetchData() {

                const response = await fetch(`https://books.googleapis.com/books/v1/volumes?q=${input}&filter=paid-ebooks`);
    
                const data = await response.json();
    
                if(Array.isArray(data.items)){
                    setBooks(data.items)
                    setIsLoaded(true);
                }
            }
    
            fetchData();
        }
        setInput("");
    }

    let booksOffers;

    booksOffers = books.map(book => <BookOffer key={book.id + Math.floor(Math.random() * 10000000 + Math.floor(Math.random() * 100))} book={book} addToCart={addToCart}/>)

    return (
        <Route render={() => ((actualUser.email !== "" && actualUser.password !== "") ? (
            <div className="main">
                <nav>
                    <div className="logo">
                        <span>Bookstore App</span>
                    </div>
                    <div className="buttons">
                        <button onClick={() => handleClick('cart')} ><FontAwesomeIcon icon={faShoppingCart} /></button>
                        <button onClick={() => handleClick('userPanel')}><FontAwesomeIcon icon={faUser} /></button>
                    </div>
                    <div className="search">
                        <input onChange={handleChange} value={input} type="text" placeholder="search for books..."/>
                        <button onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </nav>
                {isLoaded ? (<div className="results">
                    <>
                        {booksOffers}
                    </>
                </div>) : null} 
            </div>
        ) : (<Redirect to="/" />))}/>
    )
}

export default Main;