var client = algoliasearch("LKAY4PJWX5", "89183924eb6e3c0683d98dc926b3ea64");
var index = client.initIndex('sait');

var menuTemplate =
  '<a href="javascript:void(0);" class="facet-item {{#isRefined}}active{{/isRefined}}"><span class="facet-name"><i class="fa fa-angle-right"></i> {{name}}</span class="facet-name"></a>';

var facetTemplateCheckbox =
  '<a href="javascript:void(0);" class="facet-item">' +
    '<input type="checkbox" class="{{cssClasses.checkbox}}" value="{{name}}" {{#isRefined}}checked{{/isRefined}} />{{name}}' +
    '<span class="facet-count">({{count}})</span>' +
  '</a>';

var structuredData = "";

var placeHolderText = "Enter Your Search Term Here";

index.setSettings({
    paginationLimitedTo: 0 // disable the limit for infinite scrolling
});

var search = instantsearch({
    appId: "LKAY4PJWX5",
    apiKey: "89183924eb6e3c0683d98dc926b3ea64",
    indexName: "sait",
    urlSync: {},
    searchFunction: function (helper) {
        if (helper.state.query === "") {

            $("#search-results").hide();
            $("#search-label").hide();
            return;
        }

        if (($("#q")[0].value != "") && ($("#q")[0].value != placeHolderText)) {
            helper.search();
        }

        $("#search-results").show();
        $("#search-label").show();

        $("#searchresult-left").click(function () {

        });
    }
});

search.addWidget(
  instantsearch.widgets.searchBox({
      container: '#q'
  })
);

var readyToFetchMore = true;

refinementListTemplate = "<label style=\" cursor: pointer;\" \">{{name}} <span class=\"ais-refinement-list--count\">({{count}})</span></label>";

