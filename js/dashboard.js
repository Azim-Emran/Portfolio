const contactMeContainer = document.querySelector('.contact-me-container');
const displayButton = document.querySelector('#contactMeBtn');
const closeButton = document.querySelector('.x-button');
const overlay = document.querySelector('.overlay');

// display the contact-me-container when clicking the display button
displayButton.addEventListener('click', function() {
  contactMeContainer.classList.add('show');
  overlay.classList.add('show-container');
});

overlay.addEventListener('click', function() {
    contactMeContainer.classList.remove('show');
    contactMeContainer.classList.add('hide'); 
    overlay.classList.remove('show-container');
});

// close the contact-me-container when clicking the close button
closeButton.addEventListener('click', function(event) { 
    event.stopPropagation(); // prevent the overlay from being clicked
    overlay.classList.remove('show-container');
    contactMeContainer.classList.remove('show');
    contactMeContainer.classList.add('hide'); // add hide class to trigger the transition
});

// remove the hide class after the transition ends
contactMeContainer.addEventListener('transitionend', function() {
  contactMeContainer.classList.remove('hide');
});
