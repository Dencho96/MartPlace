var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.block-intro__btn--next',
        prevEl: '.block-intro__btn--prev',
    },

})

$(function() {

    $(".product__rating").rateYo({
        rating: 5,
        starWidth: "15px",
        spacing: "3px"
    });

    $(".product__rating--sm").rateYo({
        rating: 5,
        starWidth: "13px",
        spacing: "3px"
    });


    var mixer = mixitup('.newest__product-inner');
});