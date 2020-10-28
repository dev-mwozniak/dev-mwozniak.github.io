import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../Home/Home";

import "../../sass/App.scss";

const App = () => { 
  return (
    <Router basename="/">
      <div className="App container-fluid">
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
};

export default App;
