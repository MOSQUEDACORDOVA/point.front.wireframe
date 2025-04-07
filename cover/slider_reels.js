document.addEventListener('DOMContentLoaded', function() {
    let swiperInitialized = false; 

    const swiper = new Swiper('.swiperMC', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 4,
        centeredSlides: true,
        speed: 4800,
        mousewheel: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            },
        },
        on: {
            init: function () {
                swiperInitialized = true;
            },
        }
    });
});