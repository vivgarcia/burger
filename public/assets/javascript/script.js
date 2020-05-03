// $(function(){

//     $(".create-form").on("click", function(event){
//         event.preventDefault();

//         var newBurger = {
//             burger_name: $("#newburger").val().trim(),
//             devoured: 0
//         };

//         alert(newBurger.burger_name)
//         $.ajax("/api/burgers", {
//             type: "POST",
//             data: newBurger
//         }).then(function(){
//             console.log("Added new burger");
//             // Reload the page to get the updated burger list.
//             location.reload();
//         });
//     });

//     $(".eatburger").on("click", function(event) {
//         event.preventDefault();

//         var id = $(this).data("id");
//         var devouredState = {
//             devoured: 1
//         };

//         // Send the PUT request.
//         $.ajax("/api/burgers/" + id, {
//             type: "PUT",
//             data: devouredState
//         }).then(function() {
//             console.log("Burger devoured");
//             location.reload();
//         });
//     });

//     $(".trashburger").on("click", function(event) {
//         event.preventDefault();

//         var id = $(this).data("id");

//         // Send the DELETE request.
//         $.ajax({
//             type: "DELETE",
//             url: "/api/burgers/" + id
//         }).then(
//             location.reload()
//             );
//     });

// })

$(function() {
    // $(".create-form").on("click", function(event) {
    //     var id = $(this).data("id");
    //     var newSleep = $(this).data("newsleep");

    //     var newBurger = {
    //         burger_name: $("#newburger").val().trim(),
    //         devoured: 0
    //     };

    //   // Send the PUT request.
    //     $.ajax("/api/burgers" + id, {
    //         type: "PUT",
    //         data: newBurger
    //     }).then(
    //     function() {
    //         console.log("addede new burger", newBurger);
    //       // Reload the page to get the updated list
    //         location.reload();
    //     }
    //   );
    // });

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurgert = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

      // Send the POST request.
        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("created new cat");
          // Reload the page to get the updated list
            location.reload();
        }
        );
    });
    // $(".delete-cat").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/cats/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted cat", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });
  