
import React from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import './App.css';
// import Header from './components/Header/Header';
import Interests from './components/Interests/Interests';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
// import Logo from "./assets/images/logo.svg";

function App() {
  return (
    <div className="layout">
      
      <BrowserRouter>
      <nav className="navbar">
        <div className="navbar--logo-holder">
          <h1> Stick'Me</h1>
        </div>
          <ul className="navbar--link">

            <li><Link className="navbar--link-item" to="/Experience">Experience</Link></li>
            <li><Link className="navbar--link-item" to="/">Home</Link></li>
            <li><Link className="navbar--link-item" to="/Interests">Interests</Link></li>
            <li><Link className="navbar--link-item" to="/Projects">Projects</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            {/* <Header />   */}
            <Home />
          </Route>
          <Route path="/Interests">
            <Interests />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Experience">
            <Experience />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;