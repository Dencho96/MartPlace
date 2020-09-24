var mySwiper = new Swiper('.features__slider', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.features__slide-next',
        prevEl: '.features__slide-prev',
    },

})

var mySwiperFeed = new Swiper('.followers-feed__slider', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.followers-feed__slide-next',
        prevEl: '.followers-feed__slide-prev',
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