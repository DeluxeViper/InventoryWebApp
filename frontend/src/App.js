/** @format */

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ItemsList from "./components/ItemsList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemEdit from "./components/ItemEdit";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/inventory" exact={true} component={ItemsList}></Route>
        <Route path="/items/:id" component={ItemEdit} />
      </Switch>
    </Router>
  );
}

export default App;
