// Business logic
var myFunction = function(userNumber) {
  var results = []; // The function returns an array

  for (var i = 1 ; i <= userNumber; i ++) {
  // sets the variable before the loop starts (var i = 1), defines the condition for the loop to run, then increases the value each time the code block in the loop has been executed
    if (i % 2 === 0) {
      results.push(userNumber*2);
    } else if (i % 3 === 0) {
      results.push(userNumber*3);
    } else {
      results.push(i);
    }
  }
  return results;
};

// User interface logic. Gets the user input and runs that number through the business logic and displays each item in the array as a list item.
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#number").val());
    var results = myFunction(userNumber);
    $(#outcome).text(result);
  });
});
