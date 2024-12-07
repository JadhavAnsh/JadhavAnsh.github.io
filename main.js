const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    var navbarLinks = document.querySelector('.navbar-links');
    navbar.classList.toggle('active'); // Toggles the hamburger-to-cross transformation
    navbarLinks.classList.toggle('active'); // Toggles the visibility of the menu
  }
  
  