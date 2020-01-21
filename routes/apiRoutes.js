var db = require("../models");

module.exports = function(app) {

    app.post("/api/article", function(req, res) {
        db.Article.create(result)
            .then(function(dbArticle) {
                console.log(dbArticle);
            }).catch(function(err) {
                console.log(err);
            });
    });

    app.post("/api/note", function(req, res) {
        db.Note.create(result)
            .then(function(dbArticle) {
                console.log(dbArticle);
            }).catch(function(err) {
                console.log(err);
            });
        res.render("Note posted");
    });
};