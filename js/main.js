//Code for scrollspy
var totalHeight = $(document).height();
var sectionHeight = totalHeight / 5;
var halfSectionHeight = sectionHeight / 2;
var homeHeight = 0;
var profileHeight = sectionHeight;
var skillsHeight = sectionHeight * 2;
var portfolioHeight = sectionHeight * 3;
var contactHeight = sectionHeight * 4;

var barsToggled = false;

$('.progress-bar-filler').each(function() {
    $(this).animate({width: "toggle"}, 0);
});

$(document).scroll(function () {
    activeSectionWatcher();
});

$("#homeLink").click(function () {
    $('html, body').animate({scrollTop: homeHeight}, 500);
});

$("#profileLink").click(function () {
    $('html, body').animate({scrollTop: profileHeight}, 500);
});

$("#skillsLink").click(function () {
    $('html, body').animate({scrollTop: skillsHeight}, 500);
});

$("#portfolioLink").click(function () {
    $('html, body').animate({scrollTop: portfolioHeight}, 500);
});

$("#contactLink").click(function () {
    $('html, body').animate({scrollTop: contactHeight}, 500);
});

function activeSectionWatcher(activeSection) {
    removeActiveClass();
    currentScrollHeight = ($('body').scrollTop() + 10);
    if (currentScrollHeight >= homeHeight  && currentScrollHeight <= profileHeight) {
        $('#homeLink').addClass("sidebar__anchors__active");
        activeSection = $('#homeLink');
    }
    if (currentScrollHeight >= profileHeight && currentScrollHeight <= skillsHeight) {
        $('#profileLink').addClass("sidebar__anchors__active");
        activeSection = $('#profileLink');
    }
    if (currentScrollHeight >= skillsHeight && currentScrollHeight <= portfolioHeight) {
        $('#skillsLink').addClass("sidebar__anchors__active");
        activeSection = $('#skillsLink');
        animateProgressBars();
    }
    if (currentScrollHeight >= portfolioHeight && currentScrollHeight <= contactHeight) {
        $('#portfolioLink').addClass("sidebar__anchors__active");
        activeSection = $('#portfolioLink');
    }
    if (currentScrollHeight >= contactHeight) {
        $('#contactLink').addClass("sidebar__anchors__active");
        activeSection = $('#contactLink');
    }
    return activeSection;
}
function removeActiveClass() {
    var sections = $('.sidebar__anchors');
    sections.each(function () {
        $(this).removeClass('sidebar__anchors__active');
    });

}

function animateProgressBars() {
    if (!barsToggled) {
        var bars = $('.progress-bar-filler');
        $(bars).each(function () {
            $(this).animate({
                width: "toggle"
            }, 300);
        });
    }
    barsToggled = true;
}
