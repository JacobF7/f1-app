import React from "react";
import Drivers from "./components/drivers";
import Races from "./components/races";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container m-5">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/drivers" component={Drivers}></Route>
          <Route path="/races" component={Races}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
