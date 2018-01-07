$(document).ready(function () {
    var categoriesCarousel = $('.categories-carousel').owlCarousel({
        dots: false,
        margin: 10,
        items: 5
    });

    var carouselControll = $('[data-carousel]');

    var carousels = {
        'categories': categoriesCarousel
    };

    carouselControll.on('click', function () {
        var relCarousel = $(this).attr('data-carousel');
        var direction = $(this).attr('data-direction');

        carousels[relCarousel].trigger(direction + '.owl.carousel');
    });
});