search.addWidget(
  {
      init: function (params) {
          params.helper.setQueryParameter('hitsPerPage', 50);

          function scrollhandler() {

              var isAtBottomOfPage = $(window).scrollTop() + $(window).height()
                                      > $(document).height() - 500;

              if (readyToFetchMore && isAtBottomOfPage) {
                  readyToFetchMore = false;
                  params.helper.nextPage().search();
              }
          }

          $(window).bind("scroll", scrollhandler);
      },

      render: function (params) {

          $("#search-result-label").css("display", "block");

          if (window.location.href.indexOf("/summer-camps?") > 0 || window.location.href.indexOf("/summer-camps/") >= 0 || window.location.href.endsWith("summer-camps")) {
              $("#searchresult-left").css("display", "none");
              $("#search-count-label").css("display", "none");
          }
          else {
              
              $("#searchresult-left").css("display", "block");
          }


          readyToFetchMore = true;

          
          var hits = params.results.hits;

          var hitsContainer = $("#search-results");

          if (params.state.page === 0) { // because '0' means we changed the query
              //params.results.hits.splice(1, 0, { Title: "This is a promo 1", "Type": "PromoOne" });
              //params.results.hits.splice(3, 0, { Title: "This is a promo 2", "Type": "PromoTwo" });
              //params.results.hits.splice(5, 0, { Title: "This is a promo 3", "Type": "PromoThree" });
              hitsContainer.html('');
          }

          var html = '';

          if (params.results.nbHits > 0) {

              html = hits.map(function (hit) {

                  var hitTemplate = "";
                  if (window.location.href.indexOf("/summer-camps?") > 0 || window.location.href.indexOf("/summer-camps/") >= 0 || window.location.href.endsWith("summer-camps")) {
                      
                      if (hit.Schema == "CampDetailSYO" || hit.Schema == "TwoColumnBannerSYO") {
                          hitTemplate =
                              '<div class="hit media">' +
                              '<div class="media-left">' +
                              '<div class="media-object" style="background-image: url(\'assets/images/' + hit.ImagePath + '\');"></div>' +
                              '</div>' +
                              '<div class="media-body">' +
                              '  <div class="media-heading"><a href="' + hit.Url + '"> ' + hit.Title + '</a></div>' +
                              '  <div class="media-abstract">' + hit.Abstract + '</div>' +
                              '  <div class="media-url"><a href="' + hit.Url + '" >' + hit.Url + '</a></div>' +
                              '</div>' +
                              '</div>';
                      }
                  }
                  else {
                      if (hit.Schema == "ProgramsDetail") {
                          hitTemplate = '<div class="hit media">' +
                              '<div class="media-left">' +
                              '<div class="media-object" style="background-image: url(\'assets/images/' + hit.ImagePath + '\');"></div>' +
                              '</div>' +
                              '<div class="media-body">' +
                              '  <div class="media-heading"><a href="' + hit.Url + '"> ' + hit.Title + '</a></div>' +
                              '  <div class="media-abstract">' + hit.Abstract + '</div>' +
                              '  <div class="media-url"><a href="' + hit.Url + '" >' + hit.Url + '</a></div>';


                          try {

                              //if (hit.Highlights != null && hit.Highlights.Term[0].Value != "Ongoing" && hit.Highlights.Term[0].Value.includes("Waitlisted") == false) {
                              if (hit.Highlights.Term0 != "Ongoing" && hit.Highlights.Term0.indexOf("Open") >= 0 && hit.Highlights.Term0.indexOf("Waitlisted") < 0) {
                                  hitTemplate +=
                                      '  <div class="media-info">' +
                                      '  <div class="media-border"></div>' +
                                      '  <a class="program-term" href="' + hit.Url + '">' + hit.Highlights.Term0 + '</a>';

                                  if (hit.Highlights.NextInfoSessionDate != null) {
                                      hit.Highlights.NextInfoSessionUrl = hit.Highlights.NextInfoSessionUrl.replace("https://live-timely-ymr3dz1b2x.time.ly/", "");
                                      hit.Highlights.NextInfoSessionUrl = hit.Highlights.NextInfoSessionUrl.replace(/\//g, '|');
                                      hit.Highlights.NextInfoSessionUrl = hit.Highlights.NextInfoSessionUrl.replace("event", "#event");
                                      hit.Highlights.NextInfoSessionUrl = hit.Highlights.NextInfoSessionUrl.replace("?instance_id=", "");

                                      hitTemplate +=
                                          '  <a class="program-info-session" onclick="openInfoSessionClicked(this,' + '\'' + hit.Highlights.NextInfoSessionUrl + '\'' + ');">' + "Info Session: " + hit.Highlights.NextInfoSessionDate + '</a>';
                                  }
                                  hitTemplate +=
                                      '  </div>';
                              }


                          }
                          catch (ex) {

                          }

                          hitTemplate +=
                              '</div>' +
                              '</div>';
                      }
                      else if (hit.Schema == "CourseDetailPage") {
                          hitTemplate =
                              '<div class="hit media">' +
                              '<div class="media-left">' +
                              '<div class="media-object" style="background-image: url(\'assets/images/' + hit.ImagePath + '\');">' +
                              '<div class="conedcircle">Continuing<br> Education</div>' +
                              '</div>' +
                              '</div>' +
                              '<div class="media-body">';
                          if (hit.Highlights.OldCourseCode != undefined)
                          {
                              hitTemplate = hitTemplate + '  <div class="media-heading"><a href="' + hit.Url + '"> ' + hit.Title + '<span style="color: #C0C0C0;font-weight: normal;font-size: 0.875em;margin-left: 0.5em;"> (Formerly ' + hit.Highlights.OldCourseCode + ')</span></a></div>';
                          }
                          else
                          {
                              hitTemplate = hitTemplate + '  <div class="media-heading"><a href="' + hit.Url + '"> ' + hit.Title + '</a></div>';
                          }

                          hitTemplate = hitTemplate + 
                              '  <div class="media-abstract">' + hit.Abstract + '</div>' +
                              '  <div class="media-url"><a href="' + hit.Url + '" >' + hit.Url + '</a></div>' +
                              '</div>' +
                              '</div>';
                      }
                      //else if (hit.Url.includes("/sait-recreation")) {
                      else if (hit.Url.indexOf("/sait-recreation") >= 0) {
                          hitTemplate =
                              '<div class="hit media">' +
                              '<div class="media-left">' +
                              '<div class="media-object" style="background-image: url(\'assets/images/' + hit.ImagePath + '\');">' +
                              '<div class="recreationcircle">SAIT<br/>Recreation</div>' +
                              '</div>' +
                              '</div>' +
                              '<div class="media-body">' +
                              '  <div class="media-heading"><a href="' + hit.Url + '"> ' + hit.Title + '</a></div>' +
                              '  <div class="media-abstract">' + hit.Abstract + '</div>' +
                              '  <div class="media-url"><a href="' + hit.Url + '" >' + hit.Url + '</a></div>' +
                              '</div>' +
                              '</div>';
                      }
                      else if (hit.AboutSAIT.indexOf("SAIT News") >= 0) {
                          hitTemplate =
                              '<div class="hit media">' +
                              '<div class="media-left">' +
                              '<div class="media-object" style="background-image: url(\'assets/images/' + hit.ImagePath + '\');"></div>' +
                              '</div>' +
                              '<div class="media-body">' +
                              '  <div class="media-heading"><a href="' + hit.Url + '"> ' + hit.Title + '</a></div>' +
                              '  <div class="media-abstract">' + hit.Abstract + '</div>' +
                              '  <div class="media-url"><span class="media-label">SAIT News</span><a href="' + hit.Url + '" >' + hit.Url + '</a></div>' +
                              '</div>' +
                              '</div>';
                      }
                      else if (hit.Title == "Culinary Campus") {
                          hitTemplate =
                              '<div class="hit media">' +
                              '<div class="media-left">' +
                              '<div class="media-object" style="border:none !important;background-image: url(\'assets/images/' + hit.ImagePath + '\');"></div>' +
                              '</div>' +
                              '<div class="media-body">' +
                              '  <div class="media-heading"><a href="' + hit.Url + '"> ' + hit.Title + '<span class="ion-forward g-icon-right"></span></a></div>' +
                              '  <div class="media-abstract">' + hit.Abstract + '</div>' +
                              '  <div class="media-url"><a href="' + hit.Url + '" >' + hit.Url + '</a></div>' +
                              '</div>' +
                              '</div>';
                      }
                      else if (hit.Url.indexOf("/reg-erhardt") >= 0) {
                          hitTemplate =
                              '<div class="hit media">' +
                              '<div class="media-left">' +
                              '<div class="media-object" style="background-image: url(\'assets/images/' + hit.ImagePath + '\');">' +
                              '<div class="conedcircle">Reg Erhardt<br/>Library</div>' +
                              '</div>' +
                              '</div>' +
                              '<div class="media-body">' +
                              '  <div class="media-heading"><a href="' + hit.Url + '"> ' + hit.Title + '</a></div>' +
                              '  <div class="media-abstract">' + hit.Abstract + '</div>' +
                              '  <div class="media-url"><a href="' + hit.Url + '" >' + hit.Url + '</a></div>' +
                              '</div>' +
                              '</div>';
                      }
                      else if (hit.Type == "External") {
                          hitTemplate =
                              '<div class="hit media">' +
                              '<div class="media-left">' +
                              '<div class="media-object" style="background-image: url(\'assets/images/' + hit.ImagePath + '\');">' +

                              '</div>' +
                              '</div>' +
                              '<div class="media-body">' +
                              '  <div class="media-heading"><a href="' + hit.Url + '"> ' + hit.Title + '<span class="ion-forward g-icon-right"></span></a></div>' +
                              '  <div class="media-abstract">' + hit.Abstract + '</div>' +
                              '  <div class="media-url"><a href="' + hit.Url + '" >' + hit.Url + '</a></div>' +
                              '</div>' +
                              '</div>';
                      }
                      else if (hit.Url.indexOf("/summer-camps") >= 0 || hit.Url.indexOf("/youth-programs") >= 0) {
                          hitTemplate =
                              '<div class="hit media">' +
                              '<div class="media-left">' +
                              '<div class="media-object youth-border-color" style="background-image: url(\'assets/images/' + hit.ImagePath + '\');"></div>' +
                              '</div>' +
                              '<div class="media-body">' +
                              '  <div class="media-heading"><a class="title-youth" href="' + hit.Url + '"> ' + hit.Title + '</a></div>' +
                              '  <div class="media-abstract">' + hit.Abstract + '</div>' +
                              '  <div class="media-url"><span class="media-label media-youth-link">SAIT Youth Programs</span><a href="' + hit.Url + '" >' + hit.Url + '</a></div>' +
                              '</div>' +
                              '</div>';
                      }
                      else {
                          hitTemplate =
                              '<div class="hit media">' +
                              '<div class="media-left">' +
                              '<div class="media-object" style="background-image: url(\'assets/images/' + hit.ImagePath + '\');"></div>' +
                              '</div>' +
                              '<div class="media-body">' +
                              '  <div class="media-heading"><a href="' + hit.Url + '"> ' + hit.Title + '</a></div>' +
                              '  <div class="media-abstract">' + hit.Abstract + '</div>' +
                              '  <div class="media-url"><a href="' + hit.Url + '" >' + hit.Url + '</a></div>' +
                              '</div>' +
                              '</div>';
                      }
                  }
                  

                  var promoTemplateOne =
                    '<div class="promo-hit promo-hit1">' +
                        '<h1> <a href="http://www.google.com">' + hit.Title + '</a></h1>' +
                        '<br/><br/>' +
                    '</div>'

                  var promoTemplateTwo =
                     '<div class="promo-hit promo-hit2">' +
                         '<h1> <a href="http://www.google.com">' + hit.Title + '</a></h1>' +
                         '<br/><br/>' +
                     '</div>'

                  var promoTemplateThree =
                      '<div class="promo-hit promo-hit3">' +
                          '<h1> <a href="http://www.google.com">' + hit.Title + '</a></h1>' +
                          '<br/><br/>' +
                      '</div>'

                  if (hit.Type == "Page" || hit.Type == "PDF" || hit.Type == "External") {
                      return hitTemplate;
                  }
                  else if (hit.Type == "PromoOne") {
                      return promoTemplateOne;
                  }
                  else if (hit.Type == "PromoTwo") {
                      return promoTemplateTwo;
                  }
                  else {
                      return promoTemplateThree;
                  }

              });

          } else {

              readyToFetchMore = false;

              var noResultsTemplate =
                '<div id="search-error-no-results">' +
	                '<h1>WE COULD NOT FIND ANY RESULTS FROM YOUR SEARCH</h1>' +
	                '<div id="search-error-msg">' +
		                'Please type something new, or try again from these popular options.' +
	                '</div>' +
	            '<div id="search-suggestions">' +
		            '<a href="https://www.sait.ca/programs-and-courses">Programs and Courses</a>' +
		            '<a href="https://www.sait.ca/training-resources/test-pages/area-of-interest-landing-page">Areas of Interest</a>' +
		            '<a href="https://www.sait.ca/about-sait/work-at-sait">Careers at SAIT</a>' +
		            '<a href="https://www.sait.ca/about-sait/campus/campus-map">Campus Map</a>' +
		            '<a href="https://www.sait.ca/admissions">Admissions</a>' +
		            '<a href="https://tour.sait.ca/gsv/tour-sait.html">Take a virtual tour</a>' +
		            '</div>' +
                '</div>';


              html = [noResultsTemplate];

              $("#searchresult-left").css("display", "none");
              $("#search-result-label").css("display", "none");
          }

          hitsContainer.append(html.join(''));
          if (window.location.href.indexOf("/summer-camps?") > 0 || window.location.href.indexOf("/summer-camps/") >= 0 || window.location.href.endsWith("summer-camps")) {
              return;
          }
          else {
              for (i = 0; i < structuredData.length; i++) {
                  for (j = 0; j < structuredData[i].Keywords.length; j++) {
                      if (params.state.query.toLowerCase().indexOf(structuredData[i].Keywords[j]) > -1) {
                          if ($(".structured-result").length == 0) {
                              $("#search-results").prepend("<div class=\"structured-result\">" + structuredData[i].Html + "</div>");
                          }
                      }
                  }
              }
          }
          
      }
  }
);

search.addWidget(
  instantsearch.widgets.refinementList({
      container: '#search-facet-fulltime',
      attributeName: "FullTime",
      operator: "or",
      templates: {
          header: "<div style=\" font-size: 18px; \">Full Time </>",
          item: refinementListTemplate
      },
      cssClasses: { "active": "selected" }

  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
      container: '#search-facet-continuingeducation',
      attributeName: "ContinuingEducation",
      operator: "or",
      templates: {
          header: "<div style=\" font-size: 18px; \"> Continuing Education </>",
          item: refinementListTemplate
      },
      cssClasses: { "active": "selected" }

  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
      container: '#search-facet-admissions',
      attributeName: "Admissions",
      templates: {
          header: "<div style=\" font-size: 18px; \"> Admissions </div>",
          item: refinementListTemplate
      },
      cssClasses: { "active": "selected" }

  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
      container: '#search-facet-studentlife',
      attributeName: "StudentLife",
      templates: {
          header: "<div style=\" font-size: 18px; \"> Student Life </div>",
          item: refinementListTemplate
      },
      cssClasses: { "active": "selected" }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
      container: '#search-facet-aboutsait',
      attributeName: "AboutSAIT",
      templates: {
          header: "<div style=\" font-size: 18px; \"> About SAIT </div>",
          item: refinementListTemplate
      },
      cssClasses: { "active": "selected" }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
      container: '#search-facet-alumni',
      attributeName: "Alumni",
      templates: {
          header: "<div style=\" font-size: 18px; \"> Alumni </div>",
          item: refinementListTemplate
      },
      cssClasses: { "active": "selected" }
  })
);

search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#search-facet-youthprograms',
        attributeName: "YouthPrograms",
        templates: {
            header: "<div style=\" font-size: 18px; \"> Youth Programs </div>",
            item: refinementListTemplate
        },
        cssClasses: { "active": "selected" }
    })
);

