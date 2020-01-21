var db = require("../models");

module.exports = function(app) {

    app.post("/api/article", function(req, res) {
        db.Article.find({ title: req.body.title }).then(function(dbArticle) {
            if (dbArticle.length === 0) {
                db.Article.create(req.body)
                    .then(function(newArticle) {
                        res.json(newArticle);
                    }).catch(function(err) {
                        res.json(err);
                    });
            } else {
                res.json({ "_id": "none" });
            }
        }).catch(function(err) {
            res.json(err);
        });;
    });

    app.post("/api/note", function(req, res) {
        db.Note.create(req.body)
            .then(function(dbNote) {
                console.log(dbNote);
            }).catch(function(err) {
                console.log(err);
            });
    });
};