const settingsSlider = {
    dots: true,
    arrows: true,
    infinite: true,
    lazyload: 'ondemand',
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    
};


$(document).ready(function () {
    $('.slider').slick(settingsSlider);
});