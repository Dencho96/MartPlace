var mySwiper = new Swiper('.features__slider', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 7000,
    },
    navigation: {
        nextEl: '.features__btn--next',
        prevEl: '.features__btn--prev',
    },

})

var mySwiperFeed = new Swiper('.followers-feed__slider', {
    slidesPerView: 3,
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: 'followers-feed__btn--prev',
        prevEl: 'followers-feed__btn--prev',
    },
})

var feedback = new Swiper('.feedback__slider', {
    slidesPerView: 2,
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: 'feedback__nav-btn--next',
        prevEl: 'feedback__nav-btn--prev',
    },
})

$(function() {

    $('.product__rating').rateYo({
        rating: 5,
        starWidth: "15px",
        spacing: "3px",
        ratedFill: "#FFC000",
    });

    var mixer = mixitup('.newest__product-inner');

    $('.block-intro__filter-by').on('click', function() {
        $('.block-intro__menu').toogleClass(' d-block');
    });

});