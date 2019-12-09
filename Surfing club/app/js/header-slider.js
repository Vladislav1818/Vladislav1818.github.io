$(document).ready(function () {
    const headerSlider = $("#headerSlider");

    headerSlider.on('initialized.owl.carousel', function (event) {
        $('.slide-controls__active').text(event.item.index + 1)
        $('.slide-controls__total').text(event.item.count)
    });

    headerSlider.owlCarousel({
        items: 1,
        dots: false,
        smartSpeed: 1000,
    });
    $('#headerSliderRight').click(function() {
        headerSlider.trigger('next.owl.carousel');
    });
    $('#headerSliderLeft').click(function() {
        headerSlider.trigger('prev.owl.carousel');
    });
    headerSlider.on('changed.owl.carousel', function (event) {
        $('.slide-controls__active').text(event.item.index + 1)
        $('.slide-controls__total').text(event.item.count)
    });

});
