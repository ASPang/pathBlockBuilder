/* 
 * Coder: Angela Pang
 * 
 * Assignment: CIS4500 Week 1 - Interlocking Block
 * Date: 2015/01/14
 * 
 * Filename: myscripts.js
 * 
 * Description:
 * This files contains the function that deals with starting the game and
 * updating the game windows.
 * 
 */

/*Start the game once the page has been loaded*/
 $(function ()  {     
    initGame();
});

/*Initialize the game*/
function initGame() {
    /*Preload images*/
     preloadBlockImg();
     
    /*Set up the board*/
    setupVar();
    
    /*Setup the board array*/
    blockAry();
    
    /*Display the board*/
    setupBoard();   //Display currently placed blocks
    
    /*Setup the list of blocks*/
    getBlockList();
    displayBlockList();
    displayTemp(tempBlkPos);  //Display temporary block
}

/*Initialize the canvas*/
function setupVar() {
     /*Setting up the canvas*/
    c = document.getElementById("gameCanvas");
    ctx = c.getContext("2d");
    
    cBlock = document.getElementById("blockCanvas");
    ctxBlock = cBlock.getContext("2d");
}
 
 /*Create an empty array for the board*/
 function blockAry() {
     var pos = 0;
     var numSq = brdCol * brdRow + 1;
     
    for (pos = 0; pos < numSq; pos++) {
        gameBoard[pos] = 0;
    }
    
    gameBoard[startPos] = 20;
 }
 
 /*Set up the inital Board*/
function setupBoard() {
    var xPos, yPos, row, col;
    
    /*Setting the current position on the board*/
    curPos = startPos;
    
    /*Get the block row and column number*/
    row = getRow(startPos);
    col = getCol(row, startPos);
    
    /*Get the block coordinate*/
    xPos = getXPos(row);
    yPos = getYPos(col);
    
    /*Create the starting position*/
    ctx.globalAlpha=0.6;
    ctx.drawImage(blockImg[gameBoard[startPos]], yPos, xPos, blockSize, blockSize);
}

/*Determine the row where the block is*/
function getRow(blockNum) {
    var reminder, row;
    
    /*Determine if the block is located at the end of the row*/
    reminder = blockNum % brdCol;
    
    /*Get the row number*/
    if (reminder != 0) {
        row = parseInt(blockNum / brdCol );
    }
    else {
        row = parseInt(blockNum / brdCol  - 1);
    }
        
    return row;
}

/*Determine the x-pixel coordinate of the block*/
function getXPos(row) {
    var xPos;
    
    xPos = row * blockSize;
    
    return xPos;
}

/*Determines the column where the block is in*/
function getCol(row, blockNum) {
    var firstRow, col;
    
    /*Determine column number for the block*/
    firstRow = 6 * row;   
    col = blockNum - firstRow;
    
    return col;
}

/*Determine the y-pixel coordinate of the block*/
function getYPos(col) {
    var yPos;
    
    /*Getting the y coordinate pixel location of the block*/
    yPos = col * blockSize - blockSize;
    
    return yPos;
}

function makeMove(newPos) {
    /*Remove old position*/
    redrawPos(1.0);
    
    /*Draw new position*/
    curPos = newPos;
    redrawPos(0.6);
}

function redrawPos(shade) {
    var xPos, yPos, row, col;
    
    /*Get the block row and column number*/
    row = getRow(curPos);
    col = getCol(row, curPos);
    
    /*Get the block coordinate*/
    xPos = getXPos(row);
    yPos = getYPos(col);
    
    /*Remove image*/
    ctx.clearRect(yPos, xPos, blockSize, blockSize);
    
    /*Added faded image*/
    ctx.globalAlpha=shade;    
    ctx.drawImage(blockImg[gameBoard[curPos]], yPos, xPos, blockSize, blockSize);
}

/*Display possible new blocks*/
function displayTemp(pos) {
    var xPos, yPos, row, col;
    
    /*Get the block row and column number*/
    row = getRow(pos);
    col = getCol(row, pos);
    
    /*Get the block coordinate*/
    xPos = getXPos(row);
    yPos = getYPos(col);
   
    ctx.globalAlpha=0.2;
    
    ctx.drawImage(blockImg[blockList[0]], yPos, xPos, blockSize, blockSize);
    
    tempBlkPos = pos;
}

function removeTemp() {
    var xPos, yPos, row, col;
    if (gameBoard[tempBlkPos] == 0) {
        /*Get the block row and column number*/
        row = getRow(tempBlkPos);
        col = getCol(row, tempBlkPos);

        /*Get the block coordinate*/
        xPos = getXPos(row);
        yPos = getYPos(col);

        /*Clear old block*/
        ctx.clearRect(yPos, xPos, blockSize, blockSize);
    }
}

/*Clear entire canvas*/
function clearCanvas() {
    ctx.clearRect(0, 0,  canvasWidth(), canvasHeight());
}

/*Canvas Width*/
function canvasWidth() {
    return brdCol * blockSize;
}

/*Canvas Height*/
function canvasHeight() {
    return brdRow * blockSize;
}

