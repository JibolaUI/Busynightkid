/*================ toggle icon navbar ==============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*================ scroll section active link ==============*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onsroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.oofsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']');
            });
        };
    });
    /*================ sticky navbar ==============*/
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);
};


/*================ scroll reveal ==============*/
ScrollReveal({
    // reset: true,
    distance: '80px'
    duration: 2000
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact', { origin: 'bottom' });
ScrollReveal().reveal('home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('home-content p, .about-content', { origin: 'right'});


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Engineer', 'UX Designer', 'UX Researcher'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true
});