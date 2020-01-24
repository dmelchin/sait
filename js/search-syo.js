
var searchSummerCamps;
var openingInfoSession;


var associatedTaxonomyCategory = "";

var programsTabTitle = "Programs";
var newProgramsTabTitle = "New for 2019!";

var selectedGradesFacet = "";
var selectedThemesFacet = "";
var selectedDatesOfferedFacet = "";

var activeTab = "";

var themesQuery = "";

var summerProgramFilter = 'Schema: "CampDetailSYO"';

var summerProgramGradesFilter = "";
var summerProgramThemesFilter = "";
var summerProgramDatesOfferedFilter = "";
var summerProgramShowNewOnly = false;


var query = "";

var selectedFilterBorderStyle = "1px solid rgb(166, 25, 46)";

// startsWith for IE11
String.prototype.startsWith || (String.prototype.startsWith = function (word) {
    return this.lastIndexOf(word, 0) === 0;
});

// endsWith function for IE11
String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

$(document).ready(function () {

    searchSummerCamps = instantsearch({
        appId: "LKAY4PJWX5",
        apiKey: "89183924eb6e3c0683d98dc926b3ea64",
        indexName: "sait-programs-courses",
        searchFunction: function (helper) {
            helper.search('');
        }

    });

    var readyToFetchMore = true;

    var refinementListTemplate = "<label style=\" cursor: pointer;\" \">{{name}} <span class=\"ais-refinement-list--count\">({{count}})</span></label>";

    searchSummerCamps.addWidget(
        instantsearch.widgets.searchBox({
            container: '#search-programs-courses'
        })
    );
    
    searchSummerCamps.addWidget(
        {
            init: function (params) {
                params.helper.setQueryParameter('hitsPerPage', 1000);
                params.helper.setQueryParameter('enableRules', false);

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

                var hits = params.results.hits;

                var isEvenRowCount = false;

                var hitsContainer = $("#search-results-listgrid");

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

                        if (hit.Schema == "CampDetailSYO") {
                            hitTemplate += '<div class="program-outer-container" onclick="gridCardClicked(this);">';
                            hitTemplate += '<div class="program-inner-container">';

                            hitTemplate += '      <div class="program-image-container"><div class="program-image" style="background-image: url(\'https://www.sait.ca/assets/images/' + hit.ImagePath + '\');"></div></div>';
                            hitTemplate += '      <a href="' + hit.Url + '" target="" class="program-title left" >' + hit.Title + '</a>';
                            
                            // Grades
                            hitTemplate += '          <div class="program-grades left">';
                            hitTemplate += '              <div>';

                            for (i = 0; i < 2; i++)
                            {

                                if (hit.Highlights["Grades" + i] != undefined) {
                                    hitTemplate += '      <div class="program-available program-highlight"><span>' + hit.Highlights["Grades" + i] + '</span></div>';
                                }
                                else {
                                    if (i == 0) {
                                        hitTemplate += '      <div class="program-available program-highlight left empty"><span></span></div>';
                                    }
                                }
                            }

                            hitTemplate += '              </div>';

                            hitTemplate += '   </div>';
                            

                            // Themes
                            if (hit.Highlights.Themes != "") {
                                hitTemplate += '      <div class="program-offered program-highlight left "><span>' + hit.Highlights.Themes + '</span></div>';
                            }
                            else {
                                hitTemplate += '      <div class="program-offered program-highlight left empty"><span></span></div>';
                            }


                            // Dates Offered
                            hitTemplate += '          <div class="program-status left">';
                            hitTemplate += '              <div>';

                            for (i = 0; i < 10; i++) {
                                if (hit.Highlights["Week" + i] != undefined) {

                                    hitTemplate += '           <div class="program-statuses">';

                                    hitTemplate += '<span class="ion-record g-icon-left g-icon-open"></span><span>' + hit.Highlights["Week" + i] + '</span>';

                                    hitTemplate += '           </div>';
                                }
                            }
                                

                           


                            hitTemplate += '              </div>';




                            hitTemplate += '   </div>';
                            hitTemplate += '   <div class="program-available-banner">' + hit.Highlights.Available + '</div>';

                            hitTemplate += '</div>';
                            hitTemplate += '</div>';
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
                        '<h1>We’re sorry, no camps are currently available based on your search criteria.</h1>' +
                        '<div id="search-error-msg">' +
                        'Please try another grade, theme or week - or clear your filters and start your search again.' +
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

                /*
                for (i = 0; i < structuredData.length; i++) {
                    if (structuredData[i].Keyword.toLowerCase() == params.state.query.toLowerCase()) {
                        if ($(".structured-result").length == 0) {
                            $("#search-results").prepend("<div class=\"structured-result\">" + structuredData[i].Html + "</div>");
                        }
                    }
                }
                */

                refreshListGrid();

            }



        }
    );

    searchSummerCamps.start();

    var listButton = $('.list-view');
    var gridButton = $('.grid-view');
    var wrapper = $('#search-results-listgrid');

    listButton.on('click', function () {

        var eventCategory = "AOI Search";
        var eventLabel = "List View Selected";

        if (eventCategory != null && eventCategory != "" && eventLabel != null && eventLabel != "") {
            ga('send', 'event', { eventCategory: eventCategory, eventAction: 'Click', eventLabel: eventLabel });
        }

        gridButton.removeClass('on');
        listButton.addClass('on');
        wrapper.removeClass('grid').addClass('list');

        $(".list .program-status").addClass("program-highlight");
        $(".list .program-statuses").removeClass("program-highlight");
        //$(".info-session-col-head").css("visibility", "visible");
    });

    gridButton.on('click', function () {

        var eventCategory = "AOI Search";
        var eventLabel = "Grid View Selected";

        if (eventCategory != null && eventCategory != "" && eventLabel != null && eventLabel != "") {
            ga('send', 'event', { eventCategory: eventCategory, eventAction: 'Click', eventLabel: eventLabel });
        }

        listButton.removeClass('on');
        gridButton.addClass('on');
        wrapper.removeClass('list').addClass('grid');

        $(".grid .program-status").removeClass("program-highlight");
        $(".grid .program-statuses").addClass("program-highlight");

        //$(".info-session-col-head").css("visibility", "hidden");
    });


    var urlPath = window.location.pathname;

    //var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    
    $("#search-results").css("display", "block");

    

    

    if (associatedTaxonomyCategory != "") {
        searchSummerCamps.helper.setQueryParameter('filters', 'AssociatedTaxonomyCategories:' + "\"" + associatedTaxonomyCategory + "\"");
        searchSummerCamps.helper.search();
    }
    
    updateProgramCount();

    // Grades Change
    $("#select-grades").change(function () {

        var prevSelectedAvailableFacet = selectedGradesFacet;

        if (this.value == "Grades1-2") {
            summerProgramGradesFilter = 'Highlights.Grades0: "Grades 1 - 2"';
        }
        else if (this.value == "Grades3-4") {
            summerProgramGradesFilter = 'Highlights.Grades0: "Grades 3 - 4"';
        }
        else if (this.value == "Grades5-6") {
            summerProgramGradesFilter = 'Highlights.Grades0: "Grades 5 - 6"';
        }
        else if (this.value == "Grades7-9") {
            summerProgramGradesFilter = 'Highlights.Grades0: "Grades 7 - 9" OR Highlights.Grades1: "Grades 7 - 9"';
        }
        else if (this.value == "Grades7-12") {
            summerProgramGradesFilter = 'Highlights.Grades0: "Grades 7 - 12" OR Highlights.Grades1: "Grades 7 - 12"';
        }
        else if (this.value == "Grades9-12") {
            summerProgramGradesFilter = 'Highlights.Grades0: "Grades 9 - 12" OR Highlights.Grades1: "Grades 9 - 12"';
        }
        else {
            summerProgramGradesFilter = "";
        }

        applySummerCampFilters();

        query = $("#search-programs-courses").val();

        updateProgramCount();
    });

    // Themes Changed
    $("#select-themes").change(function () {

        if (this.value == "AppliedScience") {
            summerProgramThemesFilter = 'Highlights.Themes: "Applied Science"';
        }
        else if (this.value == "CareerSchoolAndLifeSkills") {
            summerProgramThemesFilter = 'Highlights.Themes: "Career, School And Life Skills"';
        }
        else if (this.value == "Computers") {
            summerProgramThemesFilter = 'Highlights.Themes: "Computers"';
        }
        else if (this.value == "Culinary") {
            summerProgramThemesFilter = 'Highlights.Themes: "Culinary"';
        }
        else if (this.value == "MediaArts") {
            summerProgramThemesFilter = 'Highlights.Themes: "Media Arts"';
        }
        else if (this.value == "PlanesCranesAndAutomobiles") {
            summerProgramThemesFilter = 'Highlights.Themes: "Planes, Cranes And Automobiles"';
        }
        else if (this.value == "SAITSuperKids") {
            summerProgramThemesFilter = 'Highlights.Themes: "SAIT Super Kids"';
        }
        else if (this.value == "SoupedUpScience") {
            summerProgramThemesFilter = 'Highlights.Themes: "Souped Up Science"';
        }
        else if (this.value == "TrojansSportsCamps") {
            summerProgramThemesFilter = 'Highlights.Themes: "Trojans Sports Camps"';
        }
        else if (this.value == "TryATrade") {
            summerProgramThemesFilter = 'Highlights.Themes: "Try A Trade"';
        }
        else if (this.value == "YoungEntrepreneurs") {
            summerProgramThemesFilter = 'Highlights.Themes: "Young Entrepreneurs"';
        }
        else {
            summerProgramThemesFilter = "";
        }

        applySummerCampFilters();

        updateProgramCount();

    });

    // Dates Offered Change
    $("#select-dates-offered").change(function () {

        var prevSelectedDatesOfferedFacet = selectedDatesOfferedFacet;

        if (this.value == "July2-5") {
            summerProgramDatesOfferedFilter = 'Highlights.Week1: "July 2 – 5" OR Highlights.Week1: "July 2 – 5 (4 days)"';
        }
        else if (this.value == "July8-12") {
            summerProgramDatesOfferedFilter = 'Highlights.Week2: "July 8 – 12"';
        }
        else if (this.value == "July15-19") {
            summerProgramDatesOfferedFilter = 'Highlights.Week3: "July 15 – 19"';
        }
        else if (this.value == "July22-26") {
            summerProgramDatesOfferedFilter = 'Highlights.Week4: "July 22 – 26"';
        }
        else if (this.value == "July29-Aug2") {
            summerProgramDatesOfferedFilter = 'Highlights.Week5: "July 29 – Aug 2"';
        }
        else if (this.value == "Aug6-9") {
            summerProgramDatesOfferedFilter = 'Highlights.Week6: "Aug 6 – 9" OR Highlights.Week6: "Aug 6 – 9 (4 days)"';
        }
        else if (this.value == "Aug12-16") {
            summerProgramDatesOfferedFilter = 'Highlights.Week7: "Aug 12 – 16"';
        }
        else if (this.value == "Aug19-23") {
            summerProgramDatesOfferedFilter = 'Highlights.Week8: "Aug 19 – 23"';
        }
        else if (this.value == "Aug26-30") {
            summerProgramDatesOfferedFilter = 'Highlights.Week9: "Aug 26 – 30"';
        }
        else {
            summerProgramDatesOfferedFilter = "";
        }

        applySummerCampFilters();

        query = $("#search-programs-courses").val();

        updateProgramCount();
    });

    $("#search-programs-courses").blur();

    activeTab = getUrlParameter("activetab");
    if (activeTab != undefined) {
        switch (activeTab.toLowerCase()) {
            case "new":
                $("#new-programs-tab").click();
                break;
            default:
                break;
        }
    }


    themesQuery = getUrlParameter("themes");
    if (themesQuery != undefined) {
        switch (themesQuery.toLowerCase()) {
            case "applied-science":
                $("#select-themes").val("AppliedScience").change();
                break;
            case "career-school-and-life-skills":
                $("#select-themes").val("CareerSchoolAndLifeSkills").change();
                break;
            case "computers":
                $("#select-themes").val("Computers").change();
                break;
            case "culinary":
                $("#select-themes").val("Culinary").change();
                break;
            case "media-arts":
                $("#select-themes").val("MediaArts").change();
                break;
            case "planes-cranes-and-automobiles":
                $("#select-themes").val("PlanesCranesAndAutomobiles").change();
                break;
            case "sait-super-kids":
                $("#select-themes").val("SAITSuperKids").change();
                break;
            case "souped-up-science":
                $("#select-themes").val("SoupedUpScience").change();
                break;
            case "trojans-sports-camps":
                $("#select-themes").val("TrojansSportsCamps").change();
                break;
            case "try-a-trade":
                $("#select-themes").val("TryATrade").change();
                break;
            case "young-entrepreneurs":
                $("#select-themes").val("YoungEntrepreneurs").change();
                break;
            default:
                $("#select-themes").val("Themes(All)").change();
                break;
        }
    }

    // invoke the change functions for each of the filters when the page loads
    // so when the user clicks the back button, the filters are applied
    $("#select-grades").change();
    $("#select-themes").change();
    $("#select-dates-offered").change();

    if (getUrlParameter("activetab") == "new") {
        $("#new-programs-tab").click();
    }

});

function onSearchInput() {
    if ($("#search-programs-courses")[0].value == "") {
        // hide everything in the search results
        $("#search-display").css("display", "block");

        $("#start-typing-text").css("visibility", "visible");

        $(".mainsearchouter").css('background-image', 'url(https://www.sait.ca/assets/images/algolia/catalyst-search-landing.png)');

    }
    else {
        // show everything in the search results
        $("#search-display").css("display", "block");

        $("#start-typing-text").css("visibility", "hidden");

        // show the search filter section
        //$("#searchresult-left").css("display", "block");

        //$("#search-pagination").css("display", "block");
        $(".mainsearchouter").css("background-image", "none");
    }

    $("#q").css("color", "rgb(0, 104, 169)");
}

function refreshListGrid() {
    if ($("#search-results-listgrid").hasClass("grid")) {
        $(".grid .program-status").removeClass("program-highlight");
        $(".grid .program-statuses").addClass("program-highlight");
    }
    else if ($("#search-results-listgrid").hasClass("list")) {
        $(".list .program-status").addClass("program-highlight");
        $(".list .program-statuses").removeClass("program-highlight");
    }
}

function gridCardClicked(element) {

    if ($("#search-results-listgrid").hasClass("grid") && (openingInfoSession == false)) {
        var url = "";

        if ($(event.target).attr("class") == null) {
            url = $(event.target).parents(".program-inner-container").children(".program-title")[0].href;
        }
        else if ($(event.target).attr("class").indexOf("program-outer-container") >= 0) {
            url = $(event.target).children(".program-inner-container").children(".program-title")[0].href;

        }
        else if ($(event.target).attr("class").indexOf("program-available-banner") >= 0) {
            url = $(event.target).siblings(".program-inner-container").children(".program-title")[0].href;
        }
        else if ($(event.target).attr("class").indexOf("program-highlight") >= 0) {
            url = $(event.target).parents(".program-inner-container").children(".program-title")[0].href;
        }
        else if ($(event.target).attr("class").indexOf("program-image") >= 0) {
            url = $(event.target).parents(".program-inner-container").children(".program-title")[0].href;
        }

        window.location = url;
    }
    else {
        openingInfoSession = false;
    }
}

function getUrlParameters() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function openInfoSessionClickedProgramsCourses(element, hash) {

    openingInfoSession = true;

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

            var listButton = $('.list-view');
            var gridButton = $('.grid-view');
            var wrapper = $('#search-results-listgrid');

            listButton.on('click', function () {

                gridButton.removeClass('on');
                listButton.addClass('on');
                wrapper.removeClass('grid').addClass('list');

                $(".list .program-status").addClass("program-highlight");
                $(".list .program-statuses").removeClass("program-highlight");
                //$(".info-session-col-head").css("visibility", "visible");
            });

            gridButton.on('click', function () {

                listButton.removeClass('on');
                gridButton.addClass('on');
                wrapper.removeClass('list').addClass('grid');

                $(".grid .program-status").removeClass("program-highlight");
                $(".grid .program-statuses").addClass("program-highlight");

                //$(".info-session-col-head").css("visibility", "hidden");
            });

        });
    }, 500);

    document.location.hash = hash;
    element.preventDefault();

}

