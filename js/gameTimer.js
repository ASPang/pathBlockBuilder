/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//var timeRemaining;
var gameTimer;
var startClock;
var endGameFlag = true; //Game isn't running is true


function gameOver(countDownTime) {
    //document.getElementById('countDown').innerHTML = "Time Remaining: "  + timeRemaining + " seconds";
    //document.getElementById('countDown').innerHTML = "timeRemaining";
    //alert("HERE");
    //timeRemaining -= 1;

    var milSec = 1000;

    //   var d = new Date();
    //document.getElementById("countDown").innerHTML = d.toLocaleTimeString();

    var timeRemaining = Math.round(countDownTime - (new Date().getTime() - startClock) / milSec);
    if (timeRemaining > 0) {
        document.getElementById('countDown').innerHTML = "Time Remaining: " + timeRemaining + " seconds";
        endGameFlag = false;    //Set end game flag to false as the game is still running
    }
    else {
        document.getElementById('countDown').innerHTML = "Time Remaining: " + 0 + " seconds";
        clearInterval(gameTimer);
        
        document.getElementById('countDown').innerHTML = "Game Over";
        endGameFlag = true; //Set end game flag to true
    }      
}

function startTimer2(countDownTime) {
    var myVar = setInterval(gameOver(0),1000);
}

function startTimer(countDownTime) {
     startClock = new Date().getTime();
    
    
    gameTimer = setInterval(function(){gameOver(countDownTime);}, 1000);
    //timeRemaining = countDownTime;
    //window.setInterval(gameOver(),convertSecToMilSec(countDownTime));
//    /window.setInterval(gameOver(),1000);
}

function convertSecToMilSec(sec) {
    var milSec = 1000;
    
    return sec * milSec;
}

function convertMilSecToSec(milSec) {
    var sec = 1000;
    
    return milSec / sec;
}
