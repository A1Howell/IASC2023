// Prompt the user to enter their age
var userAge = prompt("What is your age?");

// Convert the entered age to a Number
var ageAsNumber = parseInt(userAge);

// Get the current year
var currentYear = new Date().getFullYear();

// Calculate the birth year
var birthYear = currentYear - ageAsNumber;

// Display the birth year on the screen
document.body.innerHTML = "<h1>Your birth year is: " + birthYear + "</h1>";
