module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index", { title: "Seattle News Scraper" });
    });

    app.get("/articles", function(req, res) {
        res.render("articles", { title: "Saved Articles" });
    });
}