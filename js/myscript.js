/*Include Header and Navbar
 $(function() {
    $(".menuBar").load("menuBar.html");
 });*/

 /*Include Footer
 $(function() {
    $(".footerBar").load("footer.html");
 });*/

 /*Onload*/
 $(function ()  {     
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
    
});

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
     var numSq = brdCol * brdRow;
     
    for (pos = 0; pos < numSq; pos++) {
        gameBoard[pos] = 0;
    }
    
    gameBoard[startPos] = 20;
    gameBoard[startPos-1] = 20; //TESTING!!!!!!!!
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
    ctx.fillStyle="#FF0000";
    ctx.globalAlpha=0.2;
    ctx.fillRect(yPos,xPos,blockSize,blockSize);  
    ctx.globalAlpha=1;
    ctx.fillRect(yPos-50,xPos,blockSize,blockSize);  
}



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
    
    //alert(reminder + " " + blockNum + " "  + brdCol + " " + row); //TESTING!!!!!!!!!!
    
    return row;
}

function getXPos(row) {
    var xPos;
    
    xPos = row * blockSize;
    
    return xPos;
}

function getCol(row, blockNum) {
    var firstRow, col;
    
    /*Determine column number for the block*/
    firstRow = 6 * row;   
    col = blockNum - firstRow;
    
    return col;
}

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
    redrawPos(0.2);
}

function drawPos(shade, pos) {
    var xPos, yPos, row, col;
    
    /*Get the block row and column number*/
    row = getRow(curPos);
    col = getCol(row, curPos);
    
    /*Get the block coordinate*/
    xPos = getXPos(row);
    yPos = getYPos(col);
    alert(xPos + "  " + yPos);
    
    /*Create the starting position*/
    ctx.fillStyle="#FF0000";
    ctx.globalAlpha=shade;
    ctx.fillRect(yPos,xPos,blockSize,blockSize);  
}

