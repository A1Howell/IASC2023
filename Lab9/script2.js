// Prompt the user to enter their age
var ageInput = prompt("Please enter your age:");

// Convert the entered age to a number
var age = parseInt(ageInput);

// Get the current year
var currentYear = new Date().getFullYear();

// Calculate the birth year
var birthYear = currentYear - age;

// Display the birth year on the screen
console.log("Your birth year is: " + birthYear);

// Display the birth year using an alert 
alert("Your birth year is: " + birthYear);
