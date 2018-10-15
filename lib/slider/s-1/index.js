$(document).ready(function() {
    $('.canhcam-slider-2 .slidetab  .info:first-child .show').addClass('active');
    $('.canhcam-slider-2 .slidetab  .info .hide').hide();
    $('.canhcam-slider-2 .slidetab  .info:first-child .hide').show();
    $('.canhcam-slider-2 .slidetab  .show').on('click', (function() {
        if ($(this).parents('.info').find('.hide').is(':hidden') === true) {
            $('.canhcam-slider-2 .slidetab  .info .show').removeClass('active');
            $('.canhcam-slider-2 .slidetab  .info .hide').slideUp();
            $(this).parents('.info').find('.hide').slideDown();
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
            $(this).parents('.info').find('.hide').slideUp();

        }
    }));
})