search.addWidget(
    instantsearch.widgets.stats({
        container: '#search-count-label',
        templates: {
            body: function (data) {
                var retrievedHitsCount = data.hitsPerPage * data.page + data.hitsPerPage;

                if (retrievedHitsCount > data.nbHits) {
                    retrievedHitsCount = data.nbHits;
                }

                return "1" + ' - ' + retrievedHitsCount + ' of ' + data.nbHits + ' Results';
            },
        }

    })
);

/*
search.addWidget(
  instantsearch.widgets.clearAll({
      container: '#clear-all',
      templates: {
          link: '<i class="fa fa-eraser"></i> Clear all filters'
      },
      cssClasses: {
          root: 'btn btn-block btn-default'
      },
      autoHideContainer: true
  })
);
*/

var queryParameter = getUrlParameter("q");

if (queryParameter != undefined && queryParameter != "") {
    ga('send', 'event', { eventCategory: 'Algolia Search', eventAction: 'Click', eventLabel: 'Search Icon Click' });
    $("main").css("display", "none");
    $(".mainsearchouter").css("display", "block");
    $("#search-feedback").css("display", "block");
    //$(".searchbox-container").css("display", "block");
    $(".searchbox-container").fadeIn();
    $('#q').focus();

    search.start();
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.toLowerCase().split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1].toLowerCase();
        }
    }
}


