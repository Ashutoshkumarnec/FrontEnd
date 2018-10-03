import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import App from "./App";
import Forget from "./Forget";
import Reset from "./Reset";
const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Forget" component={Forget} />
      <Route exact path="/App" component={App} />
      <Route exact path="/Reset" component={Reset} />
    </Switch>
  </div>
);
export default Main;
