/*-----------------------------------------*\
    Global Style Guide JS - testing only
\*------------------------------------------*/

$(document).ready(function() {

    //side nav scoll to section
    $('.test-scroll').click(function(e) {
        var id = $(e.target).attr('scroll');
        $(this).addClass('g-active');
        $(this).parent().siblings().find('a').removeClass('g-active');
        $(id).addClass('g-active');
        $(id).siblings().removeClass('g-active');
        $('html,body').animate({
            scrollTop: $(id).offset().top - 90
        })
    });

})