import React, { Component } from "react";
import './SearchResults.css';

const SearchResults = props =>
<div>
<div className="panel-heading">
	<h1 className="panel-title">Results</h1>
</div>
<div className="panel-body">
{props.results.map(result =>
  <ul key={result.headline.main} className="list-group search-results">
      <li className="list-group-item">
        <h2><i>{result.headline.main}</i></h2>
        <p>Date Published: {result.pub_date}</p>
       <a href={result.web_url} target="_blank"><button className="btn btn-success">View Article</button></a>
        <button data-title={result.headline.main} onClick={props.onClick} className="btn btn-default saveBtn">Save</button>
      </li>
  </ul>
    )}
  </div>
  </div>

export default SearchResults;