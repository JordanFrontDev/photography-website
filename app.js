const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__list');
    const navLinks = document.querySelectorAll('.nav__list li');

   
    burger.addEventListener('click', () => {
         ////toggle nav
        nav.classList.toggle('nav__active');

        ///animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        });
        ///burger animation 
        burger.classList.toggle('toggle');

    });


}

navSlide();