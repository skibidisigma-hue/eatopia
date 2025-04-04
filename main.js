// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");
// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");
    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if (card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}
filterButtons.forEach(button => button.addEventListener("click", filterCards));

function showAlert(event) {
    event.preventDefault();
    alert("Your table has been booked successfully!");
}
function showAlert2(event) {
    event.preventDefault();
    alert("Your maessage has been sent successfully!");
}
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");
    const heroContainer = document.querySelector(".hero-container");

    navbarToggler.addEventListener("click", function () {
        setTimeout(() => {
            if (navbarCollapse.classList.contains("show")) {
                heroContainer.classList.add("navbar-expanded");
            } else {
                heroContainer.classList.remove("navbar-expanded");
            }
        }, 300);
    });
});
