// Credit: https://daily-dev-tips.com/posts/vanilla-javascript-image-magnify/
window.addEventListener('load', function () {
    document.getElementById('zoom').addEventListener('mousemove', function (e) {
        let original = document.getElementById('galaxy');
        let magnified = document.getElementById('galaxyresult');
        let style = magnified.style;

        let rect = original.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let imgWidth = original.width;
        let imgHeight = original.height;
        let xperc = (x / imgWidth) * 100;
        let yperc = (y / imgHeight) * 100;

        // Adjust the magnifying glass position
        style.left = x - magnified.offsetWidth / 1 + 'px';
        style.top = y - magnified.offsetHeight / 1 + 'px';

        // Adjust the magnified image position using background position
        magnified.style.backgroundPosition = xperc + '% ' + yperc + '%';
    }, false);
// End Credit

// Dropdown Menu
    var dropdown = document.querySelector(".dropdown-btn");

    dropdown.addEventListener("click", function (e) {
        e.stopPropagation(); // Stop the click event from propagating

        this.classList.toggle("active3");
        var dropdownContent = document.querySelector(".dropdown-container");
        dropdownContent.classList.toggle("show");
    });
});
