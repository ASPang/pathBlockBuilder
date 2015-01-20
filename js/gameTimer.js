
var gameTimer;
var startClock;
var endGameFlag = true; //Game isn't running is true
var numGamePlay = 0;

/*Determine if the game should end*/
function gameOver(countDownTime) {
    var milSec = 1000;
    var numSq = brdCol * brdRow;

    /*Calculate time lapse*/
    var timeRemaining = Math.round(countDownTime - (new Date().getTime() - startClock) / milSec);
    
    /*Determine end of game*/
    if (timeRemaining > 0) {
        /*Show time elapse*/
        document.getElementById('countDown').innerHTML = "Time Remaining: " + timeRemaining + " seconds";
        document.getElementById('startButton').innerHTML = "New Game";
        endGameFlag = false;    //Set end game flag to false as the game is still running
    }
    else {
        /*Set game over*/
        clearInterval(gameTimer);
        endGameFlag = true; //Set end game flag to true
        
        /*Determine if player can go to the next level*/
        if ((areaCovered()/numSq > 0.4)) {
            document.getElementById('countDown').innerHTML = "Time Up - Go to next round";
            numGamePlay++;  //Update round counter
            document.getElementById('rounds').innerHTML = "Number of Rounds Passed: " + numGamePlay;
            document.getElementById('startButton').innerHTML = "Continue";
        }
        else {
            document.getElementById('countDown').innerHTML = "Game Over";
            document.getElementById('rounds').innerHTML = "Number of Rounds Passed: " + numGamePlay;
            numGamePlay = 0; //Update round counter
            document.getElementById('startButton').innerHTML = "New Game";
        }
    }      
}


function startTimer(countDownTime) {
    startClock = new Date().getTime();
    var numSq = brdCol * brdRow;
    var oneSec = 1000;
    
    /*Clear canvas*/
    clearCanvas();
    
    /*Determine if the user can go to next round*/
    if (numGamePlay == 0 || (areaCovered()/numSq < 0.4)) {
        /*New Game*/
        numGamePlay = 0; //Update round counter
        clearInterval(gameTimer);
        gameTimer = setInterval(function(){gameOver(countDownTime);}, oneSec);     
        initGame();
    }
    else if(numGamePlay < 4) {
        /*User can continue to next game with 30 to 50 seconds*/
        countDownTime -= numGamePlay * 10;
        clearInterval(gameTimer);
        gameTimer = setInterval(function(){gameOver(countDownTime);}, oneSec); 
        initGame();
    }
    else if(numGamePlay >= 4) {
        /*User can continue to next game with 20 seconds*/
        countDownTime = 20;
        clearInterval(gameTimer);
        gameTimer = setInterval(function(){gameOver(countDownTime);}, oneSec); 
        initGame();
    }
}

/*Convert Second to millisecond*/
function convertSecToMilSec(sec) {
    var milSec = 1000;
    
    return sec * milSec;
}

/*Convert millisecond to second*/
function convertMilSecToSec(milSec) {
    var sec = 1000;
    
    return milSec / sec;
}
