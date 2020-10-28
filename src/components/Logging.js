import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/Logging.css';

const Logging = ({users, setActualUser}) => {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [message, setMessage] = useState("");

    const routeChange = (e) => {
      e.preventDefault();
      history.push(`${e.target.getAttribute('data-path')}`);
    }

    const handleChange = (e) => {
      if(e.target.getAttribute('data-type') === "email") setEmail(e.target.value);
      else if(e.target.getAttribute('data-type') === "password") setPassword(e.target.value)
    }

    const formValidation = () => {
      let flag = false;

      users.forEach(user => {
        const actualUser = JSON.parse(user);

        if(actualUser.email === email && actualUser.password === password){
          console.log(`Zalogowano! ${actualUser.email}`);
          setActualUser(actualUser);
          flag = true;
        } 
      });

      return flag;
    }

    const handleClick = (e) => {
      e.preventDefault();

      if(formValidation()) routeChange(e);
      else {
        setIsIncorrect(true);
        setMessage("Invalid login or password!");
      }
    }

    return (
      <div className="logging">
        <div className="logo">
          <span>Bookstore App</span>
        </div>
        <div>
            <form>
                <input onChange={handleChange} value={email} data-type="email" type="text" placeholder="email..."/>
                <input onChange={handleChange} value={password} data-type="password" type="password" placeholder="password..."/>
                {isIncorrect ? <p>{message}</p> : null}
                <button onClick={handleClick} data-path="main">Log In</button>
                <button onClick={routeChange} data-path="register">Sign Up</button>
            </form>
        </div>
      </div>
    )
}

export default Logging;