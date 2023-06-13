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

//Função que roda automático e esconde a imagem do topo depois de 1 segundo e pega o vídeo da API
window.onload = function playonstart(){
  setTimeout(function(){
    let header = document.getElementById("topimg");
    header.style.opacity = "1";
    header.remove();
    let headerdiv = document.getElementById("header-media");
    let youtubeIframe = document.createElement("iframe");

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDNiY2FkNzNhNWMzMTQwMjQxZjg5MDkzNjQ2MDk4MSIsInN1YiI6IjY0N2I2OWM2Y2FlZjJkMDEzNjJiMWJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nHBWCz8ipknMv7An_AAUbe4v5uqoQxHznpZTX0SF78w'
      }
    };
    
    fetch('https://api.themoviedb.org/3/tv/45790/videos?language=en-US', options)
      .then(response => response.json())
      .then(response => {
        youtubeIframe.setAttribute("src", "https://www.youtube.com/embed/"+response.results[0].key+"?autoplay=1&mute=1");
        youtubeIframe.setAttribute("id","topimg");
        headerdiv.appendChild(youtubeIframe);
      })
      .catch(err => console.error(err));  
  },1000); 
}
