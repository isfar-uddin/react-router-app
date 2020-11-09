import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const User = ({ match }) => {
  return (
    <h1>
      Welcome User {match.params.username}
    </h1>
  )
}


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = async (e)=> {
    e.preventDefault();
    await setIsLoggedIn(true);
    console.log(isLoggedIn);
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
            <NavLink to="/about"  activeStyle={
              {
                color: 'green'
              }
            }>About</NavLink>
          </li>
          <li>
            <NavLink to="/user/Tom"  activeStyle={
              {
                color: 'green'
              }
            }>User Tom</NavLink>
          </li>
          <li>
            <NavLink to="/user/Isfar"  activeStyle={
              {
                color: 'green'
              }
            }>User Isfar</NavLink>
          </li>
        </ul>
        
        <input type="button" value="log in" onClick={(e)=>handleClick(e)}/>
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

        <Route path="/user/:username" exact strict component={User} />

      </div>
    </Router>
  );
}

export default App;
