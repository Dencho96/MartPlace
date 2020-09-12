var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})

$(function() {

    $(".product__rating").rateYo({
        rating: 5,
        starWidth: "15px",
        spacing: "3px"
    });

});