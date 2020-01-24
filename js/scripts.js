/*------------------------------------*\
    Variables
\*------------------------------------*/

var mobileBreakpoint = 800;
var isMobile;


/*------------------------------------*\
    Twitter
\*------------------------------------*/ 

//Homepage

if($('#twitterHP').length){
    var config = {
      "profile": {
        "screenName": 'sait'
      },
      "dataOnly": true,
      "maxTweets": 1, 
      "customCallback": populateHPTpl
    };
    twitterFetcher.fetch(config);
}

function googleTranslateElementInit() {

    var pathname = window.location.pathname;

    if (pathname == "/international-students/study-and-live-in-canada/about-calgary-and-canada" || 
        pathname == "/about-sait" ||
        pathname == "/international-students" ||
        pathname == "/international-students/agents" ||
        pathname == "/international-students/how-to-apply/study-permit" ||
        pathname == "/about-sait/campus/housing" ||
        pathname == "/student-life" ||
        pathname == "/international-students/international-centre" ||
        pathname == "/international-students/study-and-live-in-canada/working-in-canada" ||
        pathname == "/international-students/programs-for-international-students" ||
        pathname == "/international-students/study-and-live-in-canada" ||
        pathname == "/international-students/how-to-apply" ||
        pathname == "/international-students/international-student-tuition-and-fees" ||
        pathname == "/programs-and-courses/full-time-studies/english-language-foundations" ||
        pathname == "/programs-and-courses/continuing-education/courses-and-certificates/english-language-foundations" ||
        pathname.indexOf("programs-and-courses/full-time-studies") > -1 || 
        pathname.indexOf("programs-and-courses/apprenticeships-and-trades/pre-employment-programs") > -1) {
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




function populateHPTpl(tweets){
    var element = document.getElementById('twitterHP');
    html = '<div class="g-content"><a target="_blank" href="https://twitter.com/sait" class="f-inner"><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>'
        + '<p>' + tweets[0].tweet + '</p></div>';
    element.innerHTML = html; 
}


//@SAIT twitter

if($('#saitTweet1').length){
    var config = {
      "profile": {
        "screenName": 'sait'
      },
      "dataOnly": true,
      "maxTweets": 2,
      "customCallback": populateTplSaitTweet
    };
    twitterFetcher.fetch(config);
}

function populateTplSaitTweet(tweets){
    var element = document.getElementById('saitTweet1');
    if(tweets[0].image){
       html = '<a target="_blank" href="' + tweets[0].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[0].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/sait"><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>'
        + '<p>' + tweets[0].tweet + '</p></div>';
        element.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/sait"><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>'
        + '<p>' + tweets[0].tweet + '</p></div>';
        element.innerHTML = html; 
    }

    var element2 = document.getElementById('saitTweet2');
    if(tweets[1].image){
       html = '<a target="_blank" href="' + tweets[1].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[1].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/sait"><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>'
        + '<p>' + tweets[1].tweet + '</p></div>';
        element2.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/sait"><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>'
        + '<p>' + tweets[1].tweet + '</p></div>';
        element2.innerHTML = html; 
    }
}

//@SAITresearch twitter

if($('#researchTweet1').length){
    var config = {
      "profile": {
        "screenName": 'saitresearch'
      },
      "dataOnly": true,
      "maxTweets": 4,
      "customCallback": populateTplResearchTweet
    };
    twitterFetcher.fetch(config);
}

function populateTplResearchTweet(tweets){
    var element = document.getElementById('researchTweet1');
    if(tweets[0].image){
       html = '<a target="_blank" href="' + tweets[0].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[0].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/sait"><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>'
        + '<p>' + tweets[0].tweet + '</p></div>';
        element.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/sait"><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>'
        + '<p>' + tweets[0].tweet + '</p></div>';
        element.innerHTML = html; 
    }

    var element2 = document.getElementById('researchTweet2');
    if(tweets[1].image){
       html = '<a target="_blank" href="' + tweets[1].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[1].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/saitresearch"><span class="ion-social-twitter g-icon-left"></span>@SAITresearch</a>'
        + '<p>' + tweets[1].tweet + '</p></div>';
        element2.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/saitresearch"><span class="ion-social-twitter g-icon-left"></span>@SAITresearch</a>'
        + '<p>' + tweets[1].tweet + '</p></div>';
        element2.innerHTML = html; 
    }

    var element3 = document.getElementById('researchTweet3');
    if(tweets[2].image){
       html = '<a target="_blank" href="' + tweets[2].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[2].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/saitresearch"><span class="ion-social-twitter g-icon-left"></span>@SAITresearch</a>'
        + '<p>' + tweets[2].tweet + '</p></div>';
        element3.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/saitresearch"><span class="ion-social-twitter g-icon-left"></span>@SAITresearch</a>'
        + '<p>' + tweets[2].tweet + '</p></div>';
        element3.innerHTML = html; 
    }

    var element4 = document.getElementById('researchTweet4');
    if(tweets[3].image){
       html = '<a target="_blank" href="' + tweets[3].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[3].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/saitresearch"><span class="ion-social-twitter g-icon-left"></span>@SAITresearch</a>'
        + '<p>' + tweets[3].tweet + '</p></div>';
        element4.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/saitresearch"><span class="ion-social-twitter g-icon-left"></span>@SAITresearch</a>'
        + '<p>' + tweets[3].tweet + '</p></div>';
        element4.innerHTML = html; 
    }
}

//@SAITAlumni

if($('#alumni1').length){
    var config = {
        "profile": {
        "screenName": 'SAITAlumni'
    },
        "dataOnly": true,
        "maxTweets": 2,
        "customCallback": populateAlumniTpl
    };
    twitterFetcher.fetch(config);
}


function populateAlumniTpl(tweets){
    var element = document.getElementById('alumni1');
    if(tweets[0].image){
       html = '<a target="_blank" href="' + tweets[0].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[0].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/saitalumni"><span class="ion-social-twitter g-icon-left"></span>@SAITAlumni</a>'
        + '<p>' + tweets[0].tweet + '</p></div>';
        element.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/saitalumni"><span class="ion-social-twitter g-icon-left"></span>@SAITAlumni</a>'
        + '<p>' + tweets[0].tweet + '</p></div>';
        element.innerHTML = html; 
    }

    var element2 = document.getElementById('alumni2');
    if(tweets[1].image){
       html = '<a target="_blank" href="' + tweets[1].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[1].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/saitalumni"><span class="ion-social-twitter g-icon-left"></span>@SAITAlumni</a>'
        + '<p>' + tweets[1].tweet + '</p></div>';
        element2.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/saitalumni"><span class="ion-social-twitter g-icon-left"></span>@SAITAlumni</a>'
        + '<p>' + tweets[1].tweet + '</p></div>';
        element2.innerHTML = html; 
    }
}

/*------------------------------------*\
    Functions
\*------------------------------------*/

function resized(){
 if ($(window).width() < mobileBreakpoint) {
       isMobile = true;
       $('body').addClass('isMobile');
       $('body').removeClass('isDesktop');
       $('.hideMobile').css({'display':'none'});
	   $('.logo').hide();
	   $('.logo-sm').show();
	   
    } else {
       isMobile = false;
       $('body').removeClass('g-mobile-nav-open');
       $('.mega-menu').css({'display':'none'});
       $('.mobileNavToggle.ion-chevron-up').toggleClass('ion-chevron-down');
       $('.mobileNavToggle.ion-chevron-up').toggleClass('ion-chevron-up');
       $('body').addClass('isDesktop');
       $('body').removeClass('isMobile');
       $('.hideDesktop').css({'display':'none'});

	   $('.logo-sm').hide();
	   $('.logo').show();
	   
    }
}

//Program page tabs
function showTab(id, el) {
    $('.program-tab').hide();
    $(id).show();
    $('.g-tabs a').removeClass('g-active');
    $(el).addClass('g-active');
    $(el).siblings().removeClass('g-show');
    $('html,body').animate({
        scrollTop: $('#g-content').offset().top - 110
    })
}

//homepage banner
// function showBanner(slide, el) {
//     if(isMobile === false){
//         var slide = $('.'+slide);
//         setTimeout(function(){
//             var isHovered = $(el).is(":hover");
//             if(isHovered === true){
//                 slide.siblings('.banner').hide();
//                 slide.show();
//                 $('.banner-nav a').removeClass('active');
//                 $(el).addClass('active');  
//             }
//         }, 300);
//     }
// }

function showBanner(name, el) {
    if(isMobile === false){
        setTimeout(function(){
            var isHovered = $(el).is(":hover");
            if(isHovered === true){
                $('.banner').hide();
                var id = "#" + name;
                $(id).show();
                $('#hp-banner').attr('class', name);
                $('.banner-nav a').removeClass('g-active');
                $(el).addClass('g-active');  
            }
        }, 300);
    }
}


$(document).ready(function() {
    /*-----------------------------------------*\
                    General JS 
    \*------------------------------------------*/

    if (window.location.href == "https://www.sait.ca/about-sait/news/sait-stories-the-stories-behind-sait-polytechnic/sait-stories/2016-3-29-brand-reveal.php") {
        window.location.href = "https://www.sait.ca/about-sait/media-centre/news-and-events/news/2016-3-29-brand-reveal";
    }

    /* CAMPAIGN-RELATED SCRIPT - Please leave in place */

   // var pandcUrlTest = "http://prototype-dev.sait.ca/sait-jonathon/programs-and-courses";
   // var pandcUrl = "https://www.sait.ca/programs-and-courses";

    /* $(function(){
        if ((location.href==pandcUrlTest)||(location.href==pandcUrl)){
            $(".g-main div:eq(0)").after('<section id="-chp-applications-open-admissions"><div class="borderland">&nbsp;</div><div class="-apps-open-wrapper-sub"><p>Applications for spring and fall 2019 programs now open.</p></div><div class="borderland">&nbsp;</div></section>');
        }
    }); */

    // $(function(){
    //     if ((location.href==pandcUrlTest)||(location.href==pandcUrl)){
    //         $(".mobile-side-menu").after('<section id="-oh-start-pc"><div class="-oh-open-wrapperpc g-container-mdpc"><div class="-oh-image-holder"><img style="padding-top: 20px" src="https://www.sait.ca/assets/prebuilt/img/campaign-assets/openhouse18/2018-oh-open-house-oct-19-20.png" alt="Open House - Oct 19 and 20" width="120"></div><p><span class="modme">Drop in, ask questions and apply for free.<br>Friday, Oct. 19 &amp; Saturday, Oct. 20 &nbsp;|&nbsp; 9 am - 3 pm</span><a class="g-btn" style="background-color:#da291c; color:#fff;" href="https://www.sait.ca/future-students/visit-campus/open-house-2018" onclick="ga(\'send\', \'event\', { eventCategory: \'Internal-Campaigns\', eventAction: \'Click\', eventLabel: \'Open-House-2018\' });"> Learn more</a></p></div></section>');
    //     }
    // });
    
    /* OPEN HOUSE HOMEPAGE */

    // $(".reds").detach().appendTo(".campaign-holder");
    // $(".g-interest-slider-container").detach().appendTo(".campaign-holder");
    // $(".campaign-holder").css("display", "block");

    /* OPEN HOUSE PROGRAMS COURSES BOTTOM */

    /* GIVING DAY PROMO PIECES */

     // var dateNow = new Date();

    //  var footerLastSeenCookie = document.cookie.replace(/(?:(?:^|.*;\s*)footerLastSeenCookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
     // if ((window.location.href.indexOf("full-time-studies") > -1) && (footerLastSeenCookie != 1)) {
    //  if (
    //      (window.location.href.indexOf("programs") < 1) && 
    //      (window.location.href.indexOf("admissions") < 1) && 
    //      (window.location.href.indexOf("student") < 1) && 
    //      (window.location.href.indexOf("areas-of-interest") < 1) && 
    //      (footerLastSeenCookie != 1))
    //      {
     //        var GDPromo = '<div class="info-banner info-banner-bottom" id="gd-banner-bottom"><a href="http://sait.imodules.com/s/1615/crowdfunding/home.aspx?sid=1615&gid=2&pgid=3536&appealcode=19GDMSAIT" onclick="ga(\'send\', \'event\', { eventCategory: \'Internal-Campaigns\', eventAction: \'Click-footer\', eventLabel: \'Giving-Day-2018\' });"> Support student success with 24 hours of giving. <span class="gd-desk">&nbsp;&nbsp; Learn more &gt; </span></a><span class="cookieSet ion-close g-icon-left">&nbsp;</span></div>';
     //        $(GDPromo).detach().appendTo(".g-footer");
     // }


    //  $(".cookieSet").click(function(){
// 
    //      $("#gd-banner-bottom").css("display", "none");
    //      var today = new Date();
    //      var expiryDate = new Date();
    //      expiryDate.setDate(today.getDate() + 1);
     // document.cookie = "footerLastSeenCookie=" + "1" + "; expires=" + expiryDate + "\"";
    // });
    //scroll to top
    $('.g-scroll-up').click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });

   
    //Button Toggle
    $('.g-toggle a').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('g-active');
        $(this).siblings().toggleClass('g-active');
    });

    //Social feed sections - load more/show less
    $('.toggleSocial').click(function(e) {
        e.preventDefault();
        if($('.g-social-hidden').is(":visible")){
            $(this).html('Load More');
        }else{
            $(this).html('Show Less');
        }
        $('.g-social-hidden').slideToggle();
    });
    
    //add classes to body for mobile/desktop
    if ($(window).width() < mobileBreakpoint) {
       isMobile = true;
       $('body').addClass('isMobile');
	   
	   $('.logo').hide();
	   
	   $('.logo-sm').css("visibility", "visible");
	   $('.logo-sm').show();
	   
    } else {
       isMobile = false;
       $('body').addClass('isDesktop');
	   
	   $('.logo').show();
	   $('.logo-sm').hide();
	   
    }

    window.addEventListener("resize", resized);


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

    $('.g-accord-header').click(function() {
        $(this).next().slideToggle();
        var icon = $(this).find('.g-icon')
        icon.toggleClass('ion-plus-round');
        icon.toggleClass('ion-minus-round');
    })

    //basic tabs
    $('a.tabChange').click(function(event) {
        event.preventDefault();
        $(this).addClass('g-active');
        $(this).siblings('.tabChange').removeClass('g-active');
        $('.g-tab-cta').removeClass('g-active');
        var tab = $(this).data('tab');
        $(tab).addClass('g-active');
        $(tab).siblings('.g-tab-content').removeClass('g-active');
    })

    /*------------------------------------*\
                    Crisis
    \*------------------------------------*/
    if ($('#crisis-level-one').length > 0) {
        $('header.g-header .mega-menu').css('margin-top', '50px');
    }

    /*-----------------------------------------*\
                    Emergency Scheduling
    \*------------------------------------------*/
    /*
    var currentDate = new Date();

    var startDate = new Date();
    startDate.setYear(2017);
    startDate.setMonth(10);
    startDate.setDate(09);
    startDate.setHours(16);
    startDate.setMinutes(30);

    // target date is Nov 14, 2017, 12:01pm
    var endDate = new Date();
    endDate.setYear(2018);
    // month starts from 0 so 2 means march 
    endDate.setMonth(1);
    endDate.setDate(11);
    endDate.setHours(16);
    endDate.setMinutes(1);

    if (currentDate >= startDate && currentDate <= endDate) {

        //$("<div id='crisis-level-one'><p=" + ">" + "Online application and registration is offline from 2 pm Friday, Nov. 10 to 7 am on Tuesday, Nov 14." + "</p></div>").prependTo("#page");
        $("<div id='crisis-level-one'><a href='http://www.sait.ca/'>Due to severe weather, all classes are cancelled today. Classes are expected to resume Friday. SAIT campus is open with limited services. Stay safe!</a></div>").prependTo("#page");

        //$('#crisis-level-one').css("font-size", "85%");

        $('header.g-header .mega-menu').css('margin-top', '50px');
    }

    */
    /*------------------------------------*\
                    Instagram
    \*------------------------------------*/ 

    //homepage 
    if($('#instafeed').length){
        var userFeed = new Instafeed({
            get: 'user',
            clientId: '8796ea28ab0c4239a296052d9a8e5b0e',
            //accessToken: '308019989.1677ed0.1573cbd7c18f4514bc7c55443f0a335a',
            accessToken: '308019989.1677ed0.20ea543c994d434282a96cdeb122eafa',
            userId: '308019989',
            limit: 4,
            sortBy: 'most-recent',
            template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
            resolution: 'low_resolution'
        });
        userFeed.run();
    }


    //social cards 
    if($('#saitInstagram1').length){
        var userFeed = new Instafeed({
            get: 'user',
            clientId: '8796ea28ab0c4239a296052d9a8e5b0e',
            accessToken: '308019989.1677ed0.20ea543c994d434282a96cdeb122eafa',
            userId: '308019989',
            target: 'saitInstagram1',
            limit: 1,
            sortBy: 'most-recent',
            template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
            resolution: 'standard_resolution'
        });
        userFeed.run();
    }

    if($('#saitInstagram2').length){
        var userFeed = new Instafeed({
            get: 'user',
            clientId: '8796ea28ab0c4239a296052d9a8e5b0e',
            accessToken: '308019989.1677ed0.20ea543c994d434282a96cdeb122eafa',
            userId: '308019989',
            target: 'saitInstagram2',
            limit: 2,
            sortBy: 'most-recent',
            template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
            resolution: 'standard_resolution'
        });
        userFeed.run();
    }

    
    /*-----------------------------------------*\
                  Global Header
    \*------------------------------------------*/


    //Main navigation hover
    $(".main-menu > li > a").hover(

        function() {
            if(isMobile === false){
                $(this).parent().siblings().removeClass('g-active');
                $(this).parent().addClass('g-active');

                var top = $(".headers-container").height();

                if ($('body.fixed-header').length > 0) {
                    top = 50;
                }else if(top === 103) {
                    var scrollTop     = $(window).scrollTop(),
                        elementOffset = $('.headers-container').offset().top,
                        top      = (elementOffset - scrollTop + 103);
                }

                $('header .mega-menu').css({
                    'top': top
                });

                $('header .logo').removeClass('box-shadow');
            }
        },

        function() {
            // $( this ).find( "span:last" ).remove();
            // $( ".main-menu > li > a" ).removeClass('g-active');
        }
    );

    //Main navigation hide
    $(".main-menu-row").hover(
        function() {
            // $( this ).parent().siblings().children().removeClass('g-active');
            // $( this ).addClass('g-active');
        },
        function() {
            if(isMobile === false){
                $(".main-menu > li").removeClass('g-active');
                $('header .logo').addClass('box-shadow');
            }
        }
    );

    //fixed/smaller header on scroll
    $(window).on("scroll touchmove", function(e) {
        //don't allow scrolling if we have the header search section open - fixes mobile bug
        if($('.search-section').is(":visible") && isMobile === true){
            $('body').css({'overflow' : 'hidden'});
        }else{

            $('body').toggleClass('fixed-header', $(document).scrollTop() > 51);
			
            var headerBreakpoint = 51;
            if ($('#info-banner-top').css("display") == "none")
            {
                headerBreakpoint = headerBreakpoint - 30;
            }

            if ($(document).scrollTop() <= headerBreakpoint)
            {
                if ($('#crisis-level-one').length > 0) {
                    $('header.g-header .mega-menu').css('margin-top', '50px');
                }

				if (isMobile === false)
				{
					$('.logo-sm').hide();
					$('.logo').show();
					
					
				}
			}
			else
            {
                if ($('#crisis-level-one').length > 0) {
                    $('header.g-header .mega-menu').css('margin-top', '0px');
                    $('header.g-header .mega-menu').css('top', '0px');
                }

				if (isMobile === false)
				{
				    //$('.logo').css("display", "none");
					$('.logo-sm').css("visibility", "visible");
					$('.logo-sm').show();

					

					
				}
				
			}
            if ($(document).scrollTop() > 0) {
                $('.search-section').slideUp();
                $(".main-menu > li").removeClass('g-active');
                $('header .logo').addClass('box-shadow');
            }
        }

        //show scroll to top arrow on mobile on longer pages. 
        if(isMobile === true){
            if($(document).scrollTop() > 1500 && $('.g-scroll-up').is(":hidden") ){
                $('.g-scroll-up').fadeIn();
            }else if($(document).scrollTop() <= 1500 && $('.g-scroll-up').is(":visible") ){
                $('.g-scroll-up').fadeOut();
            }
        }
        
    });


    //Hide search and recently viewed when you interact with the site
    $('html').click(function() {
        $('body').css({'overflow' : 'visible'});
        //$('.search-section, .recently-viewed').slideUp();
        $('.search-section').slideUp();
        $(".main-menu > li").removeClass('g-active');
        $('header .logo').addClass('box-shadow');
    });

    $('.headers-container').click(function(event) {
        event.stopPropagation();
    });

    //Main naviation - mobile menu
    $('.navToggle, .g-overlay').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('g-mobile-nav-open');
    });

    $('.mobileNavToggle').click(function(e){
        var ele = $(this);
        if(ele.parent().siblings().children('.ion-chevron-up + .mega-menu').length > 0){
           ele.parent().siblings().children('.ion-chevron-up + .mega-menu').slideUp('fast', function(){
                $(this).prev().toggleClass('ion-chevron-down');
                $(this).prev().toggleClass('ion-chevron-up');
                ele.toggleClass('ion-chevron-down');
                ele.toggleClass('ion-chevron-up');
                ele.next().slideToggle('fast', function() {
                    if(ele.hasClass('ion-chevron-up') === true){
                       $('.main-menu').animate({
                            scrollTop: $(this).offset().top - $(window).scrollTop() - 50
                        }, 100); 
                    }
                });
            }); 
        }else{
            ele.toggleClass('ion-chevron-down');
            ele.toggleClass('ion-chevron-up');
            ele.next().slideToggle('fast', function() {
                if($(this).prev().hasClass('ion-chevron-up') === true){
                   $('.main-menu').animate({
                        scrollTop: $(this).offset().top - $(window).scrollTop() - 50
                    }, 100); 
                }
            });
        }
    });

    //Recently viewed header
    $('.recentlyViewedToggle').click(function(e) {
        e.preventDefault();
        $('.search-section').slideUp();
        $('.recently-viewed').slideToggle();
    });

    //Recently viewed header - buttons
    $('.toggleCheck').click(function(e) {
        e.preventDefault();
        $(this).parent().fadeOut('fast');
    });

    //Recently viewed & search header
    $('.close-btn').click(function(e) {
        e.preventDefault();
        $('.search-section, .recently-viewed').slideUp();
    });

    //Search bar header
    /*
    $('.searchToggle').click(function(e) {
        e.preventDefault();
        $('.recently-viewed').slideUp();
        $('.search-section').slideToggle();
        $('.search-section').promise().done(function(){
        	if($('.search-section').is(":visible")){
        		$('#q').focus();
        	}
        })
    });
    */



    /*-----------------------------------------*\
                  Program pages
    \*------------------------------------------*/

    if ($('select.g-form-control.g-pull-right')["0"] != undefined) {
        if ($('select.g-form-control.g-pull-right')["0"].options.selectedIndex != 0) {
            $('select.g-form-control.g-pull-right').css("border", "1px solid #A6192E")
        }
    }

    if ($('select.g-icon-clock')["0"] != undefined) {
        if ($('select.g-icon-clock')["0"].options.selectedIndex != 0) {
            $('select.g-icon-clock').css("border", "1px solid #A6192E")

        }
    }

    if ($('select.g-icon-clock')["0"] != undefined) {
        if ($('select.g-icon-clock')["0"].options.selectedIndex != 0) {
            $('select.g-icon-clock').css("border", "1px solid #A6192E")

        }
    }

    if ($('select.g-icon-credential')["0"] != undefined) {
        if ($('select.g-icon-credential')["0"].options.selectedIndex != 0) {
            $('select.g-icon-credential').css("border", "1px solid #A6192E")

        }
    }


    if ($('select.g-icon-arrow')["0"] != undefined) {
        if ($('select.g-icon-arrow')["0"].options.selectedIndex != 0) {
            $('select.g-icon-arrow').css("border", "1px solid #A6192E")

        }
    }


    // fade in the program and course count
    if ($('.program-count') != undefined) {
        $('.program-count').delay(100).fadeTo(200, 1);
    }
    
    if ($('.course-count') != undefined) {
        $('.course-count').delay(100).fadeTo(200, 1);
    }

    //fixed tab nav on scroll - program pages
    if($('.g-tabs-container').length>0){
        $(window).on("scroll touchmove", function() {
            var scrollTop     = $(window).scrollTop(),
            elementOffset = $('.g-tabs-container').offset().top,
            distance      = (elementOffset - 50);
            $('.g-tabs-container').toggleClass('g-fixed', $(document).scrollTop() > distance);
        });  
    }

    //Program page tabs - mobile menu
    $('.g-tab-toggle').click(function(e) {
        e.preventDefault();
        $(this).siblings().toggleClass('g-show');
    });



    /*-----------------------------------------*\
                     Homepage
    \*------------------------------------------*/
    $.ajax({
        url: "assets/prebuilt/data/banners.json",
        success: function () {
            $.getJSON("assets/prebuilt/data/banners.json", function (data) {

                var dateNow = new Date();

                var overlayLastSeenCookie = document.cookie.replace(/(?:(?:^|.*;\s*)overlayLastSeen\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                // if there is no cookie, show banner
                if (!overlayLastSeenCookie) {

                    var today = new Date();
                    var expiryDate = new Date();
                    expiryDate.setDate(today.getDate() + 1);

                    document.cookie = "overlayLastSeen=" + "1" + "; expires=" + expiryDate + "\"";

                    for (i = 0; i < data.banners.length; i++) {
                        var bannerStartDate = new Date(data.banners[i].startDate);
                        var bannerEndDate = new Date(data.banners[i].endDate);

                        if (dateNow >= bannerStartDate && dateNow <= bannerEndDate) {
                            var bannerType = data.banners[i].type;

                            var bannerHeader = data.banners[i].header;
                            var bannerMessage = data.banners[i].message;
                            var bannerButton = data.banners[i].button;
                            var bannerBgColor = data.banners[i].bgColor;
                            var bannerBgImage = data.banners[i].bgImage;
                            var bannerCloseBtnBgColor = data.banners[i].closeBtnBgColor;
                            var bannerCloseBtnFgColor = data.banners[i].closeBtnFgColor;

                            var overlay = undefined;

                            if (bannerType == "image") {
                                overlay = $('<div class="banner overlay"><div class="g-container"><span id="overlay-btn"><a href="#"></a></span><div id="image-msg-overlay"><h2>' + bannerHeader + '</h2><div class="promo"><h3>' + bannerMessage + '</h3></div>' + bannerButton + '</div></div></div>');

                                // overlay = $('<div class="banner overlay" id="remday"><div class="g-container"><span id="overlay-btn"><a href="#"></a></span><h2>In remembrance</h2><h3>Remembering those who have served for Canada</h3><img src="https://www.sait.ca/assets/prebuilt/img/campaign-assets/remembrance-day/remembrance-day-poppy.jpg"></div></div>');

                                //overlay.css('background-color', bannerBgColor);
                                overlay.css('background-image', bannerBgImage);


                            }
                            else if (bannerType == "video") {
                                var bannerVideoSrc = data.banners[i].videoSrc;


                                overlay = $('<div class="overlay"><video preload="auto" poster="' + bannerBgImage + '" playsinline autoplay muted loop><source src="' + bannerVideoSrc + '"type="video/mp4"></video> <div id="video-msg-overlay"><h2>' + bannerHeader + '</h2><h3>' + bannerMessage + '</h3></div><span id="overlay-btn"><a class="ion-close-round"></a></span></div>');
                            }


                            $(".reds").hide();
                            $(".campaign-holder").css("display", "none");


                            $('#FutureStudents').hide();
                            overlay.appendTo('#hp-banner');



                            $('#overlay-btn').css('background-color', bannerCloseBtnBgColor);
                            $('#overlay-btn a').css('color', bannerCloseBtnFgColor);


                            $('.analytics').on('click', function () {
                                var linkText = $(this).text();
                                var eventCategory = $(this).data("event-category");
                                var eventLabel = $(this).data("event-label");

                                if (eventCategory != null && eventCategory != "" && eventLabel != null && eventLabel != "") {
                                    ga('send', 'event', { eventCategory: eventCategory, eventAction: 'Click', eventLabel: eventLabel });
                                }
                            });

                            $('.event-ga-links').click(function () {
                                var eventCategory = $(this).attr("event-category");
                                var eventLabel = $(this).attr("event-label");
                                var eventAction = $(this).attr("event-action");
                                if (eventCategory != null && eventCategory != "" && eventLabel != null && eventLabel != "" && eventAction != null && eventAction != "") {
                                    ga('send', 'event', { eventCategory: eventCategory, eventAction: eventAction, eventLabel: eventLabel });
                                }
                            });

                            setTimeout(function () {
                                $('.overlay').remove();
                                $('#FutureStudents').show();

                                // $("#-chp-applications-open").css("display", "block")
                                // $("#-oh-start").delay(600).slideDown(300)
                                $(".reds").css("display", "block");
                                $("#swn").css("display", "block");

                            }, 15000);


                            

                            $('#overlay-btn').on('click', function () {

                                $('.overlay').remove();
                                $('#FutureStudents').show();
                                $(".campaign-holder").css("display", "block");
                                $(".reds").css("display", "block");
                                $("#swn").css("display", "block")

                            });
                        }
                    }
                }
                else
                {
                    $("#swn").css("display", "block")
                }
            });
        }
    });
	
    /*
    //banner nav
     $('#hp-banner').click(function(e) {
        if(isMobile === false){
            e.preventDefault();
        }
    });
    */

    //Homepage interest slider - select interest function for desktop only
//    $('.g-interest-slider .g-interest-slide .g-img').click(function() {
//        if(isMobile === false){
//            $(this).parent().siblings().removeClass('g-open');
//            $(this).parent().addClass('g-open');
//            var activeSlide = $(this).parent();
//            var index = $(activeSlide).attr("data-slick-index");
//            $('.g-interest-slider').slick('slickGoTo', index);
//        }
//    });

//    $('.g-interest-slider').on('afterChange', function(event, slick, currentSlide){
//        if(isMobile === false){
//            $('.g-interest-slider .g-interest-slide:not(.slick-current)').removeClass('g-open');
//        }
//    });

    $('.g-interest-slider .g-interest-slide .g-img').hover(
        function() {
            $(this).parent().addClass('g-open');
        }, function() {
            $(this).parent().removeClass('g-open');
        }
    );

    //home page video modal (remodal - http://vodkabears.github.io/remodal/) - play on open and stop on close.
    $(document).on('closing', '#videoRemodal', function (e) {
        $('#saitVideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');   
    });

    $(document).on('opened', '#videoRemodal', function () {
        $('#saitVideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*'); 
    });



    /*-----------------------------------------*\
                     Sliders
    \*------------------------------------------*/


    //homepage slider
    $('.g-interest-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        cssEase: 'linear',
        variableWidth: true,
        speed: 300,
        initialSlide: 3,
        infinite: false,
        focusOnSelect: false,
        swipeToSlide: true,
        responsive: [{
            breakpoint: 800,
            settings: {
                centerMode: false,
                variableWidth: false,
                initialSlide: 0,
                infinite: true,
                centerPadding: '40px',
                slidesToScroll: 3,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 650,
            settings: {
                centerMode: false,
                variableWidth: false,
                initialSlide: 0,
                infinite: true,
                centerPadding: '40px',
                slidesToScroll: 3,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 450,
            settings: {
                centerMode: false,
                variableWidth: false,
                initialSlide: 0,
                infinite: true,
                centerPadding: '40px',
                slidesToScroll: 2,
                slidesToShow: 2
            }
        }]
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


    //card slider - inspiring stories - make it a slider if we have more then one item
    if($('.card-slider-cards .g-slide').length > 1){

        $('.card-slider-cards').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.card-slider-text',
            centerPadding: '65px',
            centerMode: true,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 1100,
                settings: {
                    centerPadding: '30px',
                }
            }, {
                breakpoint: 940,
                settings: {
                    centerPadding: '260px',
                }
            }, {
                breakpoint: 800,
                settings: {
                    centerPadding: '150px',
                }
            }, {
                breakpoint: 700,
                settings: {
                    centerPadding: '110px',
                }
            }, {
                breakpoint: 520,
                settings: {
                    centerPadding: '50px',
                }
            }]
        });

        $('.card-slider-text').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            asNavFor: '.card-slider-cards'
        });

    }


    //Small card slider (campus page)
    $('.g-sm-slider').slick({
        slidesToShow: 3,
        cssEase: 'linear',
        speed: 700,
        focusOnSelect: false,
        swipeToSlide: true,
        touchMove: false,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 940,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 540,
            settings: {
                slidesToShow: 1
            }
        }]
    });



    /*-----------------------------------------*\
            How to Apply - static page
    \*------------------------------------------*/


    //how to apply page - fixed nav and active states on scroll (desktop only)
    if($('.g-apply-nav-container').length>0){
        $(window).on("scroll touchmove", function() {
            if(isMobile === false){

                //fixed nav on scroll
                var scrollTop = $(window).scrollTop(),
                elementOffset = $('.g-apply-nav-container').offset().top,
                distance      = (elementOffset - 50);
                $('.g-apply-nav-container').toggleClass('g-fixed', $(document).scrollTop() > distance);

                //nav active state on scroll
                $('.g-timeline-section').each(function() {
                    var currentSection = $(this);
                    var id = $(this).attr('id');
                    if (currentSection.position().top + currentSection.height() <= scrollTop) {
                        if(!$('[data-scroll=' + id + ']').hasClass('.g-active')){
                            $('.g-apply-nav a').removeClass('g-active');
                            $('[data-scroll=' + id + ']').addClass('g-active');   
                        }
                    }
                });
            }
        });  
    }

    //apply nav scroll
    $('.g-apply-nav a').click(function (event) {
        var distance = 150;
        if (isMobile === true) {
            var distance = 80;
        }
        event.preventDefault();
        var el = $(this).data('scroll');
        $('.g-apply-nav a').removeClass('g-active');
        $(this).addClass('g-active');
        $('html, body').animate({
            scrollTop: $("#" + el).offset().top - distance
        }, 500);
    });

    $(window).on("load", function () {
        // add noopener to the rel property for all external links for added security
        $("a[target='_blank']").attr('target', '_blank').attr('rel', "noopener");

        // update the chat status based on the time
        var curDate = new Date();
        curDateDay = curDate.getDay();
        curDateHour = curDate.getHours();
        curDateMinute = curDate.getMinutes();

        // if current day is saturday or sunday
        if (curDateDay == 6 || curDateDay == 0) {
			if (curDateHour >= 10 && curDateHour <= 16)
			{
				if (curDateHour == 16)
				{
					// chat is open if the time is not 4:30pm yet
					if (curDateMinute <= 30)
					{
						$("#chat-status").removeClass("g-icon-closed");
						$("#chat-status").addClass("g-icon-open");
					}
					else
					{
						// chat is closed after 4:30pm
						$("#chat-status").removeClass("g-icon-open");
						$("#chat-status").addClass("g-icon-closed")
					}

				}
				else
				{
					// chat is open between 10am and 4:30pm
					$("#chat-status").removeClass("g-icon-closed");
                    $("#chat-status").addClass("g-icon-open");
				}
			}
			else
			{
				// chat is off
				$("#chat-status").removeClass("g-icon-open");
				$("#chat-status").addClass("g-icon-closed")
			}
            
        }
        // if current day is monday to thursday
        else if (curDateDay > 0 && curDateDay <= 4) {
            if (curDateHour >= 7 && curDateHour <= 22) {
                if (curDateHour == 7) {
                    if (curDateMinute >= 30)
                    {
                        // chat is open from 7:30am
                        $("#chat-status").removeClass("g-icon-closed");
                        $("#chat-status").addClass("g-icon-open");
                    }
					else
					{
						// chat is closed for earlier than 7:30
						$("#chat-status").removeClass("g-icon-open");
                        $("#chat-status").addClass("g-icon-closed");
					}
                    
                }
                else if (curDateHour == 22) {
                    if (curDateMinute > 30) {
                        // chat is closed at 10:30pm
                        $("#chat-status").removeClass("g-icon-open");
                        $("#chat-status").addClass("g-icon-closed");
                    }
                    else
                    {
                        $("#chat-status").removeClass("g-icon-closed");
                        $("#chat-status").addClass("g-icon-open");
                    }

                }
                else
                {
					// chat is open between hours 7:30am and 10:30pm
                    $("#chat-status").removeClass("g-icon-closed");
                    $("#chat-status").addClass("g-icon-open");
                }
            }
            else
            {
                // chat is off for hours earlier than 7am and later than 10pm
                $("#chat-status").removeClass("g-icon-open");
                $("#chat-status").addClass("g-icon-closed");
            }
        }
        // friday
        else if (curDateDay == 5)
        {
			// if the hour is between 7am and 8pm
            if (curDateHour >= 7 && curDateHour <= 20)
            {
				if (curDateHour == 7)
				{
					if (curDateMinute >= 30)
					{
						// chat is open from 7:30am
						$("#chat-status").removeClass("g-icon-closed");
						$("#chat-status").addClass("g-icon-open");
					}
					else
					{
						// chat is closed for earlier than 7:30am
						$("#chat-status").removeClass("g-icon-open");
                        $("#chat-status").addClass("g-icon-closed");
					}
				}
				else if (curDateHour == 20)
				{
					if (curDateMinute < 30)
					{
						// chat is open before 10:30pm
						$("#chat-status").removeClass("g-icon-closed");
						$("#chat-status").addClass("g-icon-open");
					}
					else
					{
						// chat is closed after 10:30pm
						$("#chat-status").removeClass("g-icon-open");
                        $("#chat-status").addClass("g-icon-closed");
					}
				}
				else
				{
					// chat is open before 7:30am and 10:30pm
					$("#chat-status").removeClass("g-icon-closed");
					$("#chat-status").addClass("g-icon-open");
				}
				
                
            }
			else
			{
				// chat is closed outside of 7:30am and 10:30pm
				$("#chat-status").removeClass("g-icon-open");
				$("#chat-status").addClass("g-icon-closed");
			}
			
        }
    });

    
    $('#myform').submit(function(event) {
    //document.getElementById("myform").onsubmit = function(event){
        var link = document.getElementById("mylink");
        var textField = document.getElementById("text");
        link.href = textField.value;
        textNode = document.createTextNode(textField.value);
        if(link.hasChildNodes()) {
            link.removeChild(link.lastChild);
        }
        link.appendChild(textNode);
        event.preventDefault();
    });
    
    $('a[class=analytics]').click(function () {
        var linkText = $(this).text();
        var eventCategory = $(this).data("event-category");
        var eventLabel = $(this).data("event-label");

        if (eventCategory != null && eventCategory != "" && eventLabel != null && eventLabel != "") {
            ga('send', 'event', { eventCategory: eventCategory, eventAction: 'Click', eventLabel: eventLabel });
        }
    });
    $('.event-ga-links').click(function () {
        var eventCategory = $(this).attr("event-category");
        var eventLabel = $(this).attr("event-label");
        var eventAction = $(this).attr("event-action");
        if (eventCategory != null && eventCategory != "" && eventLabel != null && eventLabel != "" && eventAction != null && eventAction != "") {
            ga('send', 'event', { eventCategory: eventCategory, eventAction: eventAction, eventLabel: eventLabel });
        }
    });
    $('#privacy-banner-close-btn').click(function () {
        $("#privacy-banner").css("display", "none");
        $("#chat-widget-container").css("display", "block");
        $("#livechat-compact-container").css("display", "block");
    });

});

$(window).on("load", function () {
    // privacy policy cookie
    var privacyPolicyLastSeenCookie = document.cookie.replace(/(?:(?:^|.*;\s*)privacyPolicyLastSeen\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (privacyPolicyLastSeenCookie == "") {

        $("#livechat-compact-container").css("display", "none");
        $("#privacy-banner").css("display", "block");

        var today = new Date();
        var expiryDate = new Date();
        expiryDate.setDate(today.getDate() + 180);

        document.cookie = "privacyPolicyLastSeen=" + "1" + "; expires=" + expiryDate.toUTCString() + "\"";
    }
    else {
        $("#chat-widget-container").css("display", "block");
        $("#livechat-compact-container").css("display", "block");
    }
});


