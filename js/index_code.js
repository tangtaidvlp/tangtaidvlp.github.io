var navbar = document.getElementsByClassName('nav-bar')[0];

var $target = $('#about-me-section');
var $nav_project = $('#nav-project');
var $nav_about = $('#nav-about');

document.addEventListener('scroll', () => {
  console.log("window.scrollY = " + window.scrollY);
  console.log("** " + $target.position().top);

  if (window.scrollY > $target.position().top) {
    $nav_project.removeClass("active");
    $nav_about.addClass("active");
  } else {
    $nav_project.addClass("active");
    $nav_about.removeClass("active");
  } 
})