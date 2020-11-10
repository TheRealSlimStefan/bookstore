import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Logging from './Logging'
import Register from './Register'
import Main from './Main'
import Cart from './Cart'
import UserPanel from './UserPanel'
import Books from './Books'
import ErrorPage from './ErrorPage'

import '../css/App.css';

class App extends Component {
  state = {
    users: null,
    actualUser: {email: "", password: "", cart: [], books: [], cash: 0}
  }

  setActualUsers = (newUsers) => {
    console.log(newUsers);
    this.setState({
      users: newUsers,
    })
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

    return (
      <Router  basename={'/'}>
          <Switch>
              <Route path="/" exact component={() => <Logging setActualUser={this.setActualUser}/>}/>
              <Route path="/register" component={() => <Register addUsers={this.addUsers} users={users} setActualUser={this.setActualUser}/>}/>   
              <Route path="/main" exact component={() => <Main actualUser={actualUser} setActualUser={this.setActualUser}/>}/>
              <Route path="/cart" exact component={() => <Cart actualUser={actualUser} setActualUser={this.setActualUser}/>}/>
              <Route path="/userPanel" exact component={() => <UserPanel actualUser={actualUser} setActualUser={this.setActualUser} users={users} setActualUsers={this.setActualUsers}/>}/>
              <Route path="/books" exact component={() => <Books actualUser={actualUser}/>}/>
              <Route component={ErrorPage}/>
          </Switch>    
      </Router>
    )
  }
}

export default App;