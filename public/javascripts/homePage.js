$("#clear-articles").on("click", function(event) {
    event.preventDefault();
    $("#articles").empty();
    const row = $("<div class='row justify-content-center'>");
    const col = $("<div class='col-8'>");
    const card = $("<div class='card my-3'>");
    const cardTitle = $("<h5 class='card-title mx-3 mt-3'>There are no articles here yet.</h5>");
    const cardBody = $("<div class='card-body'>Click on Scrape New Articles to view some!</div>");

    card.append(cardTitle);
    card.append(cardBody);
    col.append(card);
    row.append(col);
    $("#articles").append(row);
})