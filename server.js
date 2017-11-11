const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var methodOverride = require("method-override");

// Require all models
const db = require("./models");

//establish port
const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
} else {
	app.use(express.static("public"));
};

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
require("./routes/api-routes.js")(app);

// Start the server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
