// Variable to store the start time
var startTime;

// Function to initialize the start time when the page loads
window.onload = function () {
  startTime = new Date();
}

// Function to be called when the button is pressed
function stopTime() {
  // Create an instance of date when the button is pressed
  var stopTime = new Date();

  // Get the time in milliseconds since the page was loaded
  var millisecondsPassed = stopTime.getTime() - startTime.getTime();

  // Calculate the number of seconds passed
  var secondsPassed = Math.floor(millisecondsPassed / 1000);

  // Display the number of seconds in a pop-up
  alert("Seconds passed since the page loaded: " + secondsPassed + " seconds");
}
