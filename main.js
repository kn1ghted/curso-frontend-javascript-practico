// Constant for HTML DOM elements
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// Adds function for click event to the email link on header
menuEmail.addEventListener('click', toggleDesktopMenu);

// Toggle inactive class on class list of the email link on header
function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
}