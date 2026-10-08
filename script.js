const form = document.querySelector(".contact-form form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your inquiry has been received.");

    form.reset();

});
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("active");

});

navbar.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });

});
