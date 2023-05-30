// Add the "show" class to the home section when it comes into view
window.addEventListener('scroll', function () {
    var homeSection = document.getElementById('home');
    var sectionPosition = homeSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3; // Adjust the divisor as needed

    if (sectionPosition < screenPosition) {
        homeSection.classList.add('show');
    }
});