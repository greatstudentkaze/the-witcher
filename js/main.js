const mySwiper = new Swiper('.swiper-container', {
    speed: 500,
    navigation: {
      nextEl: '.main__episodes-arrow'
    },
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        541: {
            slidesPerView: 2,
        }
    }
});

const menuBtn = document.querySelector('.header__menu-btn'),
    menu = document.querySelector('.header');

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('header--active');
    menuBtn.classList.toggle('header__menu-btn--active');
});