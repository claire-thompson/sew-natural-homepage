/* Global Variables */

const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav');

const toggleNav = () => {

    if (navMenu.style.height == '285px') {
        navMenu.style.height = '0px';
        menuButton.className = 'fas fa-bars';
    } else {
        navMenu.style.height = '285px';
        menuButton.className = 'fas fa-times';
    }
};

menuButton.addEventListener('click', toggleNav)