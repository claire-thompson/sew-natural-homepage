/* Global Variables */

const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav');

navMenu.style.display = 'none';

const toggleNav = () => {
    if (navMenu.style.display == 'none') {
        navMenu.style.display = 'block';
        menuButton.className = 'fas fa-times';
    } else {
        navMenu.style.display = 'none';
        menuButton.className = 'fas fa-bars';
    }
};

menuButton.addEventListener('click', toggleNav)