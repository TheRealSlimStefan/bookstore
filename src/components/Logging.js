import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../css/Logging.css';

class Logging extends Component {
  render(){
    return (
      <div className="logging">
        <img className="logo" src={logo} alt=""/>
        <div>
            <form>
                <input type="text"/>
                <input type="password"/>
                <Link to="/main">Log In</Link>
                <Link to="/signin">Sign Up</Link>
            </form>
        </div>
      </div>
    )
  }
}

export default Logging;