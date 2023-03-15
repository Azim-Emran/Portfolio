//For fixed nav bar
const nav = document.querySelector('nav');
const navTop = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= navTop) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        nav.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);

//For page navigation
var links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            event.preventDefault();
            var navbarHeight = document.querySelector('nav').offsetHeight;
            var targetPosition = target.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// For burger icon
function burgerFunction(x) {
    x.classList.toggle("change");
}

function navBarFunction() {
    var x = document.getElementById("navBarList");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// function navBarFunction() {
//     var x = document.getElementById("navBarList");
//     x.classList.toggle("show");
//   }

// // Get the X button element
// const xButton = document.querySelector('.x-button');
// // Get the button element that will display the contact-me-container
// const displayButton = document.getElementById('contactMeBtn');

// // Get the contact-me-container element
// const contactMeContainer = document.querySelector('.contact-me-container');

// // Add a click event listener to the X button
// xButton.addEventListener('click', () => {
//   // Hide the contact-me-container element
//   contactMeContainer.style.display = 'none';
// }); 

// displayButton.addEventListener('click', () => {
//     // Show the contact-me-container element
//     contactMeContainer.style.display = 'block';
//   });