function getProgramsCount(query, filter, callback) {
    
    var client = algoliasearch('LKAY4PJWX5', '89183924eb6e3c0683d98dc926b3ea64');
    var index = client.initIndex('sait-programs-courses');

    var count = 0;

    index.browse({
        query: query,
        filters: filter,
        attributesToRetrieve: ['Title']
    },
        function browseDone(err, content) {
            if (err) throw err;

            count += content.hits.length;

            if (content.cursor) {
                index.browseFrom(content.cursor, browseDone);
            }
            // if the count is complete
            else {
                callback(err, count);
                //return count;
            }
        }
    );
    
}

function clearSummerProgramsFilters() {

    searchSummerCamps.helper.setQueryParameter("query", "");
    $("#search-programs-courses")[0].value = "";
    
    $("#select-grades").val('Grades(All)');
    $("#select-themes").val('Themes(All)');
    $("#select-dates-offered").val('DatesOffered(All)');
    
    $("#select-grades").css("border", "");
    $("#select-themes").css("border", "");
    $("#select-dates-offered").css("border", "");

    summerProgramGradesFilter = "";
    summerProgramThemesFilter = "";
    summerProgramDatesOfferedFilter = "";

    applySummerCampFilters();

    
    updateProgramCount();
    
    setClearFilterBtnColor();

}

