import React from "react";
import './Nav.css';

const Nav = () =>
<div className="container">
	<nav class="navbar navbar-default">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <a class="navbar-brand" href="/">NYT-React</a>
	    </div>
	    <ul class="nav navbar-nav navbar-right">
	      <li><a href="#">Search</a></li>
	      <li><a href="#">Saved Articles</a></li>
	    </ul>
	  </div>
	</nav>
</div>

export default Nav;
