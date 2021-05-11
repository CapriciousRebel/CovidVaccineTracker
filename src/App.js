import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar.js";
import Landing from "./components/Landing.js";

function App() {
  return (
    <Router>
      <div className="h-10">
        <MyNavbar />
      </div>
      <div className="h-90">
        <Route exact path="/" component={Landing} />
      </div>
    </Router>
  );
}

export default App;
