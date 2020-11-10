import React, { useState } from 'react';
import { useHistory, Route, Redirect } from 'react-router-dom';

import '../css/UserPanel.css'

const UserPanel = ({actualUser, setActualUser, users, setActualUsers}) => {
    const history = useHistory();

    const [amount, setAmount] = useState("");
    const [cash, setCash] = useState(actualUser.cash);
    const [error, setError] = useState(false);

    const routeChange = (where) => {
        history.push(where);
    }
  
    const handleClick = (where) => {
        if(where === "books"){
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

    const handleChange = (e) => {
        setAmount(e.target.value);
    }

    const addCash = () => {
        if(Number(amount) > 0){
            const newAmountOfCash = cash + Number(amount);

            for(let i = 0; i < localStorage.length; i++){
                let user = JSON.parse(localStorage.getItem(`user${i}`));
    
                if(user.email === actualUser.email && user.password === actualUser.password) {
                    user.cash = newAmountOfCash;
                    let content = JSON.stringify({email: user.email, password: user.password, cart: user.cart, books: [...user.books], cash: user.cash});
                    localStorage.setItem(`user${i}`, content);
                    setActualUser(JSON.parse(content));
                    setCash(newAmountOfCash);
                    setError(false);
                }
            }
            
        } else {
            setError(true);
        }
    }

    const logOut = (where) => {
        setActualUser({email: "", password: "", cart: [], books: [], cash: 0});
        routeChange(where)
    }

    const deleteAccount = (where) => {
        for(let i = 0; i < localStorage.length; i++){
            let user = JSON.parse(localStorage.getItem(`user${i}`));

            if(user.email === actualUser.email && user.password === actualUser.password) {

                const newUsers = users.filter(item => {
                    if(JSON.parse(item).email === user.email && JSON.parse(item).password === user.password){
                        console.log(item);
                        return false;
                    } 
                    else return true;
                })

                setActualUsers(newUsers);

                localStorage.setItem(`user${i}`, JSON.stringify({email: "", password: "", cart: [], books: [], cash: 0}));
                setActualUser({email: "", password: "", cart: [], books: [], cash: 0});
            } 
        }

        routeChange(where);
    }

    return ( 
        <Route render={() => ((actualUser.email !== "" && actualUser.password !== "") ? (
            <div className="userPanel">
                <div className="user">
                    <h1>User Panel:</h1>
                    <p>Your Cash: <span>{cash.toFixed(2)}$</span></p>
                    <div className="addCash">
                        <label>
                            <p>Add Cash:</p>
                            <input value={amount} onChange={handleChange} type="number"/>
                            {error ? <p className="error">Invalid value</p> : null}
                            <button onClick={addCash}>ADD CASH</button>
                        </label>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={() => handleClick('cart')}>YOUR CART</button>
                    <button onClick={() => handleClick('books')}>BOOKS</button>
                    <button onClick={() => deleteAccount('/')}className="delete">DELETE AN ACCOUNT</button>
                    <button onClick={() => handleClick('main')}>CANCEL</button>
                    <button onClick={() => logOut('/')}>LOG OUT</button>
                </div>
            </div>
        ) : (<Redirect to="/" />))}/>
     );

     
}
 
export default UserPanel;