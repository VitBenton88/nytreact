import axios from "axios";

export default {
  // Gets all books
  getArticles: function() {
    return axios.get("/api/books");
  }
};