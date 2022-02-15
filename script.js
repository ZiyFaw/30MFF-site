window.onscroll = function() {myFunction()};

var topnav = document.getElementById("topnav");

function myFunction() {
  if (window.pageYOffset > 0) {
    topnav.classList.add("nav-solid-color")
  } else {
    topnav.classList.remove("nav-solid-color");
  }
}

$('body').ripples({
	resolution: 512,
	dropRadius: 30,
	perturbance: 0.1,
});
