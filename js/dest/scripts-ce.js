/*------------------------------------*\
    Variables
\*------------------------------------*/

var mobileBreakpoint = 800;
var isMobile;

/*------------------------------------*\
    Functions
\*------------------------------------*/

function resized(){
 if ($(window).width() < mobileBreakpoint) {
       isMobile = true;
       $('body').addClass('isMobile');
       $('body').removeClass('isDesktop');
       $('body').removeClass('fixed-header');
       $('.hideMobile').css({'display':'none'});
    } else {
       isMobile = false;
       $('body').removeClass('g-mobile-nav-open');
       $('body').addClass('isDesktop');
       $('body').removeClass('isMobile');
       $('.hideDesktop').css({'display':'none'});
    }
}

function googleTranslateElementInit() {

    var pathname = window.location.pathname;

    if (pathname.includes("business-and-industry") ||
        pathname.includes("corporate-training")) {
        $("#google_translate_element").css("display", "block");

        new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,am,ar,bg,bn,cs,el,es,fa,fr,id,it,ja,ko,nl,pa,pl,pt,ro,ru,si,sw,th,tl,tr,uk,ur,vi,zh-CN,zh-TW', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true, gaId: 'UA-245082-4' }, 'google_translate_element');
    }
    else {
        $("#google_translate_element").css("display", "none");
    }

    changeGoogleStyles();

}

function changeGoogleStyles() {
    if (($goog = $('.goog-te-menu-frame').contents().find('body')).length) {
        var stylesHtml = '';

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            stylesHtml = '<style>' +
                '.goog-te-menu2 {' +
                'max-width:100% !important;' +
                'overflow:scroll !important;' +
                'box-sizing:border-box !important;' +
                'height:auto !important;' +
                '}' +

                '.goog-te-menu2-item {' +
                'width: 100%' +
                '}' +

                'td {' +
                'width: 100%' +
                '}' +

                '.goog-te-menu2 * {' +
                'font-family: "Titillium Web", sans-serif;' +
                'color: #324053;' +
                '}' +
                '</style>';
        }
        else {
            stylesHtml = '<style>' +
                '.goog-te-menu2 * {' +
                'font-family: "Titillium Web", sans-serif;' +
                'color: #324053;' +
                '}' +
                '</style>';
        }

        $goog.prepend(stylesHtml);
    } else {
        setTimeout(changeGoogleStyles, 50);
    }
}

$(document).ready(function() {


    /*-----------------------------------------*\
                    General JS
    \*------------------------------------------*/

    //Accordions
    $('.g-accord-header').click(function() {
        $(this).next().slideToggle();
        var icon = $(this).find('.g-icon')
        icon.toggleClass('ion-plus-round');
        icon.toggleClass('ion-minus-round');
    });

    //initialize tooltips
    $('.tooltip').tooltipster({
        maxWidth: 280,
        offsetY: -5
    });

    //Responsive tables - show/hide for tablet/mobile
    $('.g-open-link').click(function() {
        if ($(this).hasClass('ion-plus-circled')) {
            $(this).addClass('ion-minus-circled');
            $(this).removeClass('ion-plus-circled');
            $(this).parent().siblings().css({
                'display': 'block'
            });
        } else {
            $(this).removeClass('ion-minus-circled');
            $(this).addClass('ion-plus-circled');
            $(this).parent().siblings().css({
                'display': 'none'
            });
        }
    });


    
    //add classes to body for mobile/desktop
    if ($(window).width() < mobileBreakpoint) {
       isMobile = true;
       $('body').addClass('isMobile');
    } else {
       isMobile = false;
       $('body').addClass('isDesktop');
    }

    window.addEventListener("resize", resized);


    /*-----------------------------------------*\
                  Global Header
    \*------------------------------------------*/

    //---- header tooltips
    $('.tooltip-about').tooltipster({
        maxWidth: 280,
        offsetY: -10,
        interactive: true,
        side: 'bottom',
        trigger: 'hover',
        content: $("<a>Team</a><br><a>What's New</a>")
    });
    $('.tooltip-corporate').tooltipster({
        maxWidth: 300,
        offsetY: -10,
        interactive: true,
        side: 'bottom',
        trigger: 'hover',
        content: $('<a href="/corporate/corporate-community-engagement">Corporate & Community Engagement</a><br><a>Research</a><br><a>Employers</a><br><a>Donors</a>')
    });

    $('.headers-container').on('click touch', function (event) {
        event.stopPropagation();
    });

    //Main navigation - mobile menu
    $('.navToggle, .g-corporate-overlay').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('g-mobile-nav-open');
        //$('.search-section').slideUp();
    });

    //child mobile menu toggle
    $('.mobileMenuToggle').click(function(e) {
        $(this).next().slideToggle('fast');
    });

    //Image Slider
    $('.g-image-slider').slick({
        centerMode: true,
        centerPadding: '330px',
        slidesToShow: 1,
        cssEase: 'linear',
        speed: 700,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                centerPadding: '200px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                centerPadding: '100px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                centerPadding: '30px',
                slidesToShow: 1
            }
        }]
    });

    $('.btn-bio').click(function () {
        var text = $(this).hasClass('ct-bio-expand') ? "SHOW LESS" : "CONTINUE READING";
        var addnewClass = $(this).hasClass('ct-bio-expand') ? "bio-expanded-text" : "bio-text";
        var removeoldClass = $(this).hasClass('ct-bio-expand') > 0 ? "bio-text" : "bio-expanded-text";
        $(this).siblings('.g-ct-desc').addClass(addnewClass).removeClass(removeoldClass);
        $(this).toggleClass('ct-bio-minus');
        $(this).toggleClass('ct-bio-expand');
        $(this).find('.bio-span-text').text(text);
        var icon = $(this).find('.g-icon');
        $(icon).toggleClass('ion-minus-circled');
        $(icon).toggleClass('ion-plus-circled');
    });

});
