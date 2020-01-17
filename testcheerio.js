var axios = require("axios");
var cheerio = require("cheerio");
// var db = require("./models");
// var mongoose = require("mongoose");

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsScraper";
// mongoose.connect(MONGODB_URI);

// First, we grab the body of the html with axios
axios.get("https://www.thestranger.com/").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);

    // var promises = [];
    // $('p').each(function (idx, elem) {
    //   var article = new Article({content: $(this).html()});
    //   var promise = article.save();
    //   promises.push(promise); // db save async function or other async function
    // });
    // Promise.all(promises)
    //   .then(doSomethingOnSuccess)
    //   .catch(doSomethingOnError)
    //   .finally(mongoose.connection.close);

    var articles = [];

    $("h2.headline").each(function(i, element) {

        if (element.children[1].children[0].data !== undefined) {

            // Save an empty result object
            var result = {};

            // // Add the text and href of every link, and save them as properties of the result object
            result.title = element.children[1].children[0].data.trim();
            result.link = element.children[1].attribs.href;

            articles.push(result);
            console.log(result);

            // db.Article.findOne({ title: result.title }, function(err, response) {
            //     // console.log(response);
            //     if (response === null) {
            //         // Create a new Article using the `result` object built from scraping
            //         db.Article.create(result)
            //             .then(function(dbArticle) {
            //                 // View the added result in the console
            //                 console.log(dbArticle);
            //             })
            //             .catch(function(err) {
            //                 // If an error occurred, log it
            //                 console.log(err);
            //             });
            //     }
            // });
        }
    });

    console.log(articles);
    // Send a message to the client
    // res.send("Scrape Complete");
    // res.render("index", { title: "Seattle News Scraper", article: articles });
});