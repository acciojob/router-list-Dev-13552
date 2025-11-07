
import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import './../styles/App.css';
import Item from "./Item";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
    <div>
        {/* Do not remove the main div */}
        <Switch>
          <Route exact path = "/" component = {Home}></Route>
          <Route path = "/items/:id" component = {Item}></Route>
        </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App
