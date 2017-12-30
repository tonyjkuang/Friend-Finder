var friends = require("../data/friends");

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newFriend = {
                "name": $('#name').val().trim(),
                "photo": $('#photo').val().trim(),
                "scores": [parseInt($('#one').val()),
                    parseInt($('#two').val()),
                    parseInt($('#three').val()),
                    parseInt($('#four').val()),
                    parseInt($('#five').val()),
                    parseInt($('#six').val()),
                    parseInt($('#seven').val()),
                    parseInt($('#eight').val()),
                    parseInt($('#nine').val()),
                    parseInt($('#ten').val())
                ]
            };

    // Send the POST request.
    $.ajax("/api/friends", {
      type: "POST",
      data: newFriend
    }).then(
      function() {
        console.log("friend added");
        // Reload the page to get the updated list
        console.log(newFriend);
      }
    );
  });

});