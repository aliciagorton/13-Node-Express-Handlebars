$(function () {
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burg").val().trim(),
        //devoured: $("[name=devoured]:checked").val().trim()
        devoured: 0
      };
      
      console.log(newBurger);
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".devoBurg").on("click", function(event) {
        var id = $(this).data("id");

        // need to add in devour state variable
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: true
        }).then(
          function() {
            console.log("changed devoured to true");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  });
  