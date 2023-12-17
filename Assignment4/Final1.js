//This is a timer that displays how long the user has been on the page
function startTimer(display) {
    var startTime = new Date().getTime(); // Get the current time when the page loads

    setInterval(function () {
        var currentTime = new Date().getTime();
        var elapsedTimeInSeconds = (currentTime - startTime) / 1000; // Convert milliseconds to seconds

        display.textContent = "You have been on this page for " + elapsedTimeInSeconds.toFixed(2) + " seconds. There are 31,557,600 seconds in a light year, that's a long ways away!";
    }, 1000);
}

window.onload = function () {
    var display = document.querySelector('#lightYearTimerDisplay');
    startTimer(display);
};

// Credit: https://www.freecodecamp.org/news/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08
//The facts are from the website cited in the footer all from (Graaf, 2023).
var facts = [
    "Mercury & Venus are the only 2 planets in our solar system that have no moons.",
    "Our solar system is 4.57 billion years old.",
    "The largest volcano in our solar system is on Mars. It's called Olympus Mons.",
    "The Milky Way galaxy is 105,700 light-years wide.",
    "There are more stars in the universe than there are grains of sand on Earth.",
    "The Great Red Spot on Jupiter is a giant storm that has raged for at least 350 years.",
    "Footprints left on the Moon won’t disappear as there is no wind.",
    "The Martian day is 24 hours 39 minutes and 35 seconds long.",
    "Earth is the only planet not named after a God.",
    "Pluto is smaller than the United States."
];

function newFact() {
    var randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById('factGeneratorDisplay').innerHTML = facts[randomNumber];
}
