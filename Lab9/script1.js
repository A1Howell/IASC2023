// Creates an instance of date when the page loads
var start = new Date();

function stopTime() {
  // Makes an instance of date when the button is pressed
  var stop = new Date();

  // Get the time in millieseconds since the page was loaded
  var start = new Date();
  var millisecondsPassed = stop.getTime() - start.getTime();

  // Calculating the number of millisecondsPassed
  var secondsPassed = Math.floor(millisecondsPassed / 600);

  //Display number of seconds in a pop up
  alert("You have been on the page for:" + secondsPassed + "seconds");
}
