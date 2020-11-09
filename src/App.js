import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Prompt } from 'react-router-dom';

const User = (params) => {
  return (
    <h1>
      Welcome User {params.params}
    </h1>
  )
}


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <Router>
      <div className="App">

        <ul>
          <li>
            <NavLink to="/" exact activeStyle={
              {
                color: 'green'
              }
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={
              {
                color: 'green'
              }
            }>About</NavLink>
          </li>
          <li>
            <NavLink to="/user/Tom" activeStyle={
              {
                color: 'green'
              }
            }>User Tom</NavLink>
          </li>
          <li>
            <NavLink to="/user/Isfar" activeStyle={
              {
                color: 'green'
              }
            }>User Isfar</NavLink>
          </li>
        </ul>
        <Prompt
          when={!isLoggedIn}
          message={(location) =>{
            return location.pathname.startsWith('/user') ? 'Are you sure? ': true
          }}
        />

        <input type="button" value={isLoggedIn ? 'Logout' : 'Login'} onClick={(e) => handleClick(e)} />

        <Route path="/" exact strict render={
          () => {
            return (
              <h1>Welcome Home</h1>
            )
          }
        } />

        <Route path="/about" exact strict render={
          () => {
            return (
              <h1>Welcome About</h1>
            )
          }
        } />

        <Route path="/user/:username" exact strict render={
          ({ match }) => (
            isLoggedIn ? <User params={match.params.username} /> :
              <Redirect to='/' />
          )
        } />

      </div>
    </Router>
  );
}

export default App;
