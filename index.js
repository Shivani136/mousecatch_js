var last = 0;
var score = 0;
setInterval(myInterval, 600);


function myInterval() {

    var image = document.createElement("img");
    image.setAttribute("src", "img/rat.png");
    image.setAttribute("onclick", "clicked();");
    var arr = ['rab1','rab2','rab3','rab4','rab5','rab6','rab7','rab8','rab9'];

    var random = Math.floor(Math.random() * 9);
    document.getElementById(arr[last]).innerHTML = '';

    document.getElementById(arr[random]).appendChild(image);
    last=random;
}

function clicked(){
    score += 10;
    document.getElementById('score').innerHTML = score;
    document.getElementById('showScore').innerHTML = 'Your score is '+ score;
}

var timeleft = 50;
var downloadTimer = setInterval(function(){
  
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "Finished";
    document.getElementById("result").style.display = "block";
    document.getElementById("game").style.display = "none";
    getCookie(score);
    setCookie(score);
  } else {
    document.getElementById("time").innerHTML = timeleft + " seconds remaining";
    document.getElementById('highScore').innerHTML = document.cookie;
  }
  timeleft -= 1;
}, 1000);


// To set href in button to redirect Index page
function menu() {
    location.replace("index1.html");
}
function getCookie(score){
  
    var highScore = document.cookie.split("=")[1];
    if(highScore==undefined)
    {
      highScore=0;
    }
    if(score > highScore){
      console.log("you set a new high score");
      document.getElementById('resultHScore').innerHTML = 'Congratulation You made High Score ' +score;
    }
  }
  
  function setCookie(score) {
    // console.log('heyy');
    var highScore = document.cookie.split("=")[1];
    if(highScore==undefined)
    {
      highScore=0;
    }
    if(score > highScore){
    document.cookie= 'highScore=' +score;
     }
      console.log(document.cookie);
      document.getElementById('highScore').innerHTML = document.cookie;
  }
  