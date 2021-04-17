import React from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.svg";

const Nav = () => {
return (
  <nav className="navbar">
    <div className="navbar--logo-holder">
      <img src={Logo} alt="logo" className="navbar--logo" /> 
      <h1> Stick'Me</h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item"> <a href={'/'}>Home</a> </li>
      <li  className="navbar--link-item"> <a href={'/Experience'}>Experience</a> </li>
      <li className="navbar--link-item"> <a href={'/Interests'}>Interests</a> </li>
      <li className="navbar--link-item"> <a href={'/Projects'}>Projects</a> </li>
    </ul>     
  </nav>
)};
export default Nav;

{/* <Router className="navbar--link">
  <Link className="navbar--link-item" to="/">Home</Link>
  <Link className="navbar--link-item" to="/Experience">Experience</Link>
  <Link className="navbar--link-item" to="/Interests">Interests</Link>
  <Link className="navbar--link-item" to="/Projects">Projects</Link>
  <Route path="/" component={Home} />
  <Route path="/Experience" component={Experience} />
  <Route path="/Interests" component={Interests} />
  <Route path="/Projects" component={Projects} />
</Router> */}