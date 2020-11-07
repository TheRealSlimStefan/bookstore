import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../css/UserPanel.css'

const UserPanel = ({actualUser, setActualUser}) => {
    const history = useHistory();

    const [amount, setAmount] = useState("");
    const [tempAmount, setTempAmount] = useState(0);
    const [cash, setCash] = useState(actualUser.cash);
    const [error, setError] = useState(false);

    const routeChange = (where) => {
        history.push(where);
    }
  
    const handleClick = (where) => {
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
                    console.log(actualUser);
                    setTempAmount(Number(amount));
                    setCash(newAmountOfCash);
                    setError(false);
                }
            }
            
        } else {
            setError(true);
        }
    }

    const logOut = (where) => {
        setActualUser(null);
        routeChange(where)
    }

    const deleteAccount = (where) => {

        //prawdopodobnie bedzie bug
        //logowanie nie działa z pustym
        for(let i = 0; i < localStorage.length; i++){
            let user = JSON.parse(localStorage.getItem(`user${i}`));

            if(user.email === actualUser.email && user.password === actualUser.password) {
                localStorage.setItem(`user${i}`, JSON.stringify({email: "", password: "", books: [], cart: [], cash: 0,}));
            }
        }

        routeChange(where);
    }

    return ( 
        <div className="userPanel">
            <div className="user">
                <h1>User Panel:</h1>
                <p>Your Cash: <span>{cash}$</span></p>
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
                <button onClick={() => handleClick('books')}>Books</button>
                <button onClick={() => deleteAccount('/')}className="delete">DELETE AN ACCOUT</button>
                <button onClick={() => handleClick('main')}>CANCEL</button>
                <button onClick={() => logOut('/')}>LOG OUT</button>
            </div>
        </div>
     );
}
 
export default UserPanel;