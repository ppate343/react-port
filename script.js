window.addEventListener("scroll", function () {
    var navbar = document.querySelector('header');
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
});





// Add the "show" class to the home section when it comes into view
window.addEventListener('DOMContentLoaded', function () {
    var homeSection = document.getElementById('home');
    var sectionPosition = homeSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight; // Adjust the divisor as needed

    if (sectionPosition < screenPosition) {
        homeSection.classList.add('show');
    }
});


window.addEventListener('scroll', function () {
    var containerElements = document.querySelectorAll('.sub-container');
    var screenPosition = window.innerHeight / 1.3; // Adjust the divisor as needed

    containerElements.forEach(function (element) {
        var position = element.getBoundingClientRect().top;
        if (position < screenPosition) {
            element.classList.add('show');
        }
    });
});

window.addEventListener('scroll', function () {
    var aboutSection = document.getElementById('about');
    var sectionPosition = aboutSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight; // Adjust the divisor as needed

    if (sectionPosition < screenPosition) {
        aboutSection.classList.add('show');
    }
});


