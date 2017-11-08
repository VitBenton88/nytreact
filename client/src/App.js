import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import Main from "./components/Main/Main";
import Saved from "./components/Saved/Saved";

const App = () =>
<Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
  </Router>;

export default App;
