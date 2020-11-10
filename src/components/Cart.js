import React, {useState} from 'react';
import { useHistory, Route, Redirect } from 'react-router-dom';

import CartItem from '../components/CartItem';

import '../css/Cart.css'

const Cart = ({actualUser, setActualUser}) => {
    const history = useHistory();
    const [info, setInfo] = useState(false);

    const routeChange = (where) => {
        history.push(where);
    }
  
    const handleClick = (where) => {
        routeChange(where);
    }

    const handleBuy = () => {
        let suma = 0;
        const userBooks = [...actualUser.books];

        actualUser.cart.map(book => {
            if(book.saleInfo.saleability !== "NOT_FOR_SALE") suma += book.saleInfo.listPrice.amount;
            userBooks.push(book);
            return true;
        });

        if(actualUser.cash >= suma){

            let userCash = actualUser.cash - suma;

            for(let i = 0; i < localStorage.length; i++){
                let user = JSON.parse(localStorage.getItem(`user${i}`));

                if(user.email === actualUser.email && user.password === actualUser.password) {
                    localStorage.setItem(`user${i}`, JSON.stringify({email: user.email, password: user.password, books: userBooks, cart: [], cash: userCash,}));
                    setActualUser({email: user.email, password: user.password, books: userBooks, cart: [], cash: userCash,});
                }
            }
            routeChange("main");
        } else setInfo(true);
    }

    const cartContent = actualUser.cart.map(book => {
        return <CartItem setActualUser={setActualUser} actualUser={actualUser} book={book} key={book.id + Math.floor(Math.random()* 100)}/>   
    });

    return ( 
        <Route render={() => ((actualUser.email !== "" && actualUser.password !== "") ? (
            <div className="cart">
                <h1>Shopping Cart:</h1>
                <p className="cash">Your Cash: <span>{actualUser.cash.toFixed(2)}$</span></p>
                {cartContent}
                {info ? <p className="info">You have not enough money!</p> : null}
                <div className="cartPanel">
                    <button onClick={() => handleClick('main')}>CANCEL</button>
                    <button onClick={handleBuy}>BUY</button>
                </div>
            </div>
        ) : (<Redirect to="/" />))}/>
     );
}
 
export default Cart;