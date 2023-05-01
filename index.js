var header = document.getElementById("headermain");
var headerone = document.getElementById("headerone");


window.onscroll = function () {
    scrollFunction();
}
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    headerone.style.display = "block";
       
  } else {
    headerone.style.display = "none";
  }
}


// var responsive = document.getElementById("responsive");
// window.onscroll = function () {
//   scrollresponsive();
// }

// function scrollresponsive() {
//   if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
//     responsive.style.display = "none";
//   }
//   else {
//     responsive.style.display="block"
//   }
// }


