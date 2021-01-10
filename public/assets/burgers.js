$(function() {
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      // User input for our new burger
      let newBurger = {
        burger_name: $("#newBurger").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function() {
        // Reloads the page to get the updated list
        location.reload();
      });
    });
  
      // Eating our burger
    $(".nom").on("click", function() {
      let id = $(this).data("id");

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(function() {
        // Reloads the page to get the updated list
        location.reload();
      });
    });

      // Delete eaten burger
    $(".deleteBurger").on("click", function() {
      let id = $(this).data("id");

      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(function() {
        // Reloads the page to get the updated list
        location.reload();
      });
    });
  });
  