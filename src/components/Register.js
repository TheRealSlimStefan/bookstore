import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../css/Register.css';

const Register = ({users, addUsers, setActualUser}) => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [message, setMessage] = useState("");

    const routeChange = (e) => {
      e.preventDefault();
      history.push(`${e.target.getAttribute('data-path')}`);
    }

    const handleChange = (e) => {
      if(e.target.getAttribute('data-type') === "email") setEmail(e.target.value);
      else if(e.target.getAttribute('data-type') === "password") setPassword(e.target.value)
      else if(e.target.getAttribute('data-type') === "confirmPassword") setConfirmPassword(e.target.value)
    }
    
    const formValidation = () => {

      
      if(email.length === 0 || password.length === 0 || confirmPassword.length === 0){
        setMessage("Fill the fields");
        setIsIncorrect(true);
        return false;
      }

      const emailCondition = 
        !email.includes('@') ||
        !email.includes('.') ||
        email.slice(0, email.indexOf('@')).length < 2 ||
        email.slice(email.indexOf('@') + 1, email.indexOf('.')).length < 2 || email.slice(email.indexOf('.') + 1, email.length).length < 2;  

      if(emailCondition) {
        setMessage("Incorrect email adress!");
        setIsIncorrect(true);
        return false;
      }

      let isUserExistCondition = false;

      users.forEach(user => {if(JSON.parse(user).email === email){
        isUserExistCondition = true;
      }});

      if(isUserExistCondition) {
        setMessage("User with given email address already exists!");
        setIsIncorrect(true);
        return false;
      }


      if(password.length < 5){
        setMessage("Password is too short!");
        setIsIncorrect(true);
        return false;
      }

      if(password !== confirmPassword){
        setMessage("Passwords are not the same!");
        setIsIncorrect(true);
        return false;
      }

      setMessage("");
      setIsIncorrect(false);
      return true;
    }

    const handleClick = (e) => {
      e.preventDefault();

      // do ifa włożyć -> formValidation()
      if(true){
        addUsers(JSON.stringify({email, password, books: [], cart: [], cash: 0,}));
        logInUser({email, password, books: [], cart: [], cash: 0,});
        routeChange(e);
      }
    }

    const logInUser = (actualUser) => {
      console.log(`Zalogowano! ${actualUser.email}`);
      setActualUser(actualUser);
    };

  return (
    <div className="register">
      <div className="logo">
        <span>Bookstore App</span>
      </div>
      <div>
          <form>
              <input 
                onChange={handleChange} 
                value={email} 
                data-type="email" 
                type="text" 
                placeholder="email..."/>
              <input 
                onChange={handleChange} 
                value={password} 
                data-type="password" 
                type="password" 
                placeholder="password..."/>
              <input 
                onChange={handleChange} 
                value={confirmPassword} 
                data-type="confirmPassword" 
                type="password" 
                placeholder="confirm password..."/>
              {isIncorrect ? <p>{message}</p> : null}
              <button onClick={routeChange} data-path="">Cancel</button>
              <button onClick={handleClick} data-path="main">Sign Up</button>
          </form>
      </div>
    </div>
  )
}

export default Register;