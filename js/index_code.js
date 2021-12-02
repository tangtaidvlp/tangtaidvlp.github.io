var navbar = document.getElementsByClassName('nav-bar')[0];

var target = document.querySelector('#about-me-section');
var nav_project = document.querySelector('#nav-project');
var nav_about = document.querySelector('#nav-about');

document.addEventListener('scroll', () => {

  if (window.scrollY > target.getBoundingClientRect().top) {
    nav_project.className = "nav-link";
    nav_about.className = "nav-link active";
  } else {
    nav_project.className = "nav-link active";
    nav_about.className = "nav-link";
  } 


})