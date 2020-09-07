
//Замена цвета навигации при прокрутке
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

//Аккардион
$(".platform > p").click(function() {
    if ($(this).next(".platform-description").hasClass('js-platform-description')) {
        $(this).css("background-image", "url(images/-.png)");
        $(this).next(".platform-description").removeClass("js-platform-description");
    } else {
        $(this).css("background-image", "url(images/+.png)");
       $(this).next(".platform-description").addClass("js-platform-description");
    }
});

//Валидация формы
$(document).ready(function() {

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

    $('.js-input-tel').inputmask('+7 (999) 999-99-99');


    // $('.js-form').on('formSubmit', function() {
    //     alert('Форма отправлена');
    // })

});

//Замена текста в разделе 'Наши предложения' для мобильных устройств
if ($(window).width()<768) {
    $(".platform:eq(0) > p").text("Помещение 1. 10 кв.м.");
    $(".platform:eq(1) > p").text("Помещение 2. 8 кв.м.");
    $(".platform:eq(2) > p").text("Помещение 3. 15 кв.м.");
    $(".platform:eq(3) > p").text("Помещение 4. 10 кв.м.");

}
