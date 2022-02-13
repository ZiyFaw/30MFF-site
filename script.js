// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var topnav = document.getElementById("topnav");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 0) {
    topnav.classList.add("nav-solid-color")
  } else {
    topnav.classList.remove("nav-solid-color");
  }
}

// if (document.body.scrollTop == 0) {
//   // topnav.style.backgroundColor = "red";
// }
// topnav.style.backgroundColor = "red";

// if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0)
// {
//     topnav.style.backgroundColor = "red";
// }
