// Credit: https://www.w3schools.com/howto/howto_css_modals.asp
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal and buttons
    var modal = document.getElementById('myModal');
    var openModalBtn = document.getElementById('openModalBtn');
    var closeModalBtn = document.getElementById('closeModalBtn');

    // Function to open the modal
    function openModal() {
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Event listeners
    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);

    // Close the modal if the overlay is clicked
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
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

// Credit: https://www.w3docs.com/snippets/javascript/how-to-create-a-popup-form-using-javascript.html#google_vignette
 setTimeout(function() {
        showPopup();
    }, 30000);

    // Function to show the popup
    function showPopup() {
        var popup = document.getElementById('popupContainer');
        popup.style.display = 'block';
    }

    // Function to close the popup
    function closePopup() {
        var popup = document.getElementById('popupContainer');
        popup.style.display = 'none';
    }
