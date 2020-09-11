$(document).ready(function() {
//Замена цвета навигации при прокрутке
// Dekstop
if ($(window).width() > 1280) {
    if (window.pageYOffset > 847) {
        $(".main-header").css("backgroundColor", "#2c2c2c");
        $(".social-facebook").on("mouseenter", function() {
            $(".social-facebook").css("backgroundImage", "url(images/fb-icon-scroll.png)");
        });
        $(".social-facebook").on("mouseleave", function() {
            $(".social-facebook").css("backgroundImage", "url(images/fb-icon.png)");
        });
        $(".social-vkontakte").on("mouseenter", function() {
            $(".social-vkontakte").css("backgroundImage", "url(images/vk-icon-scroll.png)");
        });
        $(".social-vkontakte").on("mouseleave", function() {
            $(".social-vkontakte").css("backgroundImage", "url(images/vk-icon.png)");
        });
    }
    else {
        $(".main-header").css("backgroundColor", "#6bc9bd");
        $(".social-facebook").on("mouseenter", function() {
            $(".social-facebook").css("backgroundImage", "url(images/fb-icon-hover.png)");
        });
        $(".social-vkontakte").on("mouseenter", function() {
            $(".social-vkontakte").css("backgroundImage", "url(images/vk-icon-hover.png)");
        });
    }
$(window).scroll(function() {
    if (window.pageYOffset > 847) {
        $(".main-header").css("backgroundColor", "#2c2c2c");
        $(".social-facebook").on("mouseenter", function() {
            $(".social-facebook").css("backgroundImage", "url(images/fb-icon-scroll.png)");
        });
        $(".social-facebook").on("mouseleave", function() {
            $(".social-facebook").css("backgroundImage", "url(images/fb-icon.png)");
        });
        $(".social-vkontakte").on("mouseenter", function() {
            $(".social-vkontakte").css("backgroundImage", "url(images/vk-icon-scroll.png)");
        });
        $(".social-vkontakte").on("mouseleave", function() {
            $(".social-vkontakte").css("backgroundImage", "url(images/vk-icon.png)");
        });
    }
    else {
        $(".main-header").css("backgroundColor", "#6bc9bd");
        $(".social-facebook").on("mouseenter", function() {
            $(".social-facebook").css("backgroundImage", "url(images/fb-icon-hover.png)");
        });
        $(".social-vkontakte").on("mouseenter", function() {
            $(".social-vkontakte").css("backgroundImage", "url(images/vk-icon-hover.png)");
        });
    }
});
}
// Phone
if ($(window).width() < 768) {
    if (window.pageYOffset > 266) {
        $(".main-header").css("backgroundColor", "#2c2c2c");
    } else {
        $(".main-header").css("backgroundColor", "#6bc9bd");
    }
    $(".social-facebook").on("mouseenter", function() {
        $(".social-facebook").css("backgroundImage", "url(images/fb-icon-scroll.png)");
    });
    $(".social-facebook").on("mouseleave", function() {
        $(".social-facebook").css("backgroundImage", "url(images/fb-icon.png)");
    });
    $(".social-vkontakte").on("mouseenter", function() {
        $(".social-vkontakte").css("backgroundImage", "url(images/vk-icon-scroll.png)");
    });
    $(".social-vkontakte").on("mouseleave", function() {
        $(".social-vkontakte").css("backgroundImage", "url(images/vk-icon.png)");
    });
    $(window).scroll(function() {
        if (window.pageYOffset > 266) {
            $(".main-header").css("backgroundColor", "#2c2c2c");
        } else {
            $(".main-header").css("backgroundColor", "#6bc9bd");
        }
    });
}
// Tablet
if ($(window).width() < 1280 && $(window).width() > 768) {
    if (window.pageYOffset > 390) {
        $(".main-header").css("backgroundColor", "#2c2c2c");
    } else {
        $(".main-header").css("backgroundColor", "#6bc9bd");
    }
    $(window).scroll(function() {
        if (window.pageYOffset > 390) {
            $(".main-header").css("backgroundColor", "#2c2c2c");
        } else {
            $(".main-header").css("backgroundColor", "#6bc9bd");
        }
    });
}
//Аккардион
$(".plus-minus").click(function() {
    if ($(this).prop("checked")) {
        $(this).parent().next(".js-platform-description").slideToggle();
    } else {
        $(this).parent().next(".js-platform-description").slideToggle();
    }
});

//Валидация формы

    /*
    * Translated default messages for the jQuery validation plugin.
    * Locale: RU (Russian; русский язык)
    */
    $.extend( $.validator.messages, {
        required: "Это поле необходимо заполнить.",
        remote: "Пожалуйста, введите правильное значение.",
        email: "Пожалуйста, введите корректный адрес электронной почты.",
        url: "Пожалуйста, введите корректный URL.",
        date: "Пожалуйста, введите корректную дату.",
        dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
        number: "Пожалуйста, введите число.",
        digits: "Пожалуйста, вводите только цифры.",
        creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
        equalTo: "Пожалуйста, введите такое же значение ещё раз.",
        extension: "Пожалуйста, выберите файл с правильным расширением.",
        maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
        minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
        rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
        range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
        max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
        min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
    } );

    $.validator.addMethod('js-input-tel', function(value, element) {
        return this.optional(element) || $(element).inputmask('unmaskedvalue').length === 10;
    }, 'Введите корректный номер');

    $('.js-form').validate({
        submitHandler: function(form) {
            // Отправка формы при успешной валидации
            $(form).trigger('formSubmit');
        },
        errorPlacement: function(error, element) {
            element.parent().append(error);
        }
    });

    $('.js-form-login').validate({
        submitHandler: function(form) {
            // Отправка формы при успешной валидации
            $(form).trigger('formSubmit');
        },
        errorPlacement: function(error, element) {
            element.parent().append(error);
        }
    });

    $('.js-input-tel').inputmask('+7 (999) 999-99-99');


    // $('.js-form').on('formSubmit', function() {
    //     alert('Форма отправлена');
    // })

// Закрытие модального окна Х
$(".close-modal").on("click", function(){
    $(".background-modal").css("display", "none");
    
});

// Бургер меню
$(".site-navigation input").on("click", function(){
    if ($(".site-navigation input").prop("checked")) {
        $(".navigation-list").css("transform", "translateY(0px)");
        $(".social-list").css("transform", "translateX(0px)");
        $(".site-navigation").css("max-width", "none")
    } else {
        $(".navigation-list").css("transform", "translateY(1000px)");
        $(".social-list").css("transform", "translateX(1000px)");
        $(".site-navigation").css("max-width", "0px")
    }
});
//Select
$(".input-sentence select").select2();

});