const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const mainContent = document.querySelector('main'); // Simplified selector

if (hamburgerMenu && navLinks && mainContent) {
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mainContent.inert = navLinks.classList.contains('active');
    });

    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickInsideHamburger = hamburgerMenu.contains(event.target);
        const isMenuActive = navLinks.classList.contains('active');

        if (isMenuActive && !isClickInsideMenu && !isClickInsideHamburger) {
            navLinks.classList.remove('active');
            mainContent.inert = false; // Remove inert when closing by outside click
        }
    });
}
