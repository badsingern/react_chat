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
            <Switch>
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
