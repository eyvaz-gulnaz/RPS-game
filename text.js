var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var img3 = document.querySelector('.img3');
var yourScore = document.querySelector('.yourscore');
var main = document.querySelector(".main");
var compScore = document.querySelector('.compscore');
var btn = document.querySelector('.startgame');
var comp = document.querySelector(".comp");
var resultPart = document.querySelector(".result");
scores = document.querySelector('.scores')
var images = ["url(https://rps-game.netlify.app/img/rock.png)", "url(https://rps-game.netlify.app/img/paper.png)", "url(https://rps-game.netlify.app/img/scissors.png)"];
var win = 0;
var lose = 0;
var kolichestvoIqr = 5;

setTimeout(() => {
main.style.visibility = "visible";
btn.onclick = function startGame() {
    btn.style.display = "none";
img1.onclick = function () {
playGame(0);
};
img2.onclick = function () {
    playGame(1);
};
img3.onclick = function () {
    playGame(2);
};
}
function playGame(userChoice) {
kolichestvoIqr--;
 var compChoice = Math.floor(Math.random() * images.length);
comp.style.backgroundImage = images[compChoice];
if (userChoice === compChoice) {
    alert("Draw");
  } else if ((userChoice === 0 && compChoice === 2) ||
    (userChoice === 1 && compChoice === 0) ||
    (userChoice === 2 && compChoice === 1)) {
    alert("You Won");
    win++;
    yourScore.innerText = win;
} else {
    alert("Computer Won");
    lose++;
    compScore.innerText = lose;
}
if (kolichestvoIqr === 0) {
    showResult();
    btn.style.display = "block"
    btn.innerText = "Play Again";
    scores.style.visibility = "hidden";
btn.onclick = function startGame(){
    resultPart.style.backgroundImage = "none";
    btn.style.display = "none"
    kolichestvoIqr=5;
    win=0;
    lose=0
    yourScore.innerText = win;
    compScore.innerText = lose;
    scores.style.visibility = "visible";
} 
}
}
function showResult() {
    if (lose > win) {
    resultPart.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbf0-vv4iYE8g7yKKzUDzaEcqGPsbpSkvQIKE0l37po2PpczXqHrx3lk_nye-HlSzjNo&usqp=CAU)";
    } else if (lose < win) {
    resultPart.style.backgroundImage = "url(https://media.tenor.com/ESpfCb3gfuIAAAAC/you-win-winner.gif)";
    } else {
    alert("Tie");
    }
}
}, 2000);