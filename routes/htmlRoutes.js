var axios = require("axios");
var cheerio = require("cheerio");

module.exports = function(app) {
    app.get("/", function(req, res) {
        // First, we grab the body of the html with axios
        axios.get("https://www.thestranger.com/").then(function(response) {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            var $ = cheerio.load(response.data);
            // console.log(cheers);

            // Now, we grab every h2 within an article tag, and do the following:
            $("h2.headline").each(function(i, element) {
                // Save an empty result object
                var result = {};

                console.log(i);
                console.log(element);
                // // Add the text and href of every link, and save them as properties of the result object
                // result.title = $(this)
                //     .children("a")
                //     .text();
                // result.link = $(this)
                //     .children("a")
                //     .attr("href");

                // // Create a new Article using the `result` object built from scraping
                // db.Article.create(result)
                //     .then(function(dbArticle) {
                //         // View the added result in the console
                //         console.log(dbArticle);
                //     })
                //     .catch(function(err) {
                //         // If an error occurred, log it
                //         console.log(err);
                //     });
            });

            // Send a message to the client
            // res.send("Scrape Complete");
            res.render("index", { title: "Seattle News Scraper"});
        });
    });

    app.get("/articles", function(req, res) {
        res.render("articles", { title: "Saved Articles" });
    });
};