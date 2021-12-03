// #region AUTO SCROLL PROCESS

var navbar = document.getElementsByClassName('nav-bar')[0];

var $target = $('#about-me-section');
var $nav_project = $('#nav-project');
var $nav_about = $('#nav-about');

var hasScrollTo_TitleProject = false;
var hasScrollTo_TOM = false;
var hasScrollTo_FEM = false;
var hasScrollTo_TitleAbout = false;

var hasScrollTo_MyStory = false;
var hasScrollTo_MyKnowThing = false;
var hasScrollTo_MyAchieve = false;
var hasScrollTo_ThanksWord = false;


var viewHeight = $(window).height();
var scrollTriggerPoint = viewHeight * 0.2;
var navbarHeight = $(".nav-bar")[0].offsetHeight;

// Title Project
var projectTitle_ScrollTriggerPoint = scrollTriggerPoint;
var projectTitle_TargetPoint = $("#project-title-scroll-target").offset().top + navbarHeight;

// Tom
var tom_ScrollTriggerPoint = projectTitle_TargetPoint + scrollTriggerPoint;
var tom_TargetPoint = $("#tom-scroll-target").offset().top - (viewHeight / 10) - navbarHeight;

// FEM
var fem_ScrollTriggerPoint = tom_TargetPoint + scrollTriggerPoint;
var fem_TargetPoint = $("#fem-scroll-target").offset().top + navbarHeight;

// Title About
var aboutTitle_ScrollTriggerPoint = fem_TargetPoint + scrollTriggerPoint;
var aboutTitle_TargetPoint = $("#about-title-scroll-target").offset().top + navbarHeight;

// My Story
var myStory_ScrollTriggerPoint = aboutTitle_TargetPoint + scrollTriggerPoint;
var myStory_TargetPoint = $("#my-story-title").offset().top - (viewHeight / 10) - navbarHeight;

// My Know Thing
var myKnowThing_ScrollTriggerPoint = myStory_TargetPoint + scrollTriggerPoint;
var tech_icon_section_height = $("#tech-icon-section")[0].offsetHeight; 
var myKnowThing_TargetPoint = $("#tech-icon-section").offset().top - (viewHeight - tech_icon_section_height)/2 + navbarHeight;

// Achievement
var achievement_ScrollTriggerPoint = myKnowThing_TargetPoint + scrollTriggerPoint;
var archievement_section_height = $("#achievement-section")[0].offsetHeight; 
var achievement_TargetPoint = $("#achievement-section").offset().top - navbarHeight;


// Thanks word
var thanksWord_ScrollTriggerPoint = achievement_TargetPoint + scrollTriggerPoint;
var thanksWord_height = $(".thanks-word")[0].offsetHeight; 
var thanksWord_TargetPoint = $(".thanks-word").offset().top - (viewHeight - thanksWord_height)/2 + navbarHeight;

// SCROLL LISTENER
document.addEventListener('scroll', () => {

  if (directScroll == true) {
    return;
  }

  // Title Project
  if (window.scrollY > projectTitle_ScrollTriggerPoint) {
    if (hasScrollTo_TitleProject == false) {
      hasScrollTo_TitleProject = true;
    
      $('html, body').animate({
        scrollTop: projectTitle_TargetPoint
      }, 500);
    }

  } else {
    hasScrollTo_TitleProject = false;
  }

  // Tom 
  if (window.scrollY > tom_ScrollTriggerPoint) {
    if (hasScrollTo_TOM == false) {
      hasScrollTo_TOM = true;
      $('html, body').animate({
        scrollTop: tom_TargetPoint
      }, 500);
    } 
  } else {
    hasScrollTo_TOM = false;
  }

  // Fem
  if (window.scrollY > fem_ScrollTriggerPoint) {
    if (hasScrollTo_FEM == false) {
      hasScrollTo_FEM = true;
      $('html, body').animate({
        scrollTop: fem_TargetPoint
      }, 500);
    } 
  } else {
    hasScrollTo_FEM = false;
  }

  // Title About
  if (window.scrollY > aboutTitle_ScrollTriggerPoint) {
    if (hasScrollTo_TitleAbout == false) {
      hasScrollTo_TitleAbout = true;
    
      $('html, body').animate({
        scrollTop: aboutTitle_TargetPoint
      }, 500);
      
      $nav_project.removeClass("active");
      $nav_about.addClass("active");
    }

  } else {
    hasScrollTo_TitleAbout = false;
    $nav_project.addClass("active");
    $nav_about.removeClass("active");
  }

  // My Story
  if (window.scrollY > myStory_ScrollTriggerPoint) {
    if (hasScrollTo_MyStory == false) {
      hasScrollTo_MyStory = true;
    
      $('html, body').animate({
        scrollTop: myStory_TargetPoint
      }, 500);
    }

  } else {
    hasScrollTo_MyStory = false;
  }

  // My Know Thing
  if (window.scrollY > myKnowThing_ScrollTriggerPoint) {
    if (hasScrollTo_MyKnowThing == false) {
      hasScrollTo_MyKnowThing = true;
    
      $('html, body').animate({
        scrollTop: myKnowThing_TargetPoint
      }, 500);
    }

  } else {
    hasScrollTo_MyKnowThing = false;
  }

  // Achievement
  if (window.scrollY > achievement_ScrollTriggerPoint) {
    if (hasScrollTo_MyAchieve == false) {
      hasScrollTo_MyAchieve = true;
    
      $('html, body').animate({
        scrollTop: achievement_TargetPoint
      }, 500);
    }

  } else {
    hasScrollTo_MyAchieve = false;
  }

  // Thanks word
  if (window.scrollY > thanksWord_ScrollTriggerPoint) {
    if (hasScrollTo_ThanksWord == false) {
      hasScrollTo_ThanksWord = true;
    
      $('html, body').animate({
        scrollTop: thanksWord_TargetPoint
      }, 500);
    }

  } else {
    hasScrollTo_ThanksWord = false;
  }
})

//#endregion AUTO SCROLL PROCESS

var directScroll = false;
function autoScrollTo (position) {
  $('html, body').animate({
    scrollTop: position
  }, 500);
}

function scrollToProjectSection () {
  hasScrollTo_TOM = true;
  directScroll = true;
  $('html, body').animate({
    scrollTop: tom_TargetPoint
  }, 500, function () {
    directScroll = false;
  });
}

function scrollToAboutSection () {
  hasScrollTo_MyStory = true;
  hasScrollTo_TitleProject = true;
  hasScrollTo_TOM = true;
  hasScrollTo_FEM = true;
  hasScrollTo_TitleAbout = true;

  $nav_project.removeClass("active");
  $nav_about.addClass("active");

  directScroll = true;
  $('html, body').animate({
    scrollTop: myStory_TargetPoint
  }, 500, function () {
    directScroll = false;
  });
  autoScrollTo(myStory_TargetPoint);
}



