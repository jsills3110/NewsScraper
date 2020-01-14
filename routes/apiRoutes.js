module.exports = function(app) {
    app.post("/api/note", function(req, res) {
        res.render("Note posted");
    });
}