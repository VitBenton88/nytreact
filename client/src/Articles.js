import React, { Component } from "react";
import Main from "./components/Main/Main";
import API from "./components/Search/API";

class Articles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadBooks();
  }

    loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Main />
    );
  }
}

  export default Articles;