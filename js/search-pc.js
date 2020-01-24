
var searchProgramsCourses;
var openingInfoSession;

var cacheWidth;
var associatedTaxonomyCategory = "";

var programsTabTitle = "Programs";
var conedTabTitle = "Continuing Education Courses";
var newTabTitle = "New for 2019!";

var selectedAvailableFacet = "";
var selectedOfferedFacet = "";
var selectedCredentialFacet = "";
var selectedStatusFacet = "";

var activeTab = "";
var offered = "";

var programFilter = "";
var conedFilter = "";
var newFilter = "";

var query = "";

var selectedFilterBorderStyle = "1px solid rgb(166, 25, 46)";
var currentYear = new Date().getFullYear();
var structuredDataPC = "";
// endsWith function for IE11
String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

$(document).ready(function () {
    cacheWidth = $(window).width();
    searchProgramsCourses = instantsearch({
        appId: "LKAY4PJWX5",
        apiKey: "89183924eb6e3c0683d98dc926b3ea64",
        indexName: "sait-programs-courses",
        searchFunction: function (helper) {
            helper.search('');
        }

    });

    var readyToFetchMore = true;

    var refinementListTemplate = "<label style=\" cursor: pointer;\" \">{{name}} <span class=\"ais-refinement-list--count\">({{count}})</span></label>";

    searchProgramsCourses.addWidget(
        instantsearch.widgets.searchBox({
            container: '#search-programs-courses'
        })
    );

    $.getJSON("assets/prebuilt/data/struct-data-pc.json", function (data) {
        structuredDataPC = data;
    });
    /*
    searchProgramsCourses.addWidget(
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
    */

    searchProgramsCourses.addWidget(
        instantsearch.widgets.refinementList({
            container: '#search-programs-courses-facet-available',
            attributeName: "Highlights.Available",
            operator: "and",
            templates: {
                header: "<div style=\" font-size: 18px; \"></>",
                item: refinementListTemplate
            },
            cssClasses: { "active": "selected" }

        })
    );

    searchProgramsCourses.addWidget(
        instantsearch.widgets.refinementList({
            container: '#search-programs-courses-facet-offered',
            attributeName: "Highlights.Offered",
            operator: "or",
            templates: {
                header: "<div style=\" font-size: 18px; \"></>",
                item: refinementListTemplate
            },
            cssClasses: { "active": "selected" }

        })
    );

    searchProgramsCourses.addWidget(
        instantsearch.widgets.refinementList({
            container: '#search-programs-courses-facet-credential',
            attributeName: "Highlights.Credential",
            operator: "and",
            templates: {
                header: "<div style=\" font-size: 18px; \"></>",
                item: refinementListTemplate
            },
            cssClasses: { "active": "selected" }

        })
    );

    searchProgramsCourses.addWidget(
        instantsearch.widgets.refinementList({
            container: '#search-programs-courses-facet-status',
            attributeName: "Highlights.Status",
            operator: "and",
            templates: {
                header: "<div style=\" font-size: 18px; \"></>",
                item: refinementListTemplate
            },
            cssClasses: { "active": "selected" }

        })
    );

    searchProgramsCourses.addWidget(
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

                        if (hit.Schema == "ProgramsDetail" || hit.Schema == "CourseDetailPage") {
                            hitTemplate += '<div class="program-outer-container" onclick="gridCardClicked(this);">';
                            hitTemplate += '<div class="program-inner-container">';

                            hitTemplate += '      <div class="program-image-container"><div class="program-image" style="background-image: url(\'https://www.sait.ca/assets/images/' + hit.ImagePath + '\');"></div></div>';
                            if (hit.Schema == "ProgramsDetail") {
                                if (hit.AssociatedTaxonomyCategories != undefined && hit.AssociatedTaxonomyCategories.indexOf("New for 2019") > -1) {
                                    hitTemplate += '      <div class="program-title-new-label">';
                                    hitTemplate += '        <a href="' + hit.Url + '" target="" class="program-title new-program-title left ">' + hit.Title + '</a>';
                                    hitTemplate += '        <div class="program-new-label"> New </div>';
                                    hitTemplate += '      </div>';
                                }
                                else {
                                    hitTemplate += '      <a href="' + hit.Url + '" target="" class="program-title left" >' + hit.Title + '</a>';
                                }

                            }
                            else if (hit.Schema == "CourseDetailPage") {
                                if (hit.Highlights.OldCourseCode != undefined) {
                                    hitTemplate += '      <a href="' + hit.Url + '" target="" class="program-title left" >' + hit.Title + " - " + hit.Highlights.CourseCode + '<div style="color: #c0c0c0; font-size: .875em;">' + '(Formerly ' + hit.Highlights.OldCourseCode + ')' + '</div>' + '</a>';
                                }
                                else {
                                    hitTemplate += '      <a href="' + hit.Url + '" target="" class="program-title left" >' + hit.Title + " - " + hit.Highlights.CourseCode + '</a>';
                                }

                            }

                            if (hit.Highlights.NextInfoSessionDate != null) {


                                hitTemplate += '<a href="' + hit.Highlights.NextInfoSessionUrl + '" target="_blank" class="program-info-session">' + '<i class="fa fa-calendar-o"></i><div class="program-info-session-date"><div class="program-info-session-date-label">Info Session - </div>' + hit.Highlights.NextInfoSessionDate + '</div></a>';
                            }


                            // Available
                            if (hit.Schema == "ProgramsDetail") {
                                if (hit.Highlights.Available != "") {
                                    hitTemplate += '      <div class="program-available program-highlight left"><span>' + hit.Highlights.Available + '</span></div>';
                                }
                                else {
                                    hitTemplate += '      <div class="program-available program-highlight left empty"><span></span></div>';
                                }
                            }
                            else {
                                if (hit.Highlights.Available != "") {
                                    hitTemplate += '      <div class="program-available program-highlight left"><span>' + hit.Highlights.Available + '</span></div>';
                                }
                                else {
                                    hitTemplate += '      <div class="program-available program-highlight left empty"><span></span></div>';
                                }
                            }

                            // Offered
                            if (hit.Highlights.Offered != "") {
                                hitTemplate += '      <div class="program-offered program-highlight left "><span>' + hit.Highlights.Offered + '</span></div>';
                            }
                            else {
                                hitTemplate += '      <div class="program-offered program-highlight left empty"><span></span></div>';
                            }


                            // Credential
                            if (hit.Highlights.Credential != "") {
                                hitTemplate += '      <div class="program-credential program-highlight left"><span>' + hit.Highlights.Credential + '</span></div>';
                            }
                            else {
                                hitTemplate += '      <div class="program-credential program-highlight left empty"><span></span></div>';
                            }



                            // Status
                            hitTemplate += '          <div class="program-status left">';

                            hitTemplate += '              <div>';

                            if (hit.Schema != "CourseDetailPage") {
                                var openTerms = getTerms(hit);
                                var isAdded = false;

                                if (urlPath.indexOf('/programs-for-international-students') < 0) {
                                    for (i = 0; i < 3; i++) {

                                        if (hit.Highlights["Term" + i] != undefined) {
                                            hitTemplate += '           <div class="program-statuses">';

                                            if (hit.Highlights["Term" + i].toLowerCase().indexOf("open") >= 0) {
                                                if (openTerms.length > 1)   //group the new statuses together and display in detail together in tooltip. 
                                                {
                                                    if (!isAdded) {
                                                        var toolTipText = "";
                                                        hitTemplate += '<div class="status-tool-tip"><span class="ion-record g-icon-left g-icon-open"></span><span class="status-askterisk">';
                                                        var splitVal = hit.Highlights["Term" + i].length > 0 ? hit.Highlights["Term" + i].substring(0, 18) : "";
                                                        for (var j = 0; j < openTerms.length; j++) {
                                                            if (hit.Highlights["Term" + i].toLowerCase().indexOf("open for fall") >= 0) {
                                                                if (hit.Highlights["Term" + i].length > 20) {
                                                                    var statusDetail = getStatusValue(hit.Highlights[openTerms[j]], 19);
                                                                    toolTipText += splitVal.length > 0 ? "<span class='status-bracket'>" + statusDetail + "</span>" : "";
                                                                }
                                                            }
                                                        }
                                                        isAdded = true;
                                                        hitTemplate += splitVal + '<span class="circle-star"></span><span class="status-tip-text">' + toolTipText + "</span>";
                                                        hitTemplate += '</div>';
                                                    }
                                                    if (hit.Highlights["Term" + i].toLowerCase().indexOf("telecommunications") < 0 &&
                                                        hit.Highlights["Term" + i].toLowerCase().indexOf("saskatchewan") < 0 && hit.Highlights["Term" + i].toLowerCase().indexOf("manitoba") < 0
                                                        && hit.Highlights["Term" + i].toLowerCase().indexOf("broadcast news") < 0) {
                                                        hitTemplate += '<span class="ion-record g-icon-left g-icon-open"></span><span>' + hit.Highlights["Term" + i] + '</span>';
                                                    }
                                                }
                                                else {

                                                    if (hit.Highlights["Term" + i].toLowerCase().indexOf("open for fall") >= 0 && hit.Highlights["Term" + i].length > 20) {
                                                        var statusDetailTerm = getStatusValue(hit.Highlights["Term" + i], 19);
                                                        var statusFall = hit.Highlights["Term" + i].substring(0, 18);
                                                        hitTemplate += '<div class="status-tool-tip"><span class="ion-record g-icon-left g-icon-open"></span><span class="status-askterisk">' + statusFall + '<span class="circle-star"></span></span><span class="status-tip-text status-bracket">' + statusDetailTerm + '</span></div>';

                                                    }
                                                    else {
                                                        hitTemplate += '<span class="ion-record g-icon-left g-icon-open"></span><span>' + hit.Highlights["Term" + i] + '</span>';
                                                    }
                                                }

                                            }
                                            else if (hit.Highlights["Term" + i].toLowerCase().indexOf("closed") >= 0) {
                                                hitTemplate += '<span class="ion-record g-icon-left g-icon-closed"></span><span>' + hit.Highlights["Term" + i] + '</span>';
                                            }
                                            else if (hit.Highlights["Term" + i].toLowerCase().indexOf("ongoing") >= 0) {
                                                hitTemplate += '<span class="ion-record g-icon-left g-icon-ongoing"></span><span>' + hit.Highlights["Term" + i] + '</span>';
                                            }
                                            else if (hit.Highlights["Term" + i].toLowerCase().indexOf("waitlisted") >= 0) {
                                                hitTemplate += '<span class="ion-record g-icon-left g-icon-waitlisted"></span><span>' + hit.Highlights["Term" + i] + '</span>';
                                            }

                                            hitTemplate += '           </div>';
                                        }
                                    }
                                }
                                else {
                                    var combinedTerms = [];


                                    for (i = 0; i < 3; i++) {
                                        if (hit.Highlights["InternationalTerm" + i] != undefined) {
                                            combinedTerms.push(hit.Highlights["InternationalTerm" + i] + " (International)");
                                        }
                                    }

                                    // only add domestic terms if there are no international terms
                                    if (combinedTerms.length == 0) {
                                        for (i = 0; i < 3; i++) {
                                            if (hit.Highlights["Term" + i] != undefined) {
                                                combinedTerms.push(hit.Highlights["Term" + i]);
                                            }
                                        }
                                    }

                                    

                                    var currentDate = new Date();
                                    var nextYearDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());

                                    order = [];

                                    order.push("Ongoing");

                                    order.push("Fall" + " " + currentDate.getFullYear());
                                    order.push("Spring" + " " + currentDate.getFullYear());
                                    order.push("Summer" + " " + currentDate.getFullYear());
                                    order.push("Winter" + " " + currentDate.getFullYear());
                                    
                                    order.push("Fall" + " " + nextYearDate.getFullYear());
                                    order.push("Spring" + " " + nextYearDate.getFullYear());
                                    order.push("Summer" + " " + nextYearDate.getFullYear());
                                    order.push("Winter" + " " + nextYearDate.getFullYear());

                                    var sortedCombinedTerms = [];

                                    for (var j = 0; j < combinedTerms.length; j++) {
                                        if (combinedTerms[j].toString().indexOf(order[i].toString() > -1)) {
                                            sortedCombinedTerms.push(combinedTerms[j]);
                                            continue;
                                        }
                                    }

                                   


                                    for (i = 0; i < 3; i++) {

                                        if (sortedCombinedTerms[i] != undefined) {
                                            hitTemplate += '           <div class="program-statuses">';

                                            if (sortedCombinedTerms[i].toLowerCase().indexOf("open") >= 0) {
                                                hitTemplate += '<span class="ion-record g-icon-left g-icon-closed"></span><span>' + sortedCombinedTerms[i] + '</span>';

                                            }
                                            else if (sortedCombinedTerms[i].toLowerCase().indexOf("closed") >= 0) {
                                                hitTemplate += '<span class="ion-record g-icon-left g-icon-closed"></span><span>' + sortedCombinedTerms[i] + '</span>';
                                            }
                                            else if (sortedCombinedTerms[i].toLowerCase().indexOf("ongoing") >= 0) {
                                                hitTemplate += '<span class="ion-record g-icon-left g-icon-ongoing"></span><span>' + sortedCombinedTerms[i] + '</span>';
                                            }
                                            else if (sortedCombinedTerms[i].toLowerCase().indexOf("waitlisted") >= 0) {
                                                hitTemplate += '<span class="ion-record g-icon-left g-icon-waitlisted"></span><span>' + sortedCombinedTerms[i] + '</span>';
                                            }

                                            hitTemplate += '           </div>';
                                        }
                                    }

                                }
                            }
                            else {
                                if (hit.Highlights["Status"] != undefined) {

                                    hitTemplate += '           <div class="program-statuses">';

                                    if (hit.Highlights["Status"].toLowerCase().indexOf("open") >= 0) {
                                        hitTemplate += '<span class="ion-record g-icon-left g-icon-open"></span><span>' + hit.Highlights["Status"] + '</span>';
                                    }
                                    else if (hit.Highlights["Status"].toLowerCase().indexOf("closed") >= 0) {
                                        hitTemplate += '<span class="ion-record g-icon-left g-icon-closed"></span><span>' + hit.Highlights["Status"] + '</span>';
                                    }
                                    else if (hit.Highlights["Status"].toLowerCase().indexOf("ongoing") >= 0) {
                                        hitTemplate += '<span class="ion-record g-icon-left g-icon-ongoing"></span><span>' + hit.Highlights["Status"] + '</span>';
                                    }
                                    else if (hit.Highlights["Status"].toLowerCase().indexOf("waitlisted") >= 0) {
                                        hitTemplate += '<span class="ion-record g-icon-left g-icon-waitlisted"></span><span>' + hit.Highlights["Status"] + '</span>';
                                    }
                                    else if (hit.Highlights["Status"].toLowerCase().indexOf("pending") >= 0) {
                                        hitTemplate += '<span class="ion-record g-icon-left g-icon-pending"></span><span style="color:#c0c0c0;">' + hit.Highlights["Status"] + '</span>';
                                    }

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

                var renderStrutureData = false;
                var dateNow = new Date();
                var appendData = "";
                for (i = 0; i < structuredDataPC.length; i++) {
                    var startDate = new Date(structuredDataPC[i].startDate);
                    var endDate = new Date(structuredDataPC[i].endDate);
                    if (dateNow >= startDate && dateNow <= endDate) {
                        if (structuredDataPC[i].EndURL) {
                            renderStrutureData = window.location.href.endsWith(structuredDataPC[i].EndURL) > 0;  //display structure for a specific AOI
                        }
                        else {
                            renderStrutureData = true;
                        }
                        if (renderStrutureData) {
                            appendData = structuredDataPC[i].AlwaysAppear == "true" ? structuredDataPC[i].Html : appendData;
                            if (structuredDataPC[i].Keywords.length > 0) {
                                for (j = 0; j < structuredDataPC[i].Keywords.length; j++) {
                                    if (params.state.query.toLowerCase().endsWith(structuredDataPC[i].Keywords[j]) > -1) {
                                        if ($(".structured-result-pc").length == 0 || $(".struct-result-global").length > 0) {
                                            appendData += structuredDataPC[i].Html;
                                            //$("#search-results-listgrid").prepend("<div id=\"div-structure-pc\" class=\"structured-result-pc\"   style=\"width:100%;display:inline-block;\">" + structuredDataPC[i].Html + "</div>");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (appendData != "") {
                    $("#div-structure-pc").remove();
                    $("#search-results-listgrid").prepend("<div id=\"div-structure-pc\" class=\"structured-result-pc\" style=\"width:100%;display:inline-block;margin-bottom: 20px;\">" + appendData + "</div>");
                }
                refreshListGrid();
                updateNewProgramLabel();
            }

        }

    );
    clearSelectedFacetsDropDown(); //fix for back button
    searchProgramsCourses.start();

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

        $(".program-new-label").html("New");

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

        $(".program-new-label").html("New<br/> for " + currentYear + "<div class='tri-new-label'></div>");

    });

    var urlPath = window.location.pathname;

    //var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;


    // AOI urls
    if (urlPath.indexOf('/future-students/shape-your-world') >= 0) {
        associatedTaxonomyCategory = "Campaign";
    }
    else if (urlPath.endsWith("/areas-of-interest/academic-upgrading")) {
        associatedTaxonomyCategory = "Areas of Interest->Upgrading";
    }
    else if (urlPath.endsWith("/areas-of-interest/business-accounting-and-management")) {
        associatedTaxonomyCategory = "Areas of Interest->Business, Accounting and Management";
    }
    else if (urlPath.endsWith("/areas-of-interest/culinary-hospitality-and-travel")) {
        associatedTaxonomyCategory = "Areas of Interest->Culinary, Hospitality and Travel";
    }
    else if (urlPath.endsWith("/areas-of-interest/construction-and-trades")) {
        associatedTaxonomyCategory = "Areas of Interest->Construction and Trades";
    }
    else if (urlPath.endsWith("/areas-of-interest/energy")) {
        associatedTaxonomyCategory = "Areas of Interest->Energy";
    }
    else if (urlPath.endsWith("/areas-of-interest/engineering-technologies")) {
        associatedTaxonomyCategory = "Areas of Interest->Engineering Technologies";
    }
    else if (urlPath.endsWith("/areas-of-interest/english-language")) {
        associatedTaxonomyCategory = "Areas of Interest->English Language";
    }
    else if (urlPath.endsWith("/areas-of-interest/health-and-medical")) {
        associatedTaxonomyCategory = "Areas of Interest->Health and Medical";
    }
    else if (urlPath.endsWith("/areas-of-interest/information-technology")) {
        associatedTaxonomyCategory = "Areas of Interest->Information Technology";
    }
    else if (urlPath.endsWith("/areas-of-interest/information-technology/information-technology-security")) {
        associatedTaxonomyCategory = "Areas of Interest->Information Technology->IT Security";
    }
    else if (urlPath.endsWith("/areas-of-interest/manufacturing")) {
        associatedTaxonomyCategory = "Areas of Interest->Manufacturing";
    }
    else if (urlPath.endsWith("/areas-of-interest/media-and-communications")) {
        associatedTaxonomyCategory = "Areas of Interest->Media and Communications";
    }
    else if (urlPath.endsWith("/areas-of-interest/transportation")) {
        associatedTaxonomyCategory = "Areas of Interest->Transportation";
    }
    else if (urlPath.endsWith("/sait-schools/school-of-business/school-of-business-programs")) {
        associatedTaxonomyCategory = "Schools->School of Business";
    }
    else if (urlPath.endsWith("/sait-schools/school-of-construction/school-of-construction-programs")) {
        associatedTaxonomyCategory = "Schools->School of Construction";
    }
    else if (urlPath.endsWith("/sait-schools/school-of-hospitality-and-tourism/school-of-hospitality-and-tourism-programs")) {
        associatedTaxonomyCategory = "Schools->School of Hospitality and Tourism";
    }
    else if (urlPath.endsWith("/sait-schools/macphail-school-of-energy/macphail-school-of-energy-programs")) {
        associatedTaxonomyCategory = "Schools->MacPhail School of Energy";
    }
    else if (urlPath.endsWith("/sait-schools/school-of-health-and-public-safety/school-of-health-and-public-safety-programs")) {
        associatedTaxonomyCategory = "Schools->School of Health and Public Safety";
    }
    else if (urlPath.endsWith("/sait-schools/school-of-information-and-communications-technologies/school-of-information-and-communications-technologies-programs")) {
        associatedTaxonomyCategory = "Schools->School of Information and Communications Technologies";
    }
    else if (urlPath.endsWith("/sait-schools/school-of-manufacturing-and-automation/school-of-manufacturing-and-automation-programs")) {
        associatedTaxonomyCategory = "Schools->School of Manufacturing and Automation";
    }
    else if (urlPath.endsWith("/sait-schools/school-of-transportation/school-of-transportation-programs")) {
        associatedTaxonomyCategory = "Schools->School of Transportation";
    }
    else if (urlPath.endsWith("/international-students/programs-for-international-students") || urlPath.endsWith("x28188")) {
        associatedTaxonomyCategory = "Full Time Programs->International Students";

        // remove select options that are not available for international students
        $("#select-available option[value='ContinuingEducation']").remove();

        $("#select-offered option[value='Online']").remove();
        $("#select-offered option[value='Blended']").remove();

        $("#select-credential option[value='Certificate(Non-Credit)']").remove();
        $("#select-credential option[value='Apprenticeship']").remove();
    }
    else if (urlPath.endsWith("/programs-and-courses/apprenticeships-and-trades/apprenticeship-and-pre-employment-programs")) {
        associatedTaxonomyCategory = "Full Time Programs->Pre-Employment" + "\"" + " OR AssociatedTaxonomyCategories:" + "\"" + "Full Time Programs->Apprenticeships";
    }

    // special case for the continuing education page where it has a different
    // taxonomy for programs and courses
    if (urlPath.indexOf("/programs-and-courses/continuing-education") > -1) {
        associatedTaxonomyCategory = "Continuing Education->Courses and Certificates";

        programFilter = 'AssociatedTaxonomyCategories:' + "\"" + associatedTaxonomyCategory + "\"" + ' AND Schema: "ProgramsDetail"';
        conedFilter = 'AssociatedTaxonomyCategories:' + "\"" + "Continuing Education" + "\"" + ' AND Schema: "CourseDetailPage" AND NOT Highlights.Status: "Not ConEd"';
        newFilter = 'AssociatedTaxonomyCategories: "New for 2019"';

    }
    else if (urlPath.indexOf("/programs-and-courses/continuing-education") < 0 && associatedTaxonomyCategory != "") {

        programFilter = 'AssociatedTaxonomyCategories:' + "\"" + associatedTaxonomyCategory + "\"" + ' AND Schema: "ProgramsDetail"';
        conedFilter = 'AssociatedTaxonomyCategories:' + "\"" + "Continuing Education" + "\"" + 'AND AssociatedTaxonomyCategories:' + "\"" + associatedTaxonomyCategory + "\"" + ' AND Schema: "CourseDetailPage" AND NOT Highlights.Status: "Not ConEd"';
        newFilter = 'AssociatedTaxonomyCategories: "New for 2019"' + 'AND AssociatedTaxonomyCategories:' + "\"" + associatedTaxonomyCategory + "\"";
    }
    else {
        programFilter = 'Schema: "ProgramsDetail"';
        conedFilter = 'Schema: "CourseDetailPage" AND NOT Highlights.Status: "Not ConEd"';
        newFilter = 'AssociatedTaxonomyCategories: "New for 2019"';
    }


    $("#search-results").css("display", "block");


    if (associatedTaxonomyCategory != "") {
        searchProgramsCourses.helper.setQueryParameter('filters', 'AssociatedTaxonomyCategories:' + "\"" + associatedTaxonomyCategory + "\"");
        searchProgramsCourses.helper.search();
    }

    getProgramsCoursesCount(query, programFilter, function (err, programCount) {
        if (err) throw err;

        $("#programs-tab")[0].innerHTML = programsTabTitle;
        $("#programs-tab")[0].innerHTML += " (" + programCount + ")";
    });

    getProgramsCoursesCount(query, conedFilter, function (err, conedCount) {
        if (err) throw err;

        if (conedCount > 0) {
            $("#courses-tab")[0].innerHTML = conedTabTitle;
            $("#courses-tab")[0].innerHTML += " (" + conedCount + ")";

            $("#courses-tab").css("display", "block");
        }
    });

    getProgramsCoursesCount(query, newFilter, function (err, programCount) {
        if (err) throw err;

        if (programCount > 0) {
            $("#new-tab")[0].innerHTML = newTabTitle;
            $("#new-tab")[0].innerHTML += " (" + programCount + ")";

            $("#new-tab").css("display", "block");
        }
    });


    // Available Change
    $("#select-available").change(function () {

        var prevSelectedAvailableFacet = selectedAvailableFacet;

        searchProgramsCourses.helper.removeFacetRefinement("Highlights.Available");

        if (this.value == "FullTime") {
            searchProgramsCourses.helper.addFacetRefinement("Highlights.Available", "Full TIme").search();
            $(this).css("border", selectedFilterBorderStyle);

            selectedAvailableFacet = "AND Highlights.Available:" + "\"" + "Full Time" + "\"";

        }
        else if (this.value == "ContinuingEducation") {
            searchProgramsCourses.helper.addFacetRefinement("Highlights.Available", "Continuing Education").search();
            $(this).css("border", selectedFilterBorderStyle);

            selectedAvailableFacet = "AND Highlights.Available:" + "\"" + "Continuing Education" + "\"";
        }
        else {
            searchProgramsCourses.helper.removeFacetRefinement("Highlights.Available").search();
            $(this).css("border", "");

            selectedAvailableFacet = "";
        }

        if (selectedAvailableFacet == "") {
            if (programFilter.indexOf("AND Highlights.Available:") >= 0) {
                programFilter = programFilter.replace(prevSelectedAvailableFacet, selectedAvailableFacet);
            }
            if (conedFilter.indexOf("AND Highlights.Available:") >= 0) {
                conedFilter = conedFilter.replace(prevSelectedAvailableFacet, selectedAvailableFacet);
            }
            if (newFilter.indexOf("AND Highlights.Available:") >= 0) {
                newFilter = newFilter.replace(prevSelectedAvailableFacet, selectedAvailableFacet);
            }
        }
        else {
            if (programFilter.indexOf("AND Highlights.Available:") >= 0) {
                programFilter = programFilter.replace(prevSelectedAvailableFacet, selectedAvailableFacet);
            }
            else {
                programFilter += " " + selectedAvailableFacet;
            }

            if (conedFilter.indexOf("AND Highlights.Available:") >= 0) {
                conedFilter = conedFilter.replace(prevSelectedAvailableFacet, selectedAvailableFacet);
            }
            else {
                conedFilter += " " + selectedAvailableFacet;
            }

            if (newFilter.indexOf("AND Highlights.Available:") >= 0) {
                newFilter = newFilter.replace(prevSelectedAvailableFacet, selectedAvailableFacet);
            }
            else {
                newFilter += " " + selectedAvailableFacet;
            }
        }

        query = $("#search-programs-courses").val();

        getProgramsCoursesCount(query, programFilter, function (err, programCount) {
            if (err) throw err;

            $("#programs-tab")[0].innerHTML = programsTabTitle;
            $("#programs-tab")[0].innerHTML += " (" + programCount + ")";
        });

        getProgramsCoursesCount(query, conedFilter, function (err, conedCount) {
            if (err) throw err;

            $("#courses-tab")[0].innerHTML = conedTabTitle;
            $("#courses-tab")[0].innerHTML += " (" + conedCount + ")";
        });

        getProgramsCoursesCount(query, newFilter, function (err, programCount) {
            if (err) throw err;

            if (programCount > 0) {
                $("#new-tab")[0].innerHTML = newTabTitle;
                $("#new-tab")[0].innerHTML += " (" + programCount + ")";

                $("#new-tab").css("display", "block");
            }
        });

        setClearFilterBtnColor();
        countFilters(false);
    });

    // Offered Changed
    $("#select-offered").change(function () {

        setOfferedFilter($("#select-offered"));
        countFilters(false);

    });

    // credential change
    $("#select-credential").change(function () {

        var prevSelectedCredentialFacet = selectedCredentialFacet;

        searchProgramsCourses.helper.removeFacetRefinement("Highlights.Credential");

        if (this.value == "Certificate(Non-Credit)") {
            searchProgramsCourses.helper.addFacetRefinement("Highlights.Credential", "Certificate (Non-Credit)");
            searchProgramsCourses.helper.search();

            $(this).css("border", selectedFilterBorderStyle);

            selectedCredentialFacet = "AND Highlights.Credential:" + "\"" + "Certificate (Non-Credit)" + "\"";
        }
        else if (this.value == "Certificate") {
            searchProgramsCourses.helper.addFacetRefinement("Highlights.Credential", "Certificate");
            searchProgramsCourses.helper.search();

            $(this).css("border", selectedFilterBorderStyle);

            selectedCredentialFacet = "AND Highlights.Credential:" + "\"" + "Certificate" + "\"";
        }
        else if (this.value == "Diploma") {
            searchProgramsCourses.helper.addFacetRefinement("Highlights.Credential", "Diploma");
            searchProgramsCourses.helper.search();

            $(this).css("border", selectedFilterBorderStyle);

            selectedCredentialFacet = "AND Highlights.Credential:" + "\"" + "Diploma" + "\"";
        }
        else if (this.value == "Apprenticeship") {
            searchProgramsCourses.helper.addFacetRefinement("Highlights.Credential", "Apprenticeship");
            searchProgramsCourses.helper.search();

            $(this).css("border", selectedFilterBorderStyle);

            selectedCredentialFacet = "AND Highlights.Credential:" + "\"" + "Apprenticeship" + "\"";
        }
        else if (this.value == "AppliedDegree") {
            searchProgramsCourses.helper.addFacetRefinement("Highlights.Credential", "Applied Degree");
            searchProgramsCourses.helper.search();

            $(this).css("border", selectedFilterBorderStyle);

            selectedCredentialFacet = "AND Highlights.Credential:" + "\"" + "Applied Degree" + "\"";
        }
        else if (this.value == "BachelorDegree") {
            searchProgramsCourses.helper.addFacetRefinement("Highlights.Credential", "Bachelor Degree");
            searchProgramsCourses.helper.search();

            $(this).css("border", selectedFilterBorderStyle);

            selectedCredentialFacet = "AND Highlights.Credential:" + "\"" + "Bachelor Degree" + "\"";
        }
        else if (this.value == "Post-DiplomaCertificate") {
            searchProgramsCourses.helper.addFacetRefinement("Highlights.Credential", "Post-Diploma Certificate");
            searchProgramsCourses.helper.search();

            $(this).css("border", selectedFilterBorderStyle);

            selectedCredentialFacet = "AND Highlights.Credential:" + "\"" + "Post-Diploma Certificate" + "\"";
        }
        else {
            searchProgramsCourses.helper.removeFacetRefinement("Highlights.Credential").search();
            $(this).css("border", "");

            selectedCredentialFacet = "";
        }

        if (selectedCredentialFacet == "") {
            if (programFilter.indexOf("AND Highlights.Credential:") >= 0) {
                programFilter = programFilter.replace(prevSelectedCredentialFacet, selectedCredentialFacet);
            }
            if (conedFilter.indexOf("AND Highlights.Credential:") >= 0) {
                conedFilter = conedFilter.replace(prevSelectedCredentialFacet, selectedCredentialFacet);
            }
            if (newFilter.indexOf("AND Highlights.Credential:") >= 0) {
                newFilter = newFilter.replace(prevSelectedCredentialFacet, selectedCredentialFacet);
            }

        }
        else {
            if (programFilter.indexOf("AND Highlights.Credential:") >= 0) {
                programFilter = programFilter.replace(prevSelectedCredentialFacet, selectedCredentialFacet);
            }
            else {
                programFilter += " " + selectedCredentialFacet;
            }

            if (conedFilter.indexOf("AND Highlights.Credential:") >= 0) {
                conedFilter = conedFilter.replace(prevSelectedCredentialFacet, selectedCredentialFacet);
            }
            else {
                conedFilter += " " + selectedCredentialFacet;
            }

            if (newFilter.indexOf("AND Highlights.Credential:") >= 0) {
                newFilter = newFilter.replace(prevSelectedCredentialFacet, selectedCredentialFacet);
            }
            else {
                newFilter += " " + selectedCredentialFacet;
            }
        }

        query = $("#search-programs-courses").val();

        getProgramsCoursesCount(query, programFilter, function (err, programCount) {
            if (err) throw err;

            $("#programs-tab")[0].innerHTML = programsTabTitle;
            $("#programs-tab")[0].innerHTML += " (" + programCount + ")";
        });

        getProgramsCoursesCount(query, conedFilter, function (err, conedCount) {
            if (err) throw err;

            $("#courses-tab")[0].innerHTML = conedTabTitle;
            $("#courses-tab")[0].innerHTML += " (" + conedCount + ")";
        });

        getProgramsCoursesCount(query, newFilter, function (err, programCount) {
            if (err) throw err;

            if (programCount > 0) {
                $("#new-tab")[0].innerHTML = newTabTitle;
                $("#new-tab")[0].innerHTML += " (" + programCount + ")";

                $("#new-tab").css("display", "block");
            }
        });

        setClearFilterBtnColor();
        countFilters(false);
    });

    // status select change
    $("#select-status").change(function () {

        var prevSelectedStatusFacet = selectedStatusFacet;

        searchProgramsCourses.helper.removeFacetRefinement("Highlights.Status");

        if (this.value == "Open") {
            searchProgramsCourses.helper.addFacetRefinement("Highlights.Status", "Open").search();
            $(this).css("border", selectedFilterBorderStyle);

            selectedStatusFacet = "AND Highlights.Status:" + "\"" + "Open" + "\"";
        }
        else if (this.value == "Ongoing") {

            searchProgramsCourses.helper.addFacetRefinement("Highlights.Status", "Ongoing").search();
            $(this).css("border", selectedFilterBorderStyle);

            selectedStatusFacet = "AND Highlights.Status:" + "\"" + "Ongoing" + "\"";
        }
        else if (this.value == "Waitlisted") {

            searchProgramsCourses.helper.addFacetRefinement("Highlights.Status", "Waitlisted").search();
            $(this).css("border", selectedFilterBorderStyle);

            selectedStatusFacet = "AND Highlights.Status:" + "\"" + "Waitlisted" + "\"";
        }
        else if (this.value == "Pending") {

            searchProgramsCourses.helper.addFacetRefinement("Highlights.Status", "Pending").search();
            $(this).css("border", selectedFilterBorderStyle);

            selectedStatusFacet = "AND Highlights.Status:" + "\"" + "Pending" + "\"";
        }
        else if (this.value == "Closed") {

            searchProgramsCourses.helper.addFacetRefinement("Highlights.Status", "Closed").search();
            $(this).css("border", selectedFilterBorderStyle);

            selectedStatusFacet = "AND Highlights.Status:" + "\"" + "Closed" + "\"";
        }
        else {
            searchProgramsCourses.helper.removeFacetRefinement("Highlights.Status").search();
            $(this).css("border", "");

            selectedStatusFacet = "";
        }

        if (selectedStatusFacet == "") {
            programFilter = programFilter.replace(prevSelectedStatusFacet, selectedStatusFacet);
            conedFilter = conedFilter.replace(prevSelectedStatusFacet, selectedStatusFacet);
            newFilter = newFilter.replace(prevSelectedStatusFacet, selectedStatusFacet);
        }
        else {
            if (programFilter.indexOf("AND Highlights.Status:") >= 0) {
                programFilter = programFilter.replace(prevSelectedStatusFacet, selectedStatusFacet);
            }
            else {
                programFilter += " " + selectedStatusFacet;
            }

            if (conedFilter.indexOf("AND Highlights.Status:") >= 0) {
                conedFilter = conedFilter.replace(prevSelectedStatusFacet, selectedStatusFacet);
            }
            else {
                conedFilter += " " + selectedStatusFacet;
            }

            if (newFilter.indexOf("AND Highlights.Status:") >= 0) {
                newFilter = newFilter.replace(prevSelectedStatusFacet, selectedStatusFacet);
            }
            else {
                newFilter += " " + selectedStatusFacet;
            }
        }

        query = $("#search-programs-courses").val();

        getProgramsCoursesCount(query, programFilter, function (err, programCount) {
            if (err) throw err;

            $("#programs-tab")[0].innerHTML = programsTabTitle;
            $("#programs-tab")[0].innerHTML += " (" + programCount + ")";
        });

        getProgramsCoursesCount(query, conedFilter, function (err, conedCount) {
            if (err) throw err;

            $("#courses-tab")[0].innerHTML = conedTabTitle;
            $("#courses-tab")[0].innerHTML += " (" + conedCount + ")";
        });

        getProgramsCoursesCount(query, newFilter, function (err, programCount) {
            if (err) throw err;

            $("#new-tab")[0].innerHTML = newTabTitle;
            $("#new-tab")[0].innerHTML += " (" + programCount + ")";

        });

        setClearFilterBtnColor();
        countFilters(false);
    });

    $('#select-AOI').change(function () {
        $(this)[0].selectedIndex !== 0 ? $(this).css("border", selectedFilterBorderStyle) : $(this).css("border", "");
        onAreaOfInterestChange();
        countFilters(false);
    });

    $("#search-programs-courses").blur();
    stickStructureData();
    window.addEventListener("resize", onResizeWidth);
    countFilters(false);
    if (isSelectAOIVisible) {
        selectAOIFilter();
    }
});

$(window).on('load', function () {
    activeTab = getUrlParameter("activetab");
    if (activeTab != undefined) {
        switch (activeTab.toLowerCase()) {
            case "new":
                $("#new-tab").click();
                break;
            case "programs":
                $("#programs-tab").click();
                break;
            case "courses":
                $("#courses-tab").click();
                break;
            default:
                break;
        }
    }

    offered = getUrlParameter("offered");
    if (offered != undefined) {
        switch (offered) {
            case "classroom":
                $('#select-offered').val("Classroom");
                break;
            case "online":
                $('#select-offered').val("Online");
                break;
            case "blended":
                $('#select-offered').val("Blended");
                break;
            default:
                break;
        }

        setOfferedFilter($("#select-offered"));
    }
});

//sticky content for structure data
function stickStructureData() {
    $(window).scroll(function (e) {
        if ($("#div-structure-pc").is(":visible")) {
            var structureDiv = document.getElementById("div-structure-pc");
            var divOffset = $("#search-results-listgrid").offset().top;
            var sticky = structureDiv.offsetTop;
            if (structureDiv) {
                if ($(window).scrollTop() <= divOffset) {
                    structureDiv.classList.remove("sticky");
                }
                else if (window.pageYOffset > sticky) {
                    structureDiv.classList.add("sticky");
                }
                else {
                    structureDiv.classList.remove("sticky");
                }
            }
        }
    });
}


function getStatusValue(statusTerm, startIndex) {
    return statusTerm.substring(startIndex, statusTerm.length);
}


function onResizeWidth() {
    if ($(window).width() != cacheWidth)
        refreshListGrid();
}

function getTerms(hit) {
    var list = [];
    for (var i = 0; i < 3; i++) {
        if (hit.Highlights["Term" + i] != undefined) {
            if (hit.Highlights["Term" + i].toLowerCase().indexOf("open") >= 0) {
                if (hit.Highlights["Term" + i].toLowerCase().indexOf("saskatchewan") >= 0 ||
                    hit.Highlights["Term" + i].toLowerCase().indexOf("telecommunications") >= 0 || hit.Highlights["Term" + i].toLowerCase().indexOf("manitoba") >= 0
                    || hit.Highlights["Term" + i].toLowerCase().indexOf("broadcast news") >= 0)
                    list.push("Term" + i);
            }
        }
    }
    return list;
}

function updateNewProgramLabel() {
    if ($('.grid-view').hasClass("on")) {
        $(".program-new-label").html("New for " + currentYear);
    }
    else {
        $(".program-new-label").html("New");
    }
}

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
    setSearchResultLayout();
    if ($("#search-results-listgrid").hasClass("grid")) {
        $(".grid .program-status").removeClass("program-highlight");
        $(".grid .program-statuses").addClass("program-highlight");
    }
    else if ($("#search-results-listgrid").hasClass("list")) {
        $(".list .program-status").addClass("program-highlight");
        $(".list .program-statuses").removeClass("program-highlight");
    }
}
function checkAOIEndsWith(list) {
    for (var i = 0; i < list.length; i++) {
        if ($(location).attr("href").indexOf(list[i]) > -1)
            return true;
    }
    return false;
}
function setSearchResultLayout() {
    var listAOI = ['areas-of-interest', 'programs-and-courses/continuing-education', 'future-students/shape-your-world',
        '/sait-schools/macphail-school-of-energy/macphail-school-of-energy-programs',
        '/programs-and-courses/academic-upgrading/apprenticeships-and-trades/apprenticeship-and-pre-employment-programs',
        '/about-sait/who-we-are/sait-schools/school-of-business/school-of-business-programs'
        , "/about-sait/who-we-are/sait-schools/school-of-construction/school-of-construction-programs"
        , "/about-sait/who-we-are/sait-schools/school-of-health-and-public-safety/school-of-health-and-public-safety-programs"
        , "/about-sait/who-we-are/sait-schools/school-of-hospitality-and-tourism/school-of-hospitality-and-tourism-programs"
        , "/about-sait/who-we-are/sait-schools/school-of-information-and-communications-technologies/school-of-information-and-communications-technologies-programs"
        , "/about-sait/who-we-are/sait-schools/school-of-manufacturing-and-automation/school-of-manufacturing-and-automation-programs"
        , "/about-sait/who-we-are/sait-schools/school-of-transportation/school-of-transportation-programs"
        , "/international-students/programs-for-international-students"];

    if (checkAOIEndsWith(listAOI)) {
        var mobileWidth = 800;
        var isMobileDevice = navigator.userAgent.match(/(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
        if (isMobileDevice || $(window).width() < mobileWidth) {
            setToListView();
        }
        else {
            setToGridView();
        }
    }
}


function isMobileOrTouchDevice() {
    return navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
}


function setToListView() {
    if ($("#search-results-listgrid").hasClass("grid")) {
        $("#search-results-listgrid").removeClass('grid').addClass('list');
        $('.grid-view').removeClass('on');
        $('.list-view').addClass('on');
    }
}
function setToGridView() {
    if ($("#search-results-listgrid").hasClass("list")) {
        $("#search-results-listgrid").removeClass('list').addClass('grid');
        $('.list-view').removeClass('on');
        $('.grid-view').addClass('on');
    }
}

function gridCardClicked(element) {

    if ($("#search-results-listgrid").hasClass("grid") && (openingInfoSession == false) || (openingInfoSession == undefined)) {
        var url = "";

        if ($(event.target).attr("class") == null) {
            url = $(event.target).parents(".program-inner-container").children(".program-title")[0].href;
        }
        else if ($(event.target).attr("class").indexOf("program-outer-container") >= 0) {
            if (url = $(event.target).children(".program-inner-container").children(".program-title").length > 0) {
                url = $(event.target).children(".program-inner-container").children(".program-title")[0].href;
            }
            else {
                url = $(event.target).children(".program-inner-container").children(".program-title-new-label").children(".program-title")[0].href;
            }
        }
        else if ($(event.target).attr("class").indexOf("program-available-banner") >= 0) {
            if ($(event.target).siblings(".program-inner-container").children(".program-title").length > 0) {
                url = $(event.target).siblings(".program-inner-container").children(".program-title")[0].href;
            }
            else {
                $(event.target).siblings(".program-inner-container").children(".program-title-new-label").children(".program-title")[0].href;
            }
        }
        else if ($(event.target).attr("class").indexOf("program-highlight") >= 0) {
            if ($(event.target).parents(".program-inner-container").children(".program-title").length > 0) {
                url = $(event.target).parents(".program-inner-container").children(".program-title")[0].href;
            }
            else {
                url = $(event.target).parents(".program-inner-container").children(".program-title-new-label").children(".program-title")[0].href;
            }
        }
        else if ($(event.target).attr("class").indexOf("status-askterisk") >= 0 || $(event.target).parent().attr("class").indexOf("status-tool-tip") >= 0 || $(event.target).attr("class").indexOf("circle-star") >= 0) {
            if ($(event.target).parents(".program-inner-container").children(".program-title").length > 0) {
                if (isMobileOrTouchDevice()) {
                    return false;
                }
                else {
                    url = $(event.target).parents(".program-inner-container").children(".program-title")[0].href;
                }
            }
            else {
                if (isMobileOrTouchDevice()) {
                    return false;
                }
                else {
                    url = $(event.target).parents(".program-inner-container").children(".program-title-new-label").children(".program-title")[0].href;
                }
            }
        }
        else if ($(event.target).attr("class").indexOf("program-image") >= 0) {
            if ($(event.target).parents(".program-inner-container").children(".program-title").length > 0) {
                url = $(event.target).parents(".program-inner-container").children(".program-title")[0].href;
            }
            else {
                url = $(event.target).parents(".program-inner-container").children(".program-title-new-label").children(".program-title")[0].href;
            }

        }
        else if ($(event.target).attr("class").indexOf("program-inner-container") >= 0) {
            if ($(event.target).children(".program-title").length > 0) {
                url = $(event.target).children(".program-title")[0].href;
            }
            else {
                url = $(event.target).children(".program-title-new-label").children(".program-title")[0].href;
            }
        }
        else if ($(event.target).attr("class").indexOf("program-new-label") >= 0) {
            url = $(event.target).parents(".program-inner-container").children(".program-title-new-label").children(".program-title")[0].href;
        }
        else {
            var anchor = $(element).children('.program-inner-container').find('.program-title');
            if (anchor) {
                url = $(anchor).attr('href');
            }
        }

        window.location = url;
    }
    else {
        openingInfoSession = false;
    }
}

function getUrlVars() {
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

function getProgramsCoursesCount(query, filter, callback) {
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

function clearSelectedFacetsDropDown() {
    $("#select-available").val('Available(All)');
    $("#select-offered").val('Offered(All)');
    $("#select-credential").val('Credential(All)');
    $("#select-status").val('Status(All)');
    if (isSelectAOIVisible()) {
        $('#select-AOI')[0].selectedIndex = 0;
    }
}

function clearProgramCoursesFilters() {

    if (isSelectAOIVisible()) {
        $('.select-aoi-pc')[0].selectedIndex = 0;
        onAreaOfInterestChange();
        $(".select-aoi-pc").css("border", "");
    }
    searchProgramsCourses.helper.setQueryParameter("query", "");
    $("#search-programs-courses")[0].value = "";

    searchProgramsCourses.helper.removeFacetRefinement("Highlights.Available");
    searchProgramsCourses.helper.removeDisjunctiveFacetRefinement("Highlights.Offered");
    searchProgramsCourses.helper.removeFacetRefinement("Highlights.Credential");
    searchProgramsCourses.helper.removeFacetRefinement("Highlights.Status");

    if (associatedTaxonomyCategory != "") {
        searchProgramsCourses.helper.setQueryParameter('filters', 'AssociatedTaxonomyCategories:' + "\"" + associatedTaxonomyCategory + "\"");
        searchProgramsCourses.helper.search();
    }

    $("#select-available").val('Available(All)');
    $("#select-offered").val('Offered(All)');
    $("#select-credential").val('Credential(All)');
    $("#select-status").val('Status(All)');

    $("#select-available").css("border", "");
    $("#select-offered").css("border", "");
    $("#select-credential").css("border", "");
    $("#select-status").css("border", "");


    programFilter = programFilter.replace(selectedAvailableFacet, "");
    conedFilter = conedFilter.replace(selectedAvailableFacet, "");
    newFilter = newFilter.replace(selectedAvailableFacet, "");

    programFilter = programFilter.replace(selectedOfferedFacet, "");
    conedFilter = conedFilter.replace(selectedOfferedFacet, "");
    newFilter = newFilter.replace(selectedOfferedFacet, "");

    programFilter = programFilter.replace(selectedCredentialFacet, "");
    conedFilter = conedFilter.replace(selectedCredentialFacet, "");
    newFilter = newFilter.replace(selectedCredentialFacet, "");

    programFilter = programFilter.replace(selectedStatusFacet, "");
    conedFilter = conedFilter.replace(selectedStatusFacet, "");
    newFilter = newFilter.replace(selectedStatusFacet, "");

    getProgramsCoursesCount("", programFilter, function (err, programCount) {
        if (err) throw err;

        $("#programs-tab")[0].innerHTML = programsTabTitle;
        $("#programs-tab")[0].innerHTML += " (" + programCount + ")";
    });

    getProgramsCoursesCount("", conedFilter, function (err, conedCount) {
        if (err) throw err;

        $("#courses-tab")[0].innerHTML = conedTabTitle;
        $("#courses-tab")[0].innerHTML += " (" + conedCount + ")";
    });

    getProgramsCoursesCount("", newFilter, function (err, programCount) {
        if (err) throw err;

        $("#new-tab")[0].innerHTML = newTabTitle;
        $("#new-tab")[0].innerHTML += " (" + programCount + ")";
    });

    selectedAvailableFacet = "";
    selectedOfferedFacet = "";
    selectedCredentialFacet = "";
    selectedStatusFacet = "";

    $("#programs-tab").removeClass("g-active");
    $("#courses-tab").removeClass("g-active");
    $("#new-tab").removeClass("g-active");


    setClearFilterBtnColor();
    $(".info-session-col-head").css("visibility", "visible");
    $(".grid-list-icons").css("visibility", "visible");
    $("#select-status").css("display", "inline-block");
    searchProgramsCourses.helper.setQueryParameter('filters', programFilter);
    searchProgramsCourses.helper.search();
    countFilters(true);
}

function setClearFilterBtnColor() {
    if ((($("#select-available").val() == "Available(All)") &&
        ($("#select-offered").val() == 'Offered(All)') &&
        ($("#select-credential").val() == 'Credential(All)') &&
        ($("#select-status").val() == 'Status(All)')) &&
        ($("#search-programs-courses")[0].value == "") &&
        ($("#programs-tab").hasClass("g-active") == false) &&
        ($("#courses-tab").hasClass("g-active") == false) &&
        ($("#new-tab").hasClass("g-active") == false)) {

        if (isSelectAOIVisible()) {
            if ($("#select-AOI option:nth-child(1)").is(":selected")) {
                $("#mobile-clear-filters-btn, #aoi-clear-filters-btn").addClass("g-disabled");
            }
            else {
                $("#mobile-clear-filters-btn, #aoi-clear-filters-btn").removeClass("g-disabled");
            }
        }
        else {
            $("#mobile-clear-filters-btn, #aoi-clear-filters-btn").addClass("g-disabled");
        }
    }
    else {
        $("#mobile-clear-filters-btn, #aoi-clear-filters-btn").removeClass("g-disabled");
    }
}

function isSelectAOIVisible() {
    return $(".select-aoi-pc").is(':visible') || $(".select-aoi-pc").length;
}

function onProgramCoursesSearchInput() {
    /*if (event.keyCode == 13) {
        $('html, body').animate({ scrollTop: $("#scroll-pos").offset().top - 55 }, 50);
        event.target.blur();
    }*/
    query = $("#search-programs-courses").val();

    getProgramsCoursesCount(query, programFilter, function (err, programCount) {
        if (err) throw err;

        $("#programs-tab")[0].innerHTML = programsTabTitle;
        $("#programs-tab")[0].innerHTML += " (" + programCount + ")";
    });

    getProgramsCoursesCount(query, conedFilter, function (err, conedCount) {
        if (err) throw err;

        $("#courses-tab")[0].innerHTML = conedTabTitle;
        $("#courses-tab")[0].innerHTML += " (" + conedCount + ")";
    });

    getProgramsCoursesCount(query, newFilter, function (err, programCount) {
        if (err) throw err;

        if (programCount > 0) {
            $("#new-tab")[0].innerHTML = newTabTitle;
            $("#new-tab")[0].innerHTML += " (" + programCount + ")";

            $("#new-tab").css("display", "block");
        }
        else {
            $("#new-tab")[0].innerHTML = "";
        }
    });

    setClearFilterBtnColor();
}

function programsCoursesTabClicked(clicked) {
    setActiveTab(clicked.innerText.toLowerCase());

    setClearFilterBtnColor();
}

function setActiveTab(activeTab) {
    if (activeTab.indexOf(conedTabTitle.toLowerCase()) >= 0 || activeTab.indexOf("courses") >= 0) {

        $("#select-status").css("display", "none");

        if (associatedTaxonomyCategory != "") {
            filter = 'AssociatedTaxonomyCategories:' + "\"" + associatedTaxonomyCategory + "\"" + ' AND Schema: "CourseDetailPage" AND NOT Highlights.Status: "Not ConEd"';
        }
        else {
            filter = 'Schema: "CourseDetailPage" AND NOT Highlights.Status: "Not ConEd"';
        }

        $(".info-session-col-head").css("visibility", "hidden");
        //$("#select-available").css("display", "none");
        //$("#label-course-code").css("display", "block");
        $(".grid-list-icons").css("visibility", "hidden");

        searchProgramsCourses.helper.setQueryParameter('filters', conedFilter);
        searchProgramsCourses.helper.search();

        $("#programs-tab").removeClass("g-active");
        $("#new-tab").removeClass("g-active");
        $("#courses-tab").addClass("g-active");

    }
    else if (activeTab.indexOf(newTabTitle.toLowerCase()) >= 0) {

        $("#select-status").css("display", "block");

        if (associatedTaxonomyCategory != "") {
            newFilter = 'AssociatedTaxonomyCategories:' + "\"" + associatedTaxonomyCategory + "\"" + ' AND AssociatedTaxonomyCategories: "New for 2019"';
        }
        else {
            newFilter = 'AssociatedTaxonomyCategories: "New for 2019"';
        }

        searchProgramsCourses.helper.setQueryParameter('filters', newFilter);
        searchProgramsCourses.helper.search();

        $("#programs-tab").removeClass("g-active");
        $("#courses-tab").removeClass("g-active");
        $("#new-tab").addClass("g-active");

    }
    else {

        $("#select-status").css("display", "block");

        if (associatedTaxonomyCategory != "") {
            filter = 'AssociatedTaxonomyCategories:' + "\"" + associatedTaxonomyCategory + "\"" + ' AND Schema: "ProgramsDetail"';
        }
        else {
            filter = 'Schema: "ProgramsDetail"';
        }

        //$(".info-session-col-head").css("visibility", "visible");
        //$("#select-available").css("display", "block");
        //$("#label-course-code").css("display", "none");
        $(".grid-list-icons").css("visibility", "visible");


        searchProgramsCourses.helper.setQueryParameter('filters', programFilter);
        searchProgramsCourses.helper.search();

        $("#courses-tab").removeClass("g-active");
        $("#new-tab").removeClass("g-active");
        $("#programs-tab").addClass("g-active");

    }
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
    var prevSelectedOfferedFacet = selectedOfferedFacet;

    searchProgramsCourses.helper.removeDisjunctiveFacetRefinement("Highlights.Offered");

    if ($input.val() == "Classroom") {
        searchProgramsCourses.helper.addDisjunctiveFacetRefinement("Highlights.Offered", "Classroom");
        searchProgramsCourses.helper.addDisjunctiveFacetRefinement("Highlights.Offered", "Classroom or Online");
        searchProgramsCourses.helper.search();
        $input.css("border", selectedFilterBorderStyle);

        selectedOfferedFacet = "AND (Highlights.Offered:" + "\"" + "Classroom" + "\"" + " OR Highlights.Offered:" + "\"" + "Classroom or Online" + "\"" + ")";
    }
    else if ($input.val() == "Online") {
        searchProgramsCourses.helper.addDisjunctiveFacetRefinement("Highlights.Offered", "Online");
        searchProgramsCourses.helper.addDisjunctiveFacetRefinement("Highlights.Offered", "Classroom or Online");
        searchProgramsCourses.helper.search();
        $input.css("border", selectedFilterBorderStyle);

        selectedOfferedFacet = "AND (Highlights.Offered:" + "\"" + "Online" + "\"" + " OR Highlights.Offered:" + "\"" + "Classroom or Online" + "\"" + ")";
    }
    else if ($input.val() == "Blended") {
        searchProgramsCourses.helper.addDisjunctiveFacetRefinement("Highlights.Offered", "Blended");
        searchProgramsCourses.helper.addDisjunctiveFacetRefinement("Highlights.Offered", "Classroom or Blended");
        searchProgramsCourses.helper.search();
        $input.css("border", selectedFilterBorderStyle);

        selectedOfferedFacet = "AND (Highlights.Offered:" + "\"" + "Blended" + "\"" + " OR Highlights.Offered:" + "\"" + "Classroom or Blended" + "\"" + ")";


    }
    else {
        searchProgramsCourses.helper.removeDisjunctiveFacetRefinement("Highlights.Offered").search();
        $input.css("border", "");

        selectedOfferedFacet = "";
    }

    if (selectedOfferedFacet == "") {
        programFilter = programFilter.replace(prevSelectedOfferedFacet, selectedOfferedFacet);
        conedFilter = conedFilter.replace(prevSelectedOfferedFacet, selectedOfferedFacet);
        newFilter = newFilter.replace(prevSelectedOfferedFacet, selectedOfferedFacet);
    }
    else {
        if (programFilter.indexOf("AND Highlights.Offered:") >= 0 || programFilter.indexOf("AND (Highlights.Offered:") >= 0) {
            programFilter = programFilter.replace(prevSelectedOfferedFacet, selectedOfferedFacet);
        }
        else {
            programFilter += " " + selectedOfferedFacet;
        }

        if (conedFilter.indexOf("AND Highlights.Offered:") >= 0) {
            conedFilter = conedFilter.replace(prevSelectedOfferedFacet, selectedOfferedFacet);
        }
        else {
            conedFilter += " " + selectedOfferedFacet;
        }

        if (newFilter.indexOf("AND Highlights.Offered:") >= 0) {
            newFilter = newFilter.replace(prevSelectedOfferedFacet, selectedOfferedFacet);
        }
        else {
            newFilter += " " + selectedOfferedFacet;
        }
    }

    query = $("#search-programs-courses").val();

    getProgramsCoursesCount(query, programFilter, function (err, programCount) {
        if (err) throw err;

        $("#programs-tab")[0].innerHTML = programsTabTitle;
        $("#programs-tab")[0].innerHTML += " (" + programCount + ")";
    });

    getProgramsCoursesCount(query, conedFilter, function (err, conedCount) {
        if (err) throw err;

        $("#courses-tab")[0].innerHTML = conedTabTitle;
        $("#courses-tab")[0].innerHTML += " (" + conedCount + ")";
    });

    getProgramsCoursesCount(query, newFilter, function (err, programCount) {
        if (err) throw err;

        if (programCount > 0) {
            $("#new-tab")[0].innerHTML = newTabTitle;
            $("#new-tab")[0].innerHTML += " (" + programCount + ")";

            $("#new-tab").css("display", "block");
        }

    });

    setClearFilterBtnColor();
}

function toggleSearchFilter() {
    $('.program-inner-container').find('select.g-form-control').toggleClass('filter-on');
    $('.program-inner-container.select-facets').toggleClass('filter-on');
    $('.filter-overlay').toggleClass('filter-ol-on');
    $('.filter-mobile-only').toggleClass('filter-on');
    if ($('.program-inner-container.select-facets').hasClass('filter-on')) {
        $('.program-inner-container.select-facets').addClass('slide-in');
    } else {
        $('.program-inner-container.select-facets').removeClass('slide-in');
    }
}

function countFilters(isClearAll) {
    var totalFilters = 0;
    var isAvailableSelected = $("#select-available").val() !== "Available(All)" ? 1 : 0;
    var isOfferedSelected = $("#select-offered").val() !== "Offered(All)" ? 1 : 0;
    var isCredSelected = $("#select-credential").val() !== "Credential(All)" ? 1 : 0;
    var isStatusSelected = $("#select-status").val() !== "Status(All)" ? 1 : 0;
    var isAOISelected = 0;
    if (isSelectAOIVisible()) {
        isAOISelected = $(".select-aoi-pc").val().indexOf("/programs-and-courses?") < 0 ? 1 : 0;
    }
    if (!isClearAll) {
        totalFilters = isAOISelected  + isAvailableSelected + isOfferedSelected + + isCredSelected + isStatusSelected;
        $('#btn-search-filter').text(totalFilters > 0 ? 'Filters (' + totalFilters + ')' : 'Filters');
    }
    else {
        $('#btn-search-filter').text('Filters');
    }
}

function selectAOIFilter() {
    if (location.href.indexOf("/areas-of-interest/business-accounting-and-management") > 0) {
        $('#select-AOI').val('areas-of-interest/business-accounting-and-management');
    }
    else if (location.href.indexOf("/academic-upgrading") > 0) {
        $('#select-AOI').val('areas-of-interest/academic-upgrading');
    }
    else if (location.href.indexOf("/areas-of-interest/construction-and-trades") > 0) {
        $('#select-AOI').val('areas-of-interest/construction-and-trades');
    }
    else if (location.href.indexOf("/areas-of-interest/culinary-hospitality-and-travel") > 0) {
        $('#select-AOI').val('areas-of-interest/culinary-hospitality-and-travel');
    }
    else if (location.href.indexOf("/areas-of-interest/energy") > 0) {
        $('#select-AOI').val('areas-of-interest/energy');
    }
    else if (location.href.indexOf("/areas-of-interest/engineering-technologies") > 0) {
        $('#select-AOI').val('areas-of-interest/engineering-technologies');
    }
    else if (location.href.indexOf("/areas-of-interest/english-language") > 0) {
        $('#select-AOI').val('areas-of-interest/english-language');
    }
    else if (location.href.indexOf("/areas-of-interest/health-and-medical") > 0) {
        $('#select-AOI').val('areas-of-interest/health-and-medical');
    }
    else if (location.href.indexOf("/areas-of-interest/information-technology") > 0) {
        $('#select-AOI').val('areas-of-interest/information-technology');
    }
    else if (location.href.indexOf("/areas-of-interest/manufacturing") > 0) {
        $('#select-AOI').val('areas-of-interest/manufacturing');
    }
    else if (location.href.indexOf("/areas-of-interest/media-and-communications") > 0) {
        $('#select-AOI').val('areas-of-interest/media-and-communications');
    }
    else if (location.href.indexOf("/areas-of-interest/transportation") > 0) {
        $('#select-AOI').val('areas-of-interest/transportation');
    }
    else
    {
        $('#select-AOI')[0].selectedIndex = 0;
    }
}


function onAreaOfInterestChange() {

    var selectedVal = $('#select-AOI').val();
    if (selectedVal.indexOf("/academic-upgrading") >= 0) {
        associatedTaxonomyCategory = "Areas of Interest->Upgrading";
    }
    else if (selectedVal.indexOf("areas-of-interest/business-accounting-and-management") >= 0) {
        associatedTaxonomyCategory = "Areas of Interest->Business, Accounting and Management";
    }
    else if (selectedVal.indexOf("areas-of-interest/culinary-hospitality-and-travel") >= 0) {
        associatedTaxonomyCategory = "Areas of Interest->Culinary, Hospitality and Travel";
    }
    else if (selectedVal.indexOf("areas-of-interest/construction-and-trades") >= 0) {
        associatedTaxonomyCategory = "Areas of Interest->Construction and Trades";
    }
    else if (selectedVal.indexOf("areas-of-interest/energy") >= 0) {
        associatedTaxonomyCategory = "Areas of Interest->Energy";
    }
    else if (selectedVal.indexOf("areas-of-interest/engineering-technologies") >= 0) {
        associatedTaxonomyCategory = "Areas of Interest->Engineering Technologies";
    }
    else if (selectedVal.indexOf("areas-of-interest/english-language") >= 0) {
        associatedTaxonomyCategory = "Areas of Interest->English Language";
    }
    else if (selectedVal.indexOf("areas-of-interest/health-and-medical") >= 0) {
        associatedTaxonomyCategory = "Areas of Interest->Health and Medical";
    }
    else if (selectedVal.indexOf("areas-of-interest/information-technology") >= 0) {
        associatedTaxonomyCategory = "Areas of Interest->Information Technology";
    }
    else if (selectedVal.indexOf("areas-of-interest/manufacturing") >= 0) {
        associatedTaxonomyCategory = "Areas of Interest->Manufacturing";
    }
    else if (selectedVal.indexOf("areas-of-interest/media-and-communications") >= 0) {
        associatedTaxonomyCategory = "Areas of Interest->Media and Communications";
    }
    else if (selectedVal.indexOf("areas-of-interest/transportation") >= 0) {
        associatedTaxonomyCategory = "Areas of Interest->Transportation";
    }
    else {
        associatedTaxonomyCategory = "";
        programFilter = 'Schema: "ProgramsDetail"';
        conedFilter = 'Schema: "CourseDetailPage" AND NOT Highlights.Status: "Not ConEd"';
        newFilter = 'AssociatedTaxonomyCategories: "New for 2019"';
    }


    $("#search-results").css("display", "block");
    query = $("#search-programs-courses").val();

    if (associatedTaxonomyCategory != "") {
        programFilter = 'AssociatedTaxonomyCategories:' + "\"" + associatedTaxonomyCategory + "\"" + ' AND Schema: "ProgramsDetail"';
        conedFilter = 'AssociatedTaxonomyCategories:' + "\"" + "Continuing Education" + "\"" + 'AND AssociatedTaxonomyCategories:' + "\"" + associatedTaxonomyCategory + "\"" + ' AND Schema: "CourseDetailPage" AND NOT Highlights.Status: "Not ConEd"';
        newFilter = 'AssociatedTaxonomyCategories: "New for 2019"' + 'AND AssociatedTaxonomyCategories:' + "\"" + associatedTaxonomyCategory + "\"";
        searchProgramsCourses.helper.setQueryParameter('filters', 'AssociatedTaxonomyCategories:' + "\"" + associatedTaxonomyCategory + "\"");
        searchProgramsCourses.helper.search();
    }
    else {
        searchProgramsCourses.helper.setQueryParameter('filters', programFilter);
        searchProgramsCourses.helper.search();
    }

    getProgramsCoursesCount(query, programFilter, function (err, programCount) {
        if (err) throw err;

        $("#programs-tab")[0].innerHTML = programsTabTitle;
        $("#programs-tab")[0].innerHTML += " (" + programCount + ")";
    });

    getProgramsCoursesCount(query, conedFilter, function (err, conedCount) {
        if (err) throw err;

        if (conedCount > 0) {
            $("#courses-tab")[0].innerHTML = conedTabTitle;
            $("#courses-tab")[0].innerHTML += " (" + conedCount + ")";
            $("#courses-tab").css("display", "block");
        } else {
            $("#courses-tab")[0].innerHTML = "";
        }
    });

    getProgramsCoursesCount(query, newFilter, function (err, programCount) {
        if (err) throw err;

        if (programCount > 0) {
            $("#new-tab")[0].innerHTML = newTabTitle;
            $("#new-tab")[0].innerHTML += " (" + programCount + ")";
            $("#new-tab").css("display", "block");
        }
        else {
            $("#new-tab")[0].innerHTML = "";
        }
    });
    setClearFilterBtnColor();
}