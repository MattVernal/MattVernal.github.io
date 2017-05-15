//Code for scrollspy
var totalHeight = $(document).height(); 
var sectionHeight = totalHeight / 5;
var homeHeight = 0;
var profileHeight = sectionHeight;
var skillsHeight = sectionHeight * 2;
var portfolioHeight = sectionHeight * 3;
var contactHeight = sectionHeight * 4;
var activeSection = null;

$(document).scroll(function(){
    
});

$("#homeLink").click(function(){
    $('html, body').animate({scrollTop: homeHeight}, 500);
});

$("#profileLink").click(function(){
    $('html, body').animate({scrollTop: profileHeight}, 500);
});

$("#skillsLink").click(function(){
    $('html, body').animate({scrollTop: skillsHeight}, 500);
});

$("#portfolioLink").click(function(){
    $('html, body').animate({scrollTop: portfolioHeight}, 500);
});

$("#contactLink").click(function(){
    $('html, body').animate({scrollTop: contactHeight}, 500);
});

function addActiveClass(activeSection){
    currentScrollHeight = $(document).offsetTop;
    if (currentScrollHeight >= homeHeight && currentScrollHeight <= profileHeight){
        $('#homeLink').addClass("sidebar__anchors__active");
    }
}