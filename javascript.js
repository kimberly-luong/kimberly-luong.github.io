window.onscroll = function() {stickyNavigation()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavigation() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