function onSearchInput() {

    //if enter key is pressed, we want to scroll to results
    /*if (event.keyCode == 13) {
        event.target.blur();
    }*/

    if ($("#q")[0].value == "") {
        // hide everything in the search results
        $("#search-display").css("display", "none");

        $("#start-typing-text").css("visibility", "visible");

        $(".mainsearchouter").css('background-image', 'url(https://www.sait.ca/assets/images/algolia/catalyst-search-landing.png)');
        //$("#q")[0].value = placeHolderText;
        $("#q")[0].setSelectionRange(0, 0);
        $("#q")[0].focus();
        $("#q").css("color", "lightgray");
        isPlaceHolderSearchTextVisible(true); //show placeholder text
    }
    else {
        isPlaceHolderSearchTextVisible(false);
        // show everything in the search results
        $("#search-display").css("display", "block");

        $("#start-typing-text").css("visibility", "hidden");

        // show the search filter section
        //$("#searchresult-left").css("display", "block");

        //$("#search-pagination").css("display", "block");
        $(".mainsearchouter").css("background-image", "none");

        $("#q").css("color", "rgb(0, 104, 169)");
    }

    if ($("#placeholderSearchText").hasClass("fadeAnimateTextColor")) {
        $("#placeholderSearchText").removeClass("fadeAnimateTextColor");
    }
}

