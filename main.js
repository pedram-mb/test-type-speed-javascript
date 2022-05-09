const theTimer = document.querySelector("#kornometr");
const theTextArea = document.querySelector("#textareaId");
const theTextMatch = document.querySelector("#simpleText p").innerHTML;
const theTrueTextMatch = document.querySelector(".textarea-bor");
const theBtnReset = document.querySelector("#myBtn");

// variable
var timer = [0,0,0,0];
var timeRunning = false;
var interval;
const theFinallTExtMatch = theTextMatch.trim();

// start timer
function startTime(){
    let stringTime = zeroplus(timer[0])+":"+zeroplus(timer[1])+":"+zeroplus(timer[2]);
    theTimer.innerHTML = stringTime;

    timer[3]++;
    timer[0]=Math.floor((timer[3]/100)/60);
    timer[1]=Math.floor(timer[3]/100)-(timer[0]*60);
    timer[2]=Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));
}
// correct show timer
function zeroplus(time){
    if(time <= 9){
        time = "0"+time;
    }
    return time;
}
// run timer
function runTimer(){
    let textEnteredLentgth = theTextArea.value.length;

    if(textEnteredLentgth == 0 && !timeRunning){
        timeRunning = true;
        interval = setInterval(startTime , 10)
    }
}
// text check
function spellText(){
    let interText = theTextArea.value;
    let originTextMatch = theFinallTExtMatch.substring(0,interText.length);

    if(interText == theFinallTExtMatch){
        theTrueTextMatch.style.borderColor = "green";
        clearInterval(interval);
    }
    else{
        if(interText == originTextMatch){
            theTrueTextMatch.style.borderColor = "yellow";
        }
        else{
            theTrueTextMatch.style.borderColor = "red";
        }
    }
}
function reset(){
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timeRunning = false;
    theTextArea.value = "";
    theTimer.innerHTML = "00:00:00";
    theTrueTextMatch.style.borderColor = "gray";

}
// events
theTextArea.addEventListener("keypress" , runTimer);
theTextArea.addEventListener("keyup" , spellText);
theBtnReset.addEventListener("click" , reset);

// console.log(theTextMatch.trim());