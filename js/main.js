(function ($) {
    "use strict";

    function portfolio_init() {
        var portfolio_grid = $('#portfolio_grid'),
            portfolio_filter = $('#portfolio_filters');
    }

    function mobileMenuHide() {
        var windowWidth = $(window).width();
        if (windowWidth < 1024) {
            $('.site-nav').addClass('mobile-menu-hide');
        }
    }
    $(document).ready(function () {
        emailjs.init('maAUfO_qVr19sifXn');
        var $portfolio_container = $("#portfolio_grid");
        $portfolio_container.imagesLoaded(function () {
            setTimeout(function () {
                portfolio_init(this);
            }, 500);
        });
        $(' #portfolio_grid > figure > a ').each(function () {
            $(this).hoverdir();
        });
        $('.menu-toggle').click(function () {
            $('.site-nav').toggleClass('mobile-menu-hide');
        });
        $(".testimonials.owl-carousel").owlCarousel({
            nav: true,
            items: 1,
            loop: true,
            navText: false,
            margin: 10,
        });
    });
    $(window).on('load', function () {
        $(".preloader").fadeOut("slow");
    });
    $(window).on('resize', function () {
        mobileMenuHide();
    });
    $('.site-main-menu').on("click", "a", function (e) {
        mobileMenuHide();
    });
    const messageBox = document.querySelector('.form_message_box');
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        messageBox.classList.remove('form_message_box--show');
        messageBox.classList.remove('form_message_box--danger');
        messageBox.classList.remove('form_message_box--success');
        const serviceID = 'service_tn38a9h';
        const templateID = 'template_8blc9lh';
        messageBox.innerHTML = '';
        event.preventDefault();
        emailjs.sendForm(serviceID, templateID, this)
            .then(response => {
                // console.log('SUCCESS!', response.status, response.text);
                messageBox.classList.add('form_message_box--show');
                messageBox.classList.add('form_message_box--success');
                messageBox.innerHTML = 'Message sent.';
                this.reset();
                setTimeout(function () {
                    messageBox.classList.remove('form_message_box--show');
                    messageBox.classList.remove('form_message_box--danger');
                    messageBox.classList.remove('form_message_box--success');
                    messageBox.innerHTML = '';
                }, 3000);
            }, (error) => {
                // console.log('FAILED...', error);
                messageBox.classList.add('form_message_box--show');
                messageBox.classList.add('form_message_box--danger');
                messageBox.innerHTML = 'Произошла ошибка.';
            });
    });

    // Отправка заявки 
// $(document).ready(function() {
// 	$('#contact-form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
// 		if (document.form.name.value == '' || document.form.email.value == '' ) {
// 			valid = false;
// 			return valid;
// 		}
// 		$.ajax({
// 			type: "POST",
// 			url: "../php/index.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			$('.js-overlay-thank-you').fadeIn();
// 			$(this).find('input').val('');
// 			$('#contact-form').trigger('reset');
// 		});
// 		return false;
// 	});
// });

// Закрыть попап «спасибо»
// $('.js-close-thank-you').click(function() { // по клику на крестик
// 	$('.js-overlay-thank-you').fadeOut();
// });

// $(document).mouseup(function (e) { // по клику вне попапа
//     var popup = $('.popup');
//     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
//         $('.js-overlay-thank-you').fadeOut();
//     }
// });
})(jQuery);