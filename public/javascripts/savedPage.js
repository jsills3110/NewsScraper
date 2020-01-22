$(document).on("click", ".note-modal", function(event) {
    event.preventDefault();
    $("#modal-body").empty();

    const id = $(this).attr("data-id");
    const title = $(this).attr("data-title");
    const link = $(this).attr("data-link");

    let saveNote = $("#save-note");
    saveNote.attr("data-id", id);
    saveNote.attr("data-title", title);
    saveNote.attr("data-link", link);

    $.ajax({
        method: "GET",
        url: "/api/note/" + id
    }).then(function(notes) {
        const h5 = $("<h5>" + title + "</h5>");
        $("#modal-body").append(h5);

        if (notes.length > 0) {
            let listGroup = $("<ul class='list-group'>");
            for (let i = 0; i < notes.length; i++) {
                let listItem = $("<li class='list-group-item'>" + notes[i].body + "</li>");
                let deleteButton = $("<button type='button' class='btn btn-danger mr-2 delete-note' data-id='" + 
                    notes[i]._id + "'>X</button>");
                listItem.prepend(deleteButton);
                listGroup.append(listItem);
            }
            $("#modal-body").append(listGroup);
        }

        let form = $("<form>");
        let div = $("<div class='form-group'>");
        div.append($("<label for='note-text' class='col-form-label'>Note:</label>"));
        div.append($("<textarea class='form-control' id='note-text'></textarea>"));
        form.append(div);

        $("#modal-body").append(form);
    });
});

$(document).on("click", ".delete-article", function(event) {
    event.preventDefault();

    const article = {
        _id: $(this).attr("data-id"),
        title: $(this).attr("data-title"),
        link: $(this).attr("data-link")
    };
    $.ajax({
        method: "DELETE",
        url: "/api/article",
        data: article
    }).then(function() {
        location.reload(true);
    });
});

$("#save-note").on("click", function(event) {
    event.preventDefault();
    const note = {
        _articleId: $(this).attr("data-id"),
        body: $("#note-text").val().trim()
    };

    $.ajax({
        method: "POST",
        url: "/api/note",
        data: note
    }).then(function(data) {
        location.reload(true);
    });
});

$(document).on("click", ".delete-note", function(event) {
    event.preventDefault();

    const note = {
        _id: $(this).attr("data-id")
    };

    $.ajax({
        method: "DELETE",
        url: "/api/note",
        data: note
    }).then(function(data) {
        location.reload(true);
    });
});