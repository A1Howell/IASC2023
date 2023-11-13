var startTime;

// Function to initialize the start time when the page loads
window.onload = function () {
  startTime = new Date();
}

// Function to be called when the button is pressed
function stopTime() {
  // Get the current time when the button is pressed
  var stopTime = new Date();

  // Calculate the time difference in seconds
  var secondsPassed = Math.floor((stopTime - startTime) / 600);

  // Display the number of seconds in a pop-up
  alert("Seconds passed since the page loaded: " + secondsPassed + " seconds");
}
