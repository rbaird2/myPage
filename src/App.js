// name: Raymond Baird
// date created: 03/07/2023
// description: Project to utilize React.js to build front end multi-page web application
// Some of the CSS content was from PedroTech and altered to suit my needs.

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";


// utilize BrowserRouter, Route, and Switch from react-router-dom
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>                                    
          <Route path="/" exact component={Home} />
          <Route path="/education" exact component={Education} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
