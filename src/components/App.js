import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Logging from './Logging'
import Register from './Register'

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
    const { users } = this.state;

    return (
      <Router>
          <Route path="/" exact component={() => <Logging users={users} setActualUser={this.setActualUser}/>}/>
          <Route path="/register" component={() => <Register addUsers={this.addUsers} users={users} setActualUser={this.setActualUser}/>}/>      
      </Router>
    )
  }
}

export default App;
