import React from "react";

import {BrowserRouter  as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import "./Styles.css";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import Recipe from "./Recipe";
import Order from "./Order";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/menu/:id" exact component={Recipe} />
        <Route path="/contact" component={Contact} />
        <Route path="/order" exact component={Order} />
      </Switch>
    </Router>
  );
}

export default App;
