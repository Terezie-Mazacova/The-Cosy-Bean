document.addEventListener( 'DOMContentLoaded', function() {
    var splide1 = new Splide( '.slider1', {
        perPage: 4,
        gap: '20px',
        pagination: false,
        type: 'loop',
        autoplay: true,
        interval: 1000,
        speed: 90000,
        arrows: false
    });
    splide1.mount();
} );