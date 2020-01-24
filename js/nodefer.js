/*--------------------------------------------*\
    This script contains functions that 
    are needed when the page first loads
\*--------------------------------------------*/

//Program/courses tables
function showCourses() {
    $('body').addClass('showCourses');
    $('body').removeClass('showPrograms');
    $('#coursesTab').addClass('g-active');
    $('#programsTab').removeClass('g-active');
}

function showPrograms() {
    $('body').removeClass('showCourses');
    $('body').addClass('showPrograms');
    $('#coursesTab').removeClass('g-active');
    $('#programsTab').addClass('g-active');
}