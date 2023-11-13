var startTime;

// Function to initialize the start time when the page loads
window.onload = function () {
  startTime = performance.now();
}

// Function to be called when the button is pressed
function stopTime() {
  // Get the current time when the button is pressed
  var stopTime = performance.now();

  // Calculate the time difference in milliseconds
  var millisecondsPassed = stopTime - startTime;

  // Convert milliseconds to seconds
  var secondsPassed = Math.floor(millisecondsPassed / 1000);

  // Display the number of seconds in a pop-up
  alert("Seconds passed since the page loaded: " + secondsPassed + " seconds");
}
