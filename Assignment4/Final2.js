// Credit: https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex1 = 1;
var slideIndex2 = 1;

function plusSlides(n, slideshow) {
    if (slideshow === 'slideshow1') {
        showSlides(slideIndex1 += n, 'slideshow1');
    } else if (slideshow === 'slideshow2') {
        showSlides(slideIndex2 += n, 'slideshow2');
    }
}

function currentSlide(n, slideshow) {
    if (slideshow === 'slideshow1') {
        showSlides(slideIndex1 = n, 'slideshow1');
    } else if (slideshow === 'slideshow2') {
        showSlides(slideIndex2 = n, 'slideshow2');
    }
}

function showSlides(n, slideshow) {
    var i;
    var slides = document.getElementsByClassName(slideshow === 'slideshow1' ? 'mySlides1' : 'mySlides2');
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideshow === 'slideshow1' ? slideIndex1 = 1 : slideIndex2 = 1;
    }

    if (n < 1) {
        slideshow === 'slideshow1' ? slideIndex1 = slides.length : slideIndex2 = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideshow === 'slideshow1' ? slideIndex1 - 1 : slideIndex2 - 1].style.display = "block";
    dots[slideshow === 'slideshow1' ? slideIndex1 - 1 : slideIndex2 - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides(1, 'slideshow1');
  showSlides(1, 'slideshow2');
});

// End Credit

//Credit: https://www.w3schools.com/howto/howto_js_dropdown_sidenav.asp

document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            console.log("Dropdown button clicked"); // Add this line for debugging
            this.classList.toggle("active3");
            var dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle("show");
        });
    }
});
