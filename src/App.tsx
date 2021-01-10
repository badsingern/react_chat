import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import React, { Component } from "react";
import { Login } from "./pages/login/Login";
import { Chat } from "./pages/chat/Chat";

export default class App extends Component {

  render() {
    return (
        <Router>
          <div className='app__container'>
            {/*<nav>*/}
            {/*  <ul>*/}
            {/*    <li>*/}
            {/*      <Link to="/">Home</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <Link to="/about">About</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <Link to="/users">Users</Link>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</nav>*/}

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/chat">
                <Chat/>
              </Route>
              <Route path="/">
                <Login/>
              </Route>
            </Switch>
          </div>
        </Router>
    )
  }
}

function About() {
  return <h2>About</h2>;
}

function Users(props) {
  const users =
      <>
        {
          props.users?.map(user => (
              <>
                <li>{user.name}</li>
                <br/>
              </>
          ))
        }
      </>;

  return props.users.length ? <ul>{users}</ul> : <h2>Loading...</h2>;
}
