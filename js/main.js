/* Global Variables */

const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav');

navMenu.style.height = '0px';

const toggleNav = () => {
    if (navMenu.style.height == '0px') {
        navMenu.style.height = '285px';
        menuButton.className = 'fas fa-times';
    } else {
        navMenu.style.height = '0px';
        menuButton.className = 'fas fa-bars';
    }
};

menuButton.addEventListener('click', toggleNav)