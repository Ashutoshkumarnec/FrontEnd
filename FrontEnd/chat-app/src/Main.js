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
      <Route exact path="/Go-For-Chat/" component={Register} />
      <Route path="/Go-For-Chat/Login" component={Login} />
      <Route path="/Go-For-Chat/Forget" component={Forget} />
      <Route path="/Go-For-Chat/App" component={App} />
      <Route path="/Go-For-Chat/Reset" component={Reset} />
    </Switch>
  </div>
);
export default Main;
