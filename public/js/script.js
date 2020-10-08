$(function () {
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burg").val().trim()
      };
      
      console.log(newBurger);
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log(`created new burger`);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".devBurger").on("click", function(event) {
        var id = $(this).data("id");

        var confirmDev = $(this).data("neweaten") === false;

        var confirmDevState = {
            devour: confirmDev
        };
        console.log(`id: ${id} eaten: ${confirmDevState.devour}`);
    
        // Send the PUT request.
        $.ajax(`/api/burgers/${id}`, {
          type: "PUT",
          data: confirmDevState
        }).then(
          function() {
            console.log(`changed confirm state to: ${confirmDev}`);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  });
  