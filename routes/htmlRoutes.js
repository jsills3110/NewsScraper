var axios = require("axios");
var cheerio = require("cheerio");
// var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        
        // First, we grab the body of the html with axios
        axios.get("https://www.thestranger.com/").then(function(response) {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            var $ = cheerio.load(response.data);

            var articles = [];

            $("h2.headline").each(function(i, element) {

                if (element.children[1].children[0].data !== undefined) {

                    // Save an empty result object
                    var result = {};

                    // // Add the text and href of every link, and save them as properties of the result object
                    result.title = element.children[1].children[0].data.trim();
                    result.link = element.children[1].attribs.href;

                    articles.push(result);
                }
            });

            // Send a message to the client
            res.render("index", { title: "Seattle News Scraper", article: articles });
        });
    });

    app.get("/articles", function(req, res) {
        res.render("articles", { title: "Saved Articles" });
    });
};