import React, { Component } from "react";
import API from "../Search/API";
import './Articles.css';

class Articles extends Component {

  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

   loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

   confirmDelete = () => {
 	alert("Article Deleted!")
 };

    deleteArticle = event => {

 		const id = event.target.getAttribute("data-id");
 		const article = {id};

 			API.deleteArticle(article)		
      		.then(res => this.loadArticles())
     		 .catch(err => console.log(err));
 };


  render() {
    return (
    <div>
	    <div className="container">
		    <div className="panel panel-default">
		     <div className="panel-heading"><i className="fa fa-floppy-o" aria-hidden="true"></i> Saved Articles</div>
		     <div className="panel-body">
		     	{this.state.articles.map(article =>
				  <ul key={article._id} className="list-group articles">
				      <li className="list-group-item">
				        <h2><i>{article.title}</i></h2>
				        <p>Date Published: {article.date}</p>
				       <a href={article.url} target="_blank"><button className="btn btn-success">View Article</button></a>
				        <button data-id={article._id} onClick={this.deleteArticle} className="btn btn-danger deleteBtn">Delete</button>
				      </li>
				  </ul>
				    )}
			  </div>
			</div>
		</div>

	</div>

    );
  }
}

export default Articles;