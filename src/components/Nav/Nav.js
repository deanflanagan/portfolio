import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Interests from "../Interests/Interests";
import Goals from "../Goals/Goals";
import Experience from "../Experience/Experience";
import Home from "../Home/Home";
import EmbeddedEmail from "../Email/Email";
import Github from "../../assets/images/GitHub_Logo.png";
import LinkedIn from "../../assets/images/LI-In-Bug.png";
import Stackoverflow from "../../assets/images/stackoverflow.png";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./Popup.css";
import "./Nav.css";

function Nav() {
  return (
    <div className="body-container">
      <BrowserRouter>
        <nav className="navbar shadow">
          <div className="navbar--logo-holder">
            <h1>Dean Flanagan</h1>
          </div>
          <ul className="navbar--link">
            <li>
              <Link className="navbar--link-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar--link-item" to="/Experience">
                Skills and Projects
              </Link>
            </li>
            <li>
              <Link className="navbar--link-item" to="/Goals">
                Goals
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Interests">
            <Interests />
          </Route>
          <Route path="/Goals">
            <Goals />
          </Route>
          <Route path="/Experience">
            <Experience />
          </Route>
        </Switch>
        <div className="footer">
          <p>Copyright {new Date().getFullYear()}</p> {/* Outputs 2020 */}
          <ul className="footer--link">
            <li>
              <a
                href="https://github.com/spankyf"
                className="footer--link-item"
              >
                <img src={Github} alt="logo" />
              </a>
            </li>
            <li>
              <a
                href="https://ca.linkedin.com/in/dean-flanagan"
                className="footer--link-item"
              >
                <img src={LinkedIn} alt="logo" />
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/4889550/noblerthanoedipus"
                className="footer--link-item"
              >
                <img src={Stackoverflow} alt="logo" />
              </a>
            </li>
          </ul>
          <Popup trigger={<button> Trigger</button>} position="centre">
            <EmbeddedEmail />
          </Popup>
        </div>
      </BrowserRouter>

      {/* <Footer /> lets just do the footer here and redirect to a contact page */}
    </div>
  );
}

export default Nav;
