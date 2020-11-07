// API key=AIzaSyDbIZFOmCQoO9zPArSJ44Wt0-sCI6-Sf3U

// fetch(`https://books.googleapis.com/books/v1/volumes?q=${generateCode()}&download=DOWNLOAD_UNDEFINED&filter=paid-ebooks&maxResults=40&orderBy=newest&printType=BOOKS&projection=FULL&key=AIzaSyDjD_8SrWamB5rRUl-umwzlnNUCR1xXf1o key=AIzaSyAM5-ENsl2Zj2BOpSGW3-LR7ZI88tfdQ2g`)

// const fetchData = async () => {
    //     if(isMounted && books.length === 0) await fetch(`https://books.googleapis.com/books/v1/volumes?q=${generateCode()}&download=DOWNLOAD_UNDEFINED&filter=paid-ebooks&maxResults=40&orderBy=newest&printType=BOOKS&projection=FULL`).then((response) => response.json()).then((data) => {
    //         if(Array.isArray(data.items)){
    //             setIsLoaded(true);
    //             setBooks(data.items);
    //         } else throw data;
    //     }).catch(error => console.log(error.error.code, error.error.message));
    // }

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import BookOffer from './BookOffer'

import '../css/Main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

const Main = ({actualUser, setActualUser}) => {
    const history = useHistory();

    const [books, setBooks] = useState([]); 
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
        async function fetchData() {
            if(isMounted && books.length === 0){
            
               // ${generateCode()}

            const response = await fetch(`https://books.googleapis.com/books/v1/volumes?q=dddddddddddddddddddddddddddddddddddd&download=DOWNLOAD_UNDEFINED&filter=paid-ebooks&maxResults=40&orderBy=newest&printType=BOOKS&projection=FULL`);

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
        routeChange(where);
    }

    const addToCart = (book) => {
        for(let i = 0; i < localStorage.length; i++){
            let user = JSON.parse(localStorage.getItem(`user${i}`));

            if(user.email === actualUser.email && user.password === actualUser.password) {
                user.cart.push(book);

                console.log(user.cart);

                const newCart = user.cart.filter(item => {
                    if(item.id !== book.id) return true;
                    else return false;
                });

                console.log("newCart", newCart);

                let content = JSON.stringify({email: user.email, password: user.password, cart: user.cart, books: [...newCart], cash: user.cash});
                localStorage.setItem(`user${i}`, content);
                setActualUser(JSON.parse(content));
            }
        }
        handleClick('cart');   
    }

    //dodać przekierowanie jeśli ktoś ręcznie wpisze link

    //console.log(books, isLoaded);

    const booksOffers = books.map(book => <BookOffer key={book.id + Math.floor(Math.random() * 1000 + Math.floor(Math.random() * 100))} book={book} addToCart={addToCart}/>)

    return (
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

export default Main;
