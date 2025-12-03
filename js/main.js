// Main JavaScript for 동서울열방교회
$(document).ready(function() {
    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
    });

    // Navbar scroll effect
    let lastScroll = 0;
    $(window).scroll(function() {
        const currentScroll = $(this).scrollTop();
        
        if (currentScroll > 100) {
            $('.navbar').addClass('shadow-lg');
        } else {
            $('.navbar').removeClass('shadow-lg');
        }
        
        lastScroll = currentScroll;
    });

    // Fade in animation on scroll
    const fadeInElements = $('.fade-in');
    if (fadeInElements.length) {
        $(window).on('scroll', function() {
            fadeInElements.each(function() {
                const elementTop = $(this).offset().top;
                const viewportBottom = $(window).scrollTop() + $(window).height();
                
                if (viewportBottom > elementTop + 100) {
                    $(this).addClass('visible');
                }
            });
        });
    }

    // Hover effects for cards
    $('.hover-card').hover(
        function() {
            $(this).find('.card-body').css('transform', 'scale(1.02)');
        },
        function() {
            $(this).find('.card-body').css('transform', 'scale(1)');
        }
    );
});

// Initialize Hero Swiper (for index.html)
if (document.querySelector('.heroSwiper')) {
    const heroSwiper = new Swiper('.heroSwiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1000,
    });
}

// Initialize Sermon Swiper (for worship.html)
if (document.querySelector('.sermonSwiper')) {
    const sermonSwiper = new Swiper('.sermonSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
}

// Add smooth entrance animations
window.addEventListener('load', function() {
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-delay, .animate-fade-in-delay-2, .animate-fade-in-delay-3');
    animatedElements.forEach(element => {
        element.style.opacity = '1';
    });
});

// Mobile menu close on link click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

// Back to top button functionality
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        if (!$('#backToTop').length) {
            $('body').append('<button id="backToTop" class="btn btn-primary rounded-circle" style="position: fixed; bottom: 30px; right: 30px; z-index: 1000; width: 50px; height: 50px; display: none;"><i class="bi bi-arrow-up"></i>↑</button>');
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeIn();
        }
    } else {
        $('#backToTop').fadeOut();
    }
});

$(document).on('click', '#backToTop', function() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});

// Add loading animation
$(window).on('load', function() {
    $('body').addClass('loaded');
});
