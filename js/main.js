/* Global Variables */

const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav');
const navItems = document.getElementById('nav-items');

const toggleNav = () => {
    if ((navMenu.style.height == '285px') || (navMenu.style.height === 'unset')) {
        navMenu.style.height = '0px';
        navItems.style.height = '0px';
        menuButton.className = 'fas fa-bars';
    } else if (navMenu.style.height = '0px') {
        navMenu.style.height = '285px';
        navItems.style.height = '260px';
        navItems.style.transition = 'all 0.3s ease-out';
        navMenu.style.transition = 'all 0.3s ease-out';
        menuButton.className = 'fas fa-times';
    }
};

const navSize = () => {
    if (screen.availWidth < 768) {
        navMenu.style.height = '0px';
        navItems.style.height = '0px';
        menuButton.className = 'fas fa-bars';
        navMenu.style.transition = 'none';
    } else if (screen.availWidth >= 768) {
        navMenu.style.height = 'unset';
        navItems.style.height = 'unset'
        navMenu.style.transition = 'none';
        menuButton.className = 'fas fa-times';
    }
}

window.addEventListener('resize', navSize);
menuButton.addEventListener('click', toggleNav);