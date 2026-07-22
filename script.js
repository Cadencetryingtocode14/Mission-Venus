// Begin Mission Button

document
.getElementById("startBtn")
.addEventListener("click", function(){

document
.getElementById("briefing")
.scrollIntoView({
behavior:"smooth"
});

});


// Progress

let progress = 0;


// Grab everything

const playButtons =
document.querySelectorAll(".play-btn");

const videos =
document.querySelectorAll(".mission-video");

const collectButtons =
document.querySelectorAll(".collect-btn");


// PLAY VIDEO

for(let i=0;i<playButtons.length;i++){

playButtons[i].addEventListener("click",function(){

playButtons[i].style.display="none";

videos[i].style.display="block";

videos[i].play();

});

}


// VIDEO FINISHED

for(let i=0;i<videos.length;i++){

videos[i].addEventListener("ended",function(){

collectButtons[i].style.display="inline-block";

});

}


// COLLECT DATA

for(let i=0;i<collectButtons.length;i++){

collectButtons[i].addEventListener("click",function(){

collectButtons[i].disabled=true;

collectButtons[i].innerHTML="✓ Data Collected";

progress++;

updateProgress();

});

}



// PROGRESS BAR

function updateProgress(){

let percent = progress/3*100;

document
.getElementById("progressFill")
.style.width = percent + "%";

document
.getElementById("progressText")
.innerHTML =
progress + " / 3 Data Logs Collected";

if(progress===3){

startTimer();

}

}



// TIMER

function startTimer(){

let time = 180;

let timer =
document.getElementById("timer");

let countdown = setInterval(function(){

let minutes =
Math.floor(time/60);

let seconds =
time%60;

if(seconds<10){

seconds="0"+seconds;

}

timer.innerHTML =
minutes+":"+seconds;

time--;

if(time<0){

clearInterval(countdown);

timer.innerHTML="Mission Complete";

}

},1000);

}