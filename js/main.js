var prevScrollpos = window.pageYOffset;
var resolutionWidth = window.screen.width;
var oldsrc;

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

window.onload = function postersload(){
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
  },1500);

  let posters = document.getElementsByClassName('poster');

  for(i=0;i<posters.length;i++){

    let movieid = posters[i].id;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDNiY2FkNzNhNWMzMTQwMjQxZjg5MDkzNjQ2MDk4MSIsInN1YiI6IjY0N2I2OWM2Y2FlZjJkMDEzNjJiMWJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nHBWCz8ipknMv7An_AAUbe4v5uqoQxHznpZTX0SF78w'
      }
    };
    
    fetch('https://api.themoviedb.org/3/tv/'+movieid+'/images', options)
      .then(response => response.json())
      .then(response => {
        document.getElementById(movieid).setAttribute("src", "https://image.tmdb.org/t/p/w500/"+response.posters[0].file_path);
      }
      )
      .catch(err => console.error(err));  
  }

  let posters_horizontal = document.getElementsByClassName('poster_horizontal');

  for(i=0;i<posters_horizontal.length;i++){

    let movieid = posters_horizontal[i].id;

    console.log(movieid);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDNiY2FkNzNhNWMzMTQwMjQxZjg5MDkzNjQ2MDk4MSIsInN1YiI6IjY0N2I2OWM2Y2FlZjJkMDEzNjJiMWJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nHBWCz8ipknMv7An_AAUbe4v5uqoQxHznpZTX0SF78w'
      }
    };
    
    fetch('https://api.themoviedb.org/3/tv/'+movieid+'/images', options)
      .then(response => response.json())
      .then(response => {
        document.getElementById(movieid).setAttribute("onmouseover", "mouseover("+movieid+")");
        document.getElementById(movieid).setAttribute("onmouseleave", "mouseleave("+movieid+")");
      }
      )
      .catch(err => console.error(err));  
  }
}

function mouseover(movieid){
  oldsrc = document.getElementById(movieid).getAttribute("src");
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDNiY2FkNzNhNWMzMTQwMjQxZjg5MDkzNjQ2MDk4MSIsInN1YiI6IjY0N2I2OWM2Y2FlZjJkMDEzNjJiMWJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nHBWCz8ipknMv7An_AAUbe4v5uqoQxHznpZTX0SF78w'
    }
  };
    fetch('https://api.themoviedb.org/3/tv/'+movieid+'/images', options)
    .then(response => response.json())
    .then(response => {
      moviefoto = response.backdrops[0].file_path;
      document.getElementById(movieid).setAttribute("src", "https://www.themoviedb.org/t/p/original/"+response.backdrops[0].file_path);
    }
    )
    .catch(err => console.error(err));  
}

function mouseleave(movieid){
  document.getElementById(movieid).
  document.getElementById(movieid).setAttribute("src", oldsrc);
}