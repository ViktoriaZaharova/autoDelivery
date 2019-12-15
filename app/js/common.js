$(document).ready(function() {
    $('.main__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        fade: true,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    arrows: false
                }
            }
        ]
    });



    // mask phone
    $("input[name='phone']").mask("8(999) 999-99-99");

    $("form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.modal__div').css('display', 'none').animate({
                opacity: 0,
                top: '45%'
            }, 200);
            $('#modal_thanks').css('display', 'flex').animate({
                opacity: 1,
                top: '50%'
            }, 200);
            $("form").trigger("reset");
        });
        return false;
    });

    // input text
    $('[name="name"]').on('keypress', function() {
        var that = this;
        setTimeout(function() {
            var res = /[^а-яА-ЯїЇєЄіІёЁ ]/g.exec(that.value);
            that.value = that.value.replace(res, '');
        }, 0);
    });


    // modal image
    $('[data-fancybox="images"]').fancybox();

    // $('.checkbox-custom').click(function () {
    //    $(this).toggleClass('checked');
    // });

    $('.btn-burger').click(function () {
        $('.top-menu').toggleClass('open');
    });

    $('.btn-close').click(function () {
        $('.top-menu').removeClass('open');
    });

    // animate scroll
    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });

});


// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

$(document).ready(function () {
   setTimeout(function () {
      $('.overlay').fadeIn();
      $('#modal_sale').css('display', 'flex').animate({
          opacity: 1,
          top: '50%'
      });
   }, 5000);
});
