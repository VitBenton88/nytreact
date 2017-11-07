import React, { Component } from "react";
import API from "./API";
import SearchResults from "./SearchResults";

class Search extends Component {
  state = {
    search: "",
    startYear: 0,
    endYear: 0,
    results: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API(this.state.search, this.state.startYear, this.state.endYear)
    .then(res => this.setState({ results: res.data.response.docs }))
 };

  render() {
    return (
    <div>
	    <div className="container">
		    <div className="panel panel-default">
		     <div class="panel-heading"><i class="fa fa-search" aria-hidden="true"></i> Search</div>
		     <div class="panel-body">
			    <form className="search">
				 	<div className="form-group">
				      <label>Topic:</label>
				      <input
				        type="text"
				        name="search"
				        onChange={this.handleInputChange}
				        className="form-control"
				        placeholder="Topic ..."
				      />
				    </div>
				    <div className="form-group">
				      <label>Start Year:</label>
				      <input
				        type="text"
				        name="startYear"
				        onChange={this.handleInputChange}
				        className="form-control"
				        placeholder="Start Year ..."
				      />
				    </div>
				    <div className="form-group">
				      <label>End Year:</label>
				      <input
				        type="text"
				        name="endYear"
				        onChange={this.handleInputChange}
				        className="form-control"
				        placeholder="End Year ..."
				      />
				    </div>
				     <button
				        type="submit"
				        onClick={this.handleFormSubmit}
				        className="btn btn-success"
				      >Search</button>
			  </form>
			  </div>
			</div>
		</div>

		<div className="container">
			<div className="panel panel-default">
				<SearchResults results={this.state.results} />
			</div>
		</div>

	</div>

    );
  }
}

export default Search;