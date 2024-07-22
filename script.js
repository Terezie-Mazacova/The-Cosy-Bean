// === FOR SMOOTH SCROLL ==
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// == CODE FOR SMOOTH SCROLL FROM OUR STORY PAGE TO HOME PAGE
function goToDrinks() {
    window.location.href = 'index.html#drinks';
}

window.onload = function() {
    if (window.location.hash === '#drinks') {
        document.querySelector('#drinks').scrollIntoView({ behavior: 'smooth' });
    }
};



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

    var splide3 = new Splide( '.slider3', {
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
    splide3.mount();
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


// == TIMELINE ==
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.container');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, entry.target.dataset.delay || 0);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach((element, index) => {
        element.dataset.delay = index * 20000;
        observer.observe(element);
    });
});



// == INCREMENTING COUNTER ==
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const updateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(() => updateCounter(counter), 1);
        } else {
            counter.innerText = target;
        }
    };

    const startCounting = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    };

    const options = {
        root: null,
        threshold: 0.1 
    };

    const observer = new IntersectionObserver(startCounting, options);

    counters.forEach(counter => {
        counter.innerText = '0';
        observer.observe(counter);
    });
});










