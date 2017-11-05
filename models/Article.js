var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// This is similar to a Sequelize model
var ArticleSchema = new Schema({
//title of article
  title: {
    type: String,
    required: true,
    unique: true
  },
//date article was published
  date: {
    type: String,
    required: true
  },
//url for article
  url: {
    type: String,
    required: true
  }
  
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