function redrawPos(shade) {
    var xPos, yPos, row, col;
    
    /*Get the block row and column number*/
    row = getRow(curPos);
    col = getCol(row, curPos);
    
    /*Get the block coordinate*/
    xPos = getXPos(row);
    yPos = getYPos(col);
    
    
    ctx.clearRect(yPos, xPos, blockSize, blockSize);
    /*ctx.fillStyle="#FF0000";
    ctx.globalAlpha=shade;
    ctx.fillRect(yPos,xPos,blockSize,blockSize);  */
    
    ctx.font = "50px Arial";
    ctx.globalAlpha=shade;
    ctx.fillText(gameBoard[curPos],yPos,xPos+50);
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
   
    ctx.font = "50px Arial";
    ctx.globalAlpha=0.5;
    ctx.fillText(blockList[0],yPos,xPos+50);
    
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































/*TESTING!!!!----MIGHT HAVE TO REMOVE!!!!!!!!*/
 function RowEnd(num) {
     var reminder = (int)(num % brdRow);
     
     if (reminder !== 0) {
         alert("Not end of the row" + num);
     }
     else if (reminder === 0) {
         alert("end of the row " + num);
     }
     else {
         alert("ERROR " + num);
     }
 }


/*TESTING!!!!!!!!*/
function testBoard() {
    /*Setting up starting position*/
    //ctx.fillText(gameBoard[numSq-2],50,55);
    ctx.fillRect(0,350,50,50);    // 	context.fillRect(x,y,width,height);
    ctx.fillRect(0,0,50,50);    // 	context.fillRect(x,y,width,height);
    ctx.fillStyle="#FF0000";
    ctx.fillRect(50,0,50,50);  
    
    ctx.fillStyle="#FF00F0";
    ctx.fillRect(100,0,50,50);  
    
    ctx.fillStyle="#FF0000";
    ctx.fillRect(150,0,50,50);  
    
    ctx.fillStyle="#000000";
    ctx.fillRect(200,0,50,50);  
    
    ctx.fillStyle="#FF0000";
    ctx.fillRect(250,0,50,50);  
    
    ctx.fillStyle="#000000";
    ctx.fillRect(300,0,50,50);  
    
    
    
    /*TESTING NEXT ROW*/
    ctx.fillStyle="#FF00F0";
    ctx.fillRect(0,50,50,50);    // 	context.fillRect(x,y,width,height);
    ctx.fillStyle="#FF00F0";
    ctx.fillRect(50,50,50,50);  
    
    ctx.fillStyle="#FF0FF0";
    ctx.fillRect(100,50,50,50);  
    
    ctx.fillStyle="#FFF000";
    ctx.fillRect(150,50,50,50);  
    
    ctx.fillStyle="#0F0000";
    ctx.fillRect(200,50,50,50);  
    
    ctx.fillStyle="#F00000";
    ctx.fillRect(250,50,50,50);  
    
    ctx.fillStyle="#0FF000";
    ctx.fillRect(300,50,50,50);  
    
    
    
    ctx.fillRect(0,100,50,50);    // 	context.fillRect(x,y,width,height);
    ctx.fillStyle="#FF0000";
    ctx.fillRect(50,100,50,50);  
    
    ctx.fillStyle="#FF00F0";
    ctx.fillRect(100,100,50,50);  
    
    ctx.fillStyle="#FF0000";
    ctx.fillRect(150,100,50,50);  
    
    ctx.fillStyle="#000000";
    ctx.fillRect(200,100,50,50);  
    
    ctx.fillStyle="#FF0000";
    ctx.fillRect(250,100,50,50);  
    
    ctx.fillStyle="#000000";
    ctx.fillRect(300,100,50,50);  
    
    
    /*TESTING NEXT ROW*/
    ctx.fillStyle="#FF00F0";
    ctx.fillRect(0,150,50,50);    // 	context.fillRect(x,y,width,height);
    ctx.fillStyle="#FF00F0";
    ctx.fillRect(50,150,50,50);  
    
    ctx.fillStyle="#FF0FF0";
    ctx.fillRect(100,150,50,50);  
    
    ctx.fillStyle="#FFF000";
    ctx.fillRect(150,150,50,50);  
    
    ctx.fillStyle="#0F0000";
    ctx.fillRect(200,150,50,50);  
    
    ctx.fillStyle="#F00000";
    ctx.fillRect(250,150,50,50);  
    
    ctx.fillStyle="#0FF000";
    ctx.fillRect(300,150,50,50);  
    
    
    
    ctx.fillRect(0,200,50,50);    // 	context.fillRect(x,y,width,height);
    ctx.fillStyle="#FF0000";
    ctx.fillRect(50,200,50,50);  
    
    ctx.fillStyle="#FF00F0";
    ctx.fillRect(100,200,50,50);  
    
    ctx.fillStyle="#FF0000";
    ctx.fillRect(150,200,50,50);  
    
    ctx.fillStyle="#000000";
    ctx.fillRect(200,200,50,50);  
    
    ctx.fillStyle="#FF0000";
    ctx.fillRect(250,200,50,50);  
    
    ctx.fillStyle="#000000";
    ctx.fillRect(300,200,50,50);  
}

function testStart1() {
    var xPos, yPos, row, col;
    curPos = 3;
    tempBlkPos = curPos + 1;
    
    /*Get the block row and column number*/
    row = getRow(curPos);
    col = getCol(row, curPos);
    
    /*Get the block coordinate*/
    xPos = getXPos(row);
    yPos = getYPos(col);
    
    /*Create the starting position*/
    ctx.fillStyle="#FF0000";
    ctx.globalAlpha=0.2;
    ctx.fillRect(yPos,xPos,blockSize,blockSize);  
    
    blockList[0] = 16;
    boardAry[curPos - 1] = 20;
    boardAry[curPos] = 20;
    
}

function testAll20() {
    blockList[0] = 20;
}