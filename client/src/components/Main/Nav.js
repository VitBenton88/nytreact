import React from "react";
import './Nav.css';
import Link from "react-router-dom";

const Nav = () =>
<div className="container">
	<nav className="navbar navbar-default">
	  <div className="container-fluid">
	    <div className="navbar-header">
	      <a className="navbar-brand" href="/">NYT-React</a>
	    </div>
	    <ul className="nav navbar-nav navbar-right">
	      <li className={window.location.pathname === "/" ? "active" : ""}><Link to="/">Search</Link></li>
	      <li className={window.location.pathname === "/saved" ? "active" : ""}><Link to="/saved">Saved Articles</Link></li>
	    </ul>
	  </div>
	</nav>
</div>

export default Nav;
