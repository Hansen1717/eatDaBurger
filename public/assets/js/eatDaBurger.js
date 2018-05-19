$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burgerName: $("#newBurg").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("New Burger Added");
                location.reload();
            }
        );
    });
    $(".devour").on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr("data-id")
        console.log(id);

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function() {
                console.log("Burger Devoured");
                location.reload();
            }
        );
    });
});