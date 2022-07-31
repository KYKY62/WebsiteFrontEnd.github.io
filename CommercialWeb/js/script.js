const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function () {
    if (window.scrollY > 1) {
        navbar.classList.replace('bg-transparent', 'nav-color');
    } else if (this.window.scrollY <= 0) {
        navbar.classList.replace('nav-color', 'bg-transparent');
    }
});

