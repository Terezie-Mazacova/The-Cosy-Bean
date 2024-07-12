// === FOR SMOOTH SCROLL ==
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// === SLIDERS ===
document.addEventListener( 'DOMContentLoaded', function() {
    var splide1 = new Splide( '.slider1', {
        perPage: 2,
        gap: '5px',
        pagination: false,
        type: 'loop',
        autoplay: true,
        interval: 1000,
        speed: 900000,
        arrows: false,
        direction: 'rtl'
    });
    splide1.mount();

    var splide2 = new Splide( '.slider2', {
        perPage: 4,
        gap: '20px',
        pagination: false,
        type: 'loop',
        autoplay: true,
        interval: 1000,
        speed: 900000,
        autoWidth: true,
        arrows: false,
        breakpoints: {
            1200: {
                perPage: 3,
                gap: '15px',
            },
            992: {
                perPage: 2,
                gap: '10px',
            },
            768: {
                perPage: 1,
                gap: '5px',
            }
        }
    });
    splide2.mount();
} );

// == POPUP ==
function openPopup(popupId) {
    closeAllPopups();
    let popup = document.getElementById(popupId);
    popup.classList.remove('close-popup');
    popup.classList.add('open-popup');

}

function closePopup(popupId) {
    let popup = document.getElementById(popupId);
    popup.classList.remove('open-popup');
    popup.classList.add('close-popup');

}

function closeAllPopups() {
    let popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.classList.remove('open-popup');
        popup.classList.add('close-popup');
    });
}



// == INCREMENTING COUNTER ==
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})