// endsWith function for IE11
String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};



$(document).ready(function () {

    window.scrollTo(0, 0);

    if (window.location.href.indexOf('?q=') >= 0 && window.location.href.indexOf('?q=&') < 0) {
        $("main").css("display", "none");
        $(".mainsearchouter").css("display", "block");
        //$(".searchbox-container").css("display", "block");
        $(".searchbox-container").css("display", "block");
        $("#search-display").css("display", "block");
        $("#search-results").css("display", "block");
        $("#search-label").css("display", "block");
        $("#search-feedback").css("display", "block");
        $('#q').focus();
    }

    if (window.location.href.indexOf('dFR%5B') >= 0) {
        $("#search-result-label").text("Refined search results");
    }

    if ($("#q").val() != "" && $("#q").val().length > 0) {
        isPlaceHolderSearchTextVisible(false);
        setCaretPosition($("#q")[0], $("#q").val().length);
    }


    $(".searchToggle").click(function () {
        ga('send', 'event', { eventCategory: 'Algolia Search', eventAction: 'Click', eventLabel: 'Search Icon Click' });

        $("main").css("display", "none");
        $(".mainsearchouter").css("display", "block");
        $("#search-feedback").css("display", "block");
        $("#placeholderSearchText").addClass("fadeAnimateTextColor");
        //$(".searchbox-container").css("display", "block");
        $(".searchbox-container").fadeIn();
        $('#q').focus();
        search.start();
        
        /*
        if (isIE11) {
            search.start();
        }
        */
    });

    $("#search-close-btn").click(function () {
        $("main").css("display", "block");
        $(".searchbox-container").css("display", "none");
        $(".mainsearchouter").css("display", "none");
        $("#search-display").css("display", "none");
        $("#search-feedback").css("display", "none");

        if (window.location.href.indexOf('?') >= 0) {
            window.location.href = window.location.href.substring(0, window.location.href.indexOf('?'));
        }
        else {
            window.location.href = window.location.href;
        }


    });

    $("#searchresult-left-inner").sticky();

    $("#search-left-title-mobile").click(function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $("#searchresult-left-inner").unstick();
            $(".mobileholder").toggle();

            if ($(".mobileholder").is(":visible")) {
                $("#search-label").css("margin-top", "50px");
                $(".mobileholder").css("width", "100%");
                $(".mobileholder").css("margin", "auto");

                $("#search-left-title-mobile .ion-arrow-down-b").removeClass("ion-arrow-down-b").addClass("ion-arrow-up-b");
                $("#search-left-title-mobile .ion-arrow-up-b").removeClass("arrowDown").addClass("arrowUp");
            }
            else {
                $("#search-label").css("margin-top", "0px");
                $(".mobileholder").css("width", "315px");
                $(".mobileholder").css("margin", "0px");
                $(".ais-refinement-list").css("text-align", "left");

                $("#search-left-title-mobile .ion-arrow-up-b").removeClass("ion-arrow-up-b").addClass("ion-arrow-down-b");
                $("#search-left-title-mobile .ion-arrow-down-b").removeClass("arrowUp").addClass("arrowDown");
            }
        }
    });


    if ($("#q")[0].value == "") {
        // hide everything in the search results
        $("#search-display").css("display", "none");
        $("#start-typing-text").css("visibility", "visible");
        $(".mainsearchouter").css('background-image', 'url(https://www.sait.ca/assets/images/algolia/catalyst-search-landing.png)');
    }
    else {
        $("#start-typing-text").css("visibility", "hidden");
        $(".mainsearchouter").css("background-image", "none");
    }


    $.getJSON("assets/prebuilt/data/struct-data.json", function (data) {

        structuredData = data;
    });

});

