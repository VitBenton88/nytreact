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
    API.nyAPI(this.state.search, this.state.startYear, this.state.endYear)
    .then(res => {
	    const articlesArr = res.data.response.docs;
	    console.log(articlesArr);
	    this.setState({ results: articlesArr });
	});
 };

 confirmSave = () => {
 	alert("Article Saved!")
 };

 saveArticle = title => {

 	const arr = this.state.results;
 	let article = {};
 	console.log(title);

 	for (let i = 0; i < arr; i++) {
 		if (arr[i].headline.main == title){
 			article = {
 				title: arr[i].headline.main,
 				date: arr[i].pub_date,
 				url: arr[i].web_url
 			}
 		}
 	}

    API.saveArticle(article)
      .then(res => this.confirmSave())
      .catch(err => console.log(err));
  };

  render() {
    return (
    <div>
	    <div className="container">
		    <div className="panel panel-default">
		     <div className="panel-heading"><i className="fa fa-search" aria-hidden="true"></i> Search</div>
		     <div className="panel-body">
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
				        className="btn btn-info"
				      >Search</button>
			  </form>
			  </div>
			</div>
		</div>

		<div className="container">
			<div className="panel panel-default">
				<SearchResults 
				results={this.state.results}
				onClick={this.saveArticle}
				/>
			</div>
		</div>

	</div>

    );
  }
}

export default Search;