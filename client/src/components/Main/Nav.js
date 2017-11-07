import React from "react";
import './Nav.css';

const Nav = () =>
<div className="container">
	<nav className="navbar navbar-default">
	  <div className="container-fluid">
	    <div className="navbar-header">
	      <a className="navbar-brand" href="/">NYT-React</a>
	    </div>
	    <ul className="nav navbar-nav navbar-right">
	      <li className={window.location.pathname === "/" ? "active" : ""}><a href="/">Search</a></li>
	      <li className={window.location.pathname === "/saved" ? "active" : ""}><a href="/saved">Saved Articles</a></li>
	    </ul>
	  </div>
	</nav>
</div>

export default Nav;
