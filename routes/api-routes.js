// Dependencies
// =============================================================
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // find all stored articles
    app.get("/saved", function(req, res) {
        db.Article
            .find({})
            .then(function(dbArticle) {
                // render results into handelbars view
                console.log(dbArticle);
                res.send(dbArticle);
            })
            .catch(function(err) {
                // If an error occurred, send it to the client
                console.log(err);
            });

    });

    //save article to db
    app.post("/saved", function(req, res) {

        const title = req.body.title;
        const date = req.body.date;
        const url = req.body.url;

        const newArticle = { title, date, url };

        db.Comment
            .create(newArticle)
            .then(function(dbComment) {

                db.Article.findOneAndUpdate({ _id: articleID }, { $push: { comments: dbComment._id } }, function() {
                    res.send(true);
                });


            })
            .catch(function(err) {
                // If an error occurred, send it to the client
                console.log(err);
                res.send(false);
            });
    });

    //delete articles in DB
    app.delete("/saved", function(req, res) {

        var comment = req.params.id;

        db.Comment
            .deleteOne({ _id: comment })
            .then(function(dbComment) {
                res.redirect("/");
            })
            .catch(function(err) {
                // If an error occurred, send it to the client
                console.log(err);
                res.send(false);
            });
    });

    //get request to delete
    app.get("/about", function(req, res) {

        res.render("about");
    });
};