function setClearFilterBtnColor() {
    if ((($("#select-grades").val() == "Grades(All)") &&
        ($("#select-themes").val() == 'Themes(All)') &&
        ($("#select-dates-offered").val() == 'DatesOffered(All)'))) {
        $("#aoi-clear-filters-btn").css("background-color", "darkgray");
    }
    else {
        $("#aoi-clear-filters-btn").css("background-color", "#6D2077");

    }
}

function onProgramCoursesSearchInput() {
    query = $("#search-programs-courses").val();

    updateProgramCount();
    
    setClearFilterBtnColor();
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

function setOfferedFilter($input) {
    var prevSelectedOfferedFacet = selectedThemesFacet;

    searchSummerCamps.helper.removeDisjunctiveFacetRefinement("Highlights.Offered");

    if ($input.val() == "Classroom") {
        searchSummerCamps.helper.addDisjunctiveFacetRefinement("Highlights.Offered", "Classroom");
        searchSummerCamps.helper.addDisjunctiveFacetRefinement("Highlights.Offered", "Classroom or Online");
        searchSummerCamps.helper.search();
        $input.css("border", selectedFilterBorderStyle);

        selectedThemesFacet = "AND (Highlights.Offered:" + "\"" + "Classroom" + "\"" + " OR Highlights.Offered:" + "\"" + "Classroom or Online" + "\"" + ")";
    }
    else if ($input.val() == "Online") {
        searchSummerCamps.helper.addDisjunctiveFacetRefinement("Highlights.Offered", "Online");
        searchSummerCamps.helper.addDisjunctiveFacetRefinement("Highlights.Offered", "Classroom or Online");
        searchSummerCamps.helper.search();
        $input.css("border", selectedFilterBorderStyle);

        selectedThemesFacet = "AND (Highlights.Offered:" + "\"" + "Online" + "\"" + " OR Highlights.Offered:" + "\"" + "Classroom or Online" + "\"" + ")";
    }
    else if ($input.val() == "Blended") {
        searchSummerCamps.helper.addDisjunctiveFacetRefinement("Highlights.Offered", "Blended");
        searchSummerCamps.helper.addDisjunctiveFacetRefinement("Highlights.Offered", "Classroom or Blended");
        searchSummerCamps.helper.search();
        $input.css("border", selectedFilterBorderStyle);

        selectedThemesFacet = "AND (Highlights.Offered:" + "\"" + "Blended" + "\"" + " OR Highlights.Offered:" + "\"" + "Classroom or Blended" + "\"" + ")";


    }
    else {
        searchSummerCamps.helper.removeDisjunctiveFacetRefinement("Highlights.Offered").search();
        $input.css("border", "");

        selectedThemesFacet = "";
    }

    if (selectedThemesFacet == "") {
        summerProgramFilter = summerProgramFilter.replace(prevSelectedOfferedFacet, selectedThemesFacet);
        conedFilter = conedFilter.replace(prevSelectedOfferedFacet, selectedThemesFacet);
    }
    else {
        if (summerProgramFilter.indexOf("AND Highlights.Offered:") >= 0 || summerProgramFilter.indexOf("AND (Highlights.Offered:") >= 0) {
            summerProgramFilter = summerProgramFilter.replace(prevSelectedOfferedFacet, selectedThemesFacet);
        }
        else {
            summerProgramFilter += " " + selectedThemesFacet;
        }

        if (conedFilter.indexOf("AND Highlights.Offered:") >= 0) {
            conedFilter = conedFilter.replace(prevSelectedOfferedFacet, selectedThemesFacet);
        }
        else {
            conedFilter += " " + selectedThemesFacet;
        }
    }

    query = $("#search-programs-courses").val();

    updateProgramCount();
    
    setClearFilterBtnColor();
}

function applySummerCampFilters() {

    summerProgramFilter = 'Schema: "CampDetailSYO"';

    if (summerProgramGradesFilter != "") {
        summerProgramFilter = summerProgramGradesFilter;
    }

    if (summerProgramThemesFilter != "") {
        summerProgramFilter = summerProgramFilter + " AND " + summerProgramThemesFilter;
    }

    if (summerProgramDatesOfferedFilter != "") {
        summerProgramFilter = summerProgramFilter + " AND " + summerProgramDatesOfferedFilter;
    }
    
    if (summerProgramFilter.startsWith(" AND ")) {
        summerProgramFilter = summerProgramFilter.replace(" AND ", "");
    }

    var summerNewProgramFilter = "";

    if (summerProgramFilter != "") {
        summerNewProgramFilter = summerProgramFilter + " AND " + 'AssociatedTaxonomyCategories: "Summer Camps NEW"';
    }
    else {
        summerNewProgramFilter = 'AssociatedTaxonomyCategories: "Summer Camps NEW"';
    }

    if (summerProgramShowNewOnly) {
        searchSummerCamps.helper.setQueryParameter('filters', summerNewProgramFilter).search();
    }
    else {
        searchSummerCamps.helper.setQueryParameter('filters', summerProgramFilter).search();
    }

    setClearFilterBtnColor();
}

function summerProgramsTabClicked(activeTab) {
    setActiveTab(activeTab.innerText.toLowerCase());
}

function setActiveTab(activeTab) {
    if (activeTab.indexOf(newProgramsTabTitle.toLowerCase()) >= 0) {

        summerProgramShowNewOnly = true;


        $("#programs-tab").removeClass("g-active");
        $("#new-programs-tab").addClass("g-active");

        if (getUrlParameter("activetab") != undefined) {
            history.pushState(null, '', window.location.href);
        }
        else {
            if (getUrlParameter("themes") == undefined) {
                history.pushState(null, '', window.location.href + "?activetab=new");
            }
            else {
                history.pushState(null, '', window.location.href + "&activetab=new");
            }
        }
       


    }
    else {

        summerProgramShowNewOnly = false;

        $("#new-programs-tab").removeClass("g-active");
        $("#programs-tab").addClass("g-active");

    }

    applySummerCampFilters();
}

function updateProgramCount() {
    getProgramsCount(query, summerProgramFilter, function (err, programCount) {
        if (err) throw err;

        $("#programs-tab")[0].innerHTML = programsTabTitle;
        $("#programs-tab")[0].innerHTML += " (" + programCount + ")";
    });

    var summerNewProgramFilter = "";

    if (summerProgramFilter != "") {
        summerNewProgramFilter = summerProgramFilter + " AND " + 'AssociatedTaxonomyCategories: "Summer Camps NEW"';
    }
    else {
        summerNewProgramFilter = 'AssociatedTaxonomyCategories: "Summer Camps NEW"';
    }

    getProgramsCount(query, summerNewProgramFilter, function (err, programCount) {
        $("#new-programs-tab")[0].innerHTML = newProgramsTabTitle;
        $("#new-programs-tab")[0].innerHTML += " (" + programCount + ")";
    });
}