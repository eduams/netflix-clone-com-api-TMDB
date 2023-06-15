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

  let header = document.getElementById("topimg");
  let toplogo = document.getElementById("toplogo");
  let overview = document.getElementById("overview");
  
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDNiY2FkNzNhNWMzMTQwMjQxZjg5MDkzNjQ2MDk4MSIsInN1YiI6IjY0N2I2OWM2Y2FlZjJkMDEzNjJiMWJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nHBWCz8ipknMv7An_AAUbe4v5uqoQxHznpZTX0SF78w'
      }
    };
    
    fetch('https://api.themoviedb.org/3/tv/45790/images', options)
      .then(response => response.json())
      .then(response => {
        topimg.setAttribute("src", "https://www.themoviedb.org/t/p/original/"+response.backdrops[0].file_path);
        toplogo.setAttribute("src", "https://www.themoviedb.org/t/p/original/"+response.logos[5].file_path);
      }
      )
      .catch(err => console.error(err));  

      fetch('https://api.themoviedb.org/3/tv/45790?language=pt-br', options)
      .then(response => response.json())
      .then(response => {
        overview.innerHTML = response.overview;
      })
      .catch(err => console.error(err));



  setTimeout(function(){
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

  let posters_horizontal_filme = document.getElementsByClassName('poster_horizontal_filme');

  for(i=0;i<posters_horizontal_filme.length;i++){

    let movieid = posters_horizontal_filme[i].id;


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
        document.getElementById(movieid).setAttribute("onmouseover", "mouseover_movie("+movieid+")");
        document.getElementById(movieid).setAttribute("onmouseleave", "mouseleave("+movieid+")");
      }
      )
      .catch(err => console.error(err));  
  }

  
}

function mouseover(movieid){
    oldsrc = document.getElementById(movieid).getAttribute("src");
    document.getElementById(movieid).setAttribute("src", "img/carrossel/loading_icon.gif");    
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
        document.getElementById(movieid).setAttribute("src", "https://www.themoviedb.org/t/p/original/"+response.backdrops[0].file_path);    
      }
      )
      .catch(err => console.error(err));    
}

function mouseover_movie(movieid){
    oldsrc = document.getElementById(movieid).getAttribute("src");
    document.getElementById(movieid).setAttribute("src", "img/carrossel/loading_icon.gif");    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDNiY2FkNzNhNWMzMTQwMjQxZjg5MDkzNjQ2MDk4MSIsInN1YiI6IjY0N2I2OWM2Y2FlZjJkMDEzNjJiMWJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nHBWCz8ipknMv7An_AAUbe4v5uqoQxHznpZTX0SF78w'
      }
    };
      fetch('https://api.themoviedb.org/3/movie/'+movieid+'/images', options)
      .then(response => response.json())
      .then(response => {
       document.getElementById(movieid).setAttribute("src", "https://www.themoviedb.org/t/p/original/"+response.backdrops[0].file_path);    
      }
      )
      .catch(err => console.error(err));    
}

function mouseleave(movieid){
    document.getElementById(movieid).setAttribute("src", oldsrc);
}