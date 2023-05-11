let countDown = document.getElementById("countDown");
let sessionName = document.getElementById("sessionName");
let sessionTime = document.getElementById("sessionTime");
let breakTime = document.getElementById("breakTime");
let sessionIncrease = document.getElementById("sIncrease");
let sessionDecrease = document.getElementById("sDecrease");
let breakIncrease = document.getElementById("bIncrease");
let breakDecrease = document.getElementById("bDecrease");
let startPause = document.getElementById("startPause");
let reset = document.getElementById("reset");
let sessionTimeNum = 0;
let breakTimeNum = 0;
let time = 0;
let isPaused=false;
let flag=true;
let pausedTime=0;
let sessionCountNum=0;
let timeString = "";
let sI;
let tO;
sessionIncrease.addEventListener('click', () => {
    sessionTimeNum++;
    sessionTime.innerHTML = sessionTimeNum + " min";
});
sessionDecrease.addEventListener('click', () => {
    if (sessionTimeNum > 0)
        sessionTimeNum--;
    sessionTime.innerHTML = sessionTimeNum + " min";
});

breakIncrease.addEventListener('click', () => {
    breakTimeNum++;
    breakTime.innerHTML = breakTimeNum + " min";
});
breakDecrease.addEventListener('click', () => {
    if (breakTimeNum > 0)
        breakTimeNum--;
    breakTime.innerHTML = breakTimeNum + " min";
});

startPause.addEventListener('click', () => {
    if((startPause.innerHTML==="Start"&&sessionTimeNum)){
    sessionIncrease.disabled = true;
    sessionDecrease.disabled = true;
    breakIncrease.disabled = true;
    breakDecrease.disabled = true;
    startPause.innerHTML="Pause";
    timeOut(isPaused);
    }
    else if(startPause.innerHTML==="Pause"){
    startPause.innerHTML="Start";
    clearInterval(sI);
    clearTimeout(tO);
    isPaused=true;
    }
});

reset.addEventListener('click', () => {
    time = 0;
    sessionTimeNum = 0;
    breakTimeNum = 0;
    sessionCountNum=0;
    timeString = "";
    isPaused=false;
    flag=true;
    pausedTime=0;
    sessionName.innerHTML=""
    countDown.innerHTML = "00 : 00"
    countDown.style.color="#fff";
    sessionTime.innerHTML = sessionTimeNum + " min";
    breakTime.innerHTML = breakTimeNum + " min";
    startPause.innerHTML="Start";
    clearInterval(sI);
    clearTimeout(tO);
    sessionIncrease.disabled = false;
    sessionDecrease.disabled = false;
    breakIncrease.disabled = false;
    breakDecrease.disabled = false;

});
function timeOut(isPaused) {
    if(!isPaused){
    if (flag){
        time = sessionTimeNum * 60;
        sessionName.innerHTML="Session "+(++sessionCountNum);
        countDown.style.color="#009288";
    }
    else{
        time = breakTimeNum * 60;
        sessionName.innerHTML="Break!";
        countDown.style.color="#dd501d";
    }
    }
    else{
        time=pausedTime;
        isPaused=false;
    }
    sI = setInterval(() => {
        pausedTime=time;
        time--;
        setTime(time);
    }, 100);

    tO = setTimeout(() => {
        clearInterval(sI);
        flag=!flag;
        timeOut(isPaused);
    }, time * 100);
}
function setTime(time) {
    if (Math.floor(time / 60) < 10)
        timeString = "0";
    timeString += Math.floor(time / 60) + " : ";
    if ((time % 60) < 10)
        timeString += "0";
    timeString += time % 60;
    countDown.innerHTML = timeString;
}


