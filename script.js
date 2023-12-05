let timerDisplay = document.querySelector(".timerDisplay");
let stopBtn = document.getElementById("stopBtn");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");

let msec = 0;
let sec = 0;
let mins = 0;
let timerID = null;

startBtn.addEventListener('click', ()=>{
  if (timerID !== null){
    clearInterval(timerID);
  }
  timerID = setInterval(startTimer, 0)
})

stopBtn.addEventListener('click', ()=>{
  clearInterval(timerID);
})

resetBtn.addEventListener('click', ()=>{
  clearInterval(timerID);
  timerDisplay.innerHTML = `00 : 00 : 00`;
  mins = sec = msec = 0;
})

function startTimer(){
  msec++
  if (msec === 100){
    msec = 0;
    sec++;
    if (sec === 60){
      sec = 0;
      mins++
    }
  }

  let msecString = msec<10 ? `0${msec}` : msec;
  let secString = sec<10 ? `0${sec}` : sec;
  let minsString = mins<10 ? `0${mins}` : mins;

  timerDisplay.innerHTML = `${minsString} : ${secString} : ${msecString}`
}