$("#q").focus(function () {
    if (this.value == "") {
        //this.value = placeHolderText;
        $("#q").css("color", "lightgray");
        isPlaceHolderSearchTextVisible(true);
    }

});

/*$("#q").click(function () {
    if (this.value == placeHolderText) {
        setCaretPosition($("#q")[0], 0);
    }
});*/

$("#q").keydown(function () {
    if (this.value !== "") {
        $("#q").css("color", "#0068a9");
    }
});

$("#placeholderSearchText").click(function () {
    $("#q").focus();
});
$("#placeholderSearchText").on('touchstart', function () {
    $("#q").focus();
});
function isPlaceHolderSearchTextVisible(isVisible){
    $("#placeholderSearchText").css("display", isVisible ? "inline-block" : "none");
}

$(document).on('click', '.ais-refinement-list--item label', function (e) {

    if ($(".ais-refinement-list--item.ais-refinement-list--item__active.selected").length == 0) {
        if ($(this).parent().parent().hasClass("selected") == false) {
            $("#search-result-label").text("Refined search results");
        }
    }
    else if ($(".ais-refinement-list--item.ais-refinement-list--item__active.selected").length == 1) {
        if ($(this).parent().parent().hasClass("selected") == true) {
            $("#search-result-label").text("Search results");
        }
    }
});

function setCaretPosition(ctrl, pos) {

    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    }
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

function openInfoSessionClicked(element, hash) {

    url = 'http://' + window.location.hostname + window.location.pathname + window.location.search;

    $(".ai1ec-close").on("click", function (e) {

        url = 'http://' + window.location.hostname + window.location.pathname + window.location.search;

        setTimeout(function () {
            window.history.pushState({ path: url }, '', url);
        }, 100);

    });

    setTimeout(function () {
        $("div:not(.ai1ec-container #content)").on("click", function () {
            window.history.pushState({ path: url }, '', url);

            // unbind the event after the url is fixed
            $("div:not(.ai1ec-container #content)").unbind("click");
        });
    }, 500);

    document.location.hash = hash;
    element.preventDefault();

}