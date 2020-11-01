// API key=AIzaSyDjD_8SrWamB5rRUl-umwzlnNUCR1xXf1o

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Logging from './Logging'
import Register from './Register'
import Main from './Main'
import Cart from './Cart'

import '../css/App.css';

class App extends Component {
  state = {
    users: null,
    actualUser: null,
  }

  setActualUser = (newActualUser) => {
    this.setState({
      actualUser: newActualUser,
    })
  }

  addUsers = (newUser) => {
    const newUsers = [...this.state.users, newUser];

    localStorage.setItem(`user${localStorage.length}`, newUser);

    this.setState({
      users: newUsers,
    })
  }

  fetchUsers = () => {
    const users = [];

    for(let i = 0; i < localStorage.length; i++){
        users.push(localStorage.getItem(`user${i}`));
    }

    this.setState({
      users,
    })
  }

  componentDidMount(){
    this.fetchUsers();
  }

  render(){
    const { users, actualUser } = this.state;

    // console.log(actualUser);
    // console.log(users);

    return (
      <Router>
          <Route path="/" exact component={() => <Logging users={users} setActualUser={this.setActualUser}/>}/>
          <Route path="/register" component={() => <Register addUsers={this.addUsers} users={users} setActualUser={this.setActualUser}/>}/>   
          <Route path="/main" exact component={() => <Main actualUser={actualUser}/>}/>
          <Route path="/cart" exact component={() => <Cart actualUser={actualUser}/>}/>    
      </Router>
    )
  }
}

export default App;
