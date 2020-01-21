$("#clear-articles").on("click", function(event) {
    event.preventDefault();
    $("#articles").empty();

    const row = $("<div class='row justify-content-center'>");
    const col = $("<div class='col-8'>");

    const card = $("<div class='card my-3'>");
    card.append($("<h5 class='card-title mx-3 mt-3'>There are no articles here yet.</h5>"));
    card.append($("<div class='card-body'>Click on Scrape New Articles to view some!</div>"));
    
    col.append(card);
    row.append(col);
    $("#articles").append(row);
});

$("#save-article").on("click", function(event) {
    event.preventDefault();
    let article = {
        title: $(this).attr("data-title"),
        link: $(this).attr("data-link")
    }
    // $.post()
});