import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
