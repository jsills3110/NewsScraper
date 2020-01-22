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
            .then(function(newNote) {
                res.json(newNote);
            }).catch(function(err) {
                res.json(err);
            });
    });

    app.get("/api/note/:id", function(req, res) {
        console.log(req.params.id);
        db.Note.find({ _articleId: req.params.id }).then(function(dbNotes) {
            res.json(dbNotes);
        }).catch(function(err) {
            res.json(err);
        });;
    });

    app.delete("/api/article", function(req, res) {
        console.log(req.body);
        db.Article.deleteOne(req.body)
            .then(function(dbDeleted) {
                res.json(dbDeleted);
            }).catch(function(err) {
                res.json(err);
            });
    });

    app.delete("/api/note", function(req, res) {
        console.log(req.body);
        db.Note.deleteOne(req.body)
            .then(function(dbDeleted) {
                res.json(dbDeleted);
            }).catch(function(err) {
                res.json(err);
            });
    });
};