var prevScrollpos = window.pageYOffset;
var resolutionWidth = window.screen.width;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("bg").style.opacity = "0";
    } else {
      document.getElementById("bg").style.opacity = "1";
    }
    prevScrollpos = currentScrollPos;
  }
  
console.log(resolutionWidth)