$(function() {

    const swiper = new Swiper('.product-card__slider', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 50,
        thumbs: {
            swiper: {
                el: '.product-card__slider-mini',
                slidesPerView: 1,
                allowSlideNext: false,
            }
        }
    });

    $('.catalog').on('click', function() {
        $('.catalog, .catalog__btn').toggleClass('active');
        $('.sub-menu').toggleClass('active');
    });

    $('.menu__burger').on('click', function() {
        $('.menu__burger, .menu__burger__btn').toggleClass('active');
        $('.burger__list').toggleClass('active');
    });


    $('.slider__inner').slick({
        arrows: true,
        dots: true,
        infinite: false,
        nextArrow: '<button type="button" class="slick-next slick-arrow"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="arrow-next" d="M56 44V0H12.5H0V12V56H44L56 44Z" fill="white"/><path id="arrow-bg-prev" d="M34 28L22 21L22 35L34 28Z" fill="#101010"/></svg></button>',
        prevArrow: '<button type="button" class="slick-back slick-arrow"><svg  width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="arrow-prev" d="M0 12V56H43.5H56V44V0H12L0 12Z" fill="white"/><path id="arrow-bg-prev" d="M22 28L34 35L34 21L22 28Z" fill="#010101"/></svg></button >',
        responsive: [{

            breakpoint: 800,
            settings: {
                arrows: false,
            }
        }]
    });

    $('.search__img').on('click', function() {
        $('.search__input').toggleClass('input-active');
        $('.search__img').toggleClass('search-active');
    })
});

jQuery('<button class="number__btn number__btn--down"></button>').insertBefore('.number__field');
jQuery('<button class="number__btn number__btn--up"></button>').insertAfter('.number__field');

jQuery('.number').each(function() {
    var spinner = jQuery(this),
        input = spinner.find('.number__field'),
        btnUp = spinner.find('.number__btn.number__btn--up'),
        btnDown = spinner.find('.number__btn.number__btn--down'),
        min = input.attr('min'),
        max = input.attr('max'),
        step = input.attr('step');
    btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + parseFloat(step);
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - parseFloat(step);
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });
});