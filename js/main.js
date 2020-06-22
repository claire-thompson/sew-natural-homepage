/* Global Variables */

const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav');

navMenu.style.display = 'none';

const toggleNav = () => {
    if (navMenu.style.display == 'none') {
        navMenu.style.display = 'flex';
    } else {
        navMenu.style.display = 'none';
    }
};

menuButton.addEventListener('click', toggleNav)