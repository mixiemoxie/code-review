// Business logic
var myFunction = function(userNumber) {
  var results = []; // The function returns an array

  for (var i = 1 ; i <= userNumber; i ++) {
  // sets the variable before the loop starts (var i = 1), defines the condition for the loop to run, then increases the value each time the code block in the loop has been executed
    if (i % 2 === 0) {
      results.push(userNumber * 2);
    } else if (i % 3 === 0) {
      results.push(userNumber * 3);
    } else {
      results.push(i);
    }
  }
  return results;
};

// User interface logic. Gets the user input and runs that number through the business logic and displays each item in the array as a list item.
$(document).ready(function() {
  $("button#submit").click(function(event) {
    $("#outcome").empty();
    var userNumber = parseInt($("input#number").val());
    var outcome = myFunction(userNumber);

    // $("#outcome").append("<ul>");
    outcome.forEach(function(singleResult)  {
      $("#outcome").append("<li>" + singleResult + "</li");
    });
    // $("#outcome").append("</ul");

      event.preventDefault();
  });
});
