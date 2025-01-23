let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle menu visibility when clicking the menu icon
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close the menu when scrolling
window.onscroll = () => {
    if (navbar.classList.contains('active')) {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

// Close the menu when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});

// Typing Text 
const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Loss', 'Weight Lifting', 'Running'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
});
