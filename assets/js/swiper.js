


let reviewsSwiper = new Swiper(".reviews-swiper", {
    spaceBetween: 30,
    slidesPerView: 3,
    loop:true,

    pagination: {
        el: '.reviews-pagination',
    },
    navigation: {
        nextEl: '.reviews-button-prev',
        prevEl: '.reviews-button-next',
    },
    breakpoints: {
        320: {slidesPerView: 1,},
        540: {slidesPerView: 1,},
        576: {slidesPerView: 1.5},
        779: {slidesPerView: 2},
        954: {slidesPerView: 2.4},
        1139: {slidesPerView: 2.5},
        1200: {slidesPerView: 3},

    },



});



let howWorkSwiper = new Swiper(".how-work-swiper", {
    spaceBetween: 30,
    slidesPerView: 3,
    loop:true,
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.reviews-button-prev',
        prevEl: '.reviews-button-next',
    },
    breakpoints: {
        320: {slidesPerView: 1,},
        540: {slidesPerView: 1,},
        576: {slidesPerView: 1.5},
        779: {slidesPerView: 2},
        954: {slidesPerView: 2.4},
        1139: {slidesPerView: 2.5},
        1200: {slidesPerView: 3},

    },



});




