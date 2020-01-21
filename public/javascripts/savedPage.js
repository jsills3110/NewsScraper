$(".note-modal").on("click", function(event) {
    event.preventDefault();
    $("#modal-body").empty();

    const title = $(this).attr("data-title");
    const link = $(this).attr("data-link");

    let saveNote = $("#save-note");
    saveNote.attr("data-title", title);
    saveNote.attr("data-link", link);

    const h5 = $("<h5>" + title + "</h5>");
    $("#modal-body").append(h5);

    let form = $("<form>");
    let div = $("<div class='form-group'>");
    div.append($("<label for='note-text' class='col-form-label'>Note:</label>"));
    div.append($("<textarea class='form-control' id='note-text'></textarea>"));
    form.append(div);

    $("#modal-body").append(form);
});

$("#save-note").on("click", function(event) {
    event.preventDefault();

});