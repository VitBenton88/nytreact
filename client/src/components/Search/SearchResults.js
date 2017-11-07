import React, { Component } from "react";
import './SearchResults.css';

const SearchResults = props =>
<div className="container">
<div className="panel-heading">
	<h1 className="panel-title">Results</h1>
</div>
<div className="panel-body">
{props.results.map(result =>
  <ul className="list-group search-results">
      <li key={result.headline.main} className="list-group-item">
        <h2><i>{result.headline.main}</i></h2>
        <p>Date Published: {result.pub_date}</p>
        <button className="btn btn-success"><a href={result.web_url} target="_blank">View Article</a></button>
        <button className="btn btn-default saveBtn">Save</button>
      </li>
  </ul>
    )}
  </div>
  </div>

export default SearchResults;