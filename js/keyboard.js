/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * 
 */

/*Initiate Keyboard listener even handler*/
window.addEventListener("keydown", keyDownEvent, false);

/*Keyboard event handler*/
function keyDownEvent(e) {
    var left = -1,
            right = 1,
            up = -brdCol,
            down = brdCol;
    var avl;    //Non-empty space
    var noBlock;    //Empty Space
    
    if (endGameFlag == true) {
        return false;
    }
    
    /*Determine which key is pressed*/
    switch (e.keyCode) {
        case 32:
            // Space key pressed
            placeBlock();
            break;
        case 37:
            // left key pressed
            lastKey = e.keyCode;
            removeTemp();
            
            /*Determine if it's possible to move left*/
            avl = checkNext(left, curPos);
            if (avl != 0) {
                makeMove(curPos + left);
            }
            
            /*Determine if a new block can be placed on the above current position*/
            if (chkLeftBorder() == false) {
                if (gameBoard[curPos + left] == 0) {
                    displayTemp(curPos + left);
                }
            }
            
            break;
        case 38:
            // up key pressed
            lastKey = e.keyCode;
            
            /*Remove old temporary block position*/
            removeTemp();
            
            avl = checkNext(up, curPos);
            if (avl != 0) {
                makeMove(curPos + up);
            }
            
            /*Determine if a new block can be placed on the above current position*/
            if (chkTopBorder() == false) {
                if (gameBoard[curPos + up] == 0) {
                    displayTemp(curPos + up);
                }
            }
            
            break;
        case 39:
            // right key pressed
            lastKey = e.keyCode;
            
            /*Remove old temporary block position*/
            removeTemp();
            
            /*Move up a square if possible*/
            avl = checkNext(right, curPos);
            if (avl != 0) {
                makeMove(curPos + right);
            }
            
            /*Determine if a new block can be placed on the right of the current position*/
            if (chkRightBorder() == false) {
                if (gameBoard[curPos + right] == 0) {
                    displayTemp(curPos + right);
                }                
            }
            
            break;
        case 40:
            // down key pressed
            lastKey = e.keyCode;
            
            /*Remove old temporary block position*/
            removeTemp();
            
            /*Move up a square if possible*/
            avl = checkNext(down, curPos);
            if (avl != 0) {
                makeMove(curPos + down);
            }
            
            /*Determine if a new block can be placed on the bottom of the current position*/
            if (chkBottomBorder() == false) {
                if (gameBoard[curPos + down] == 0) {
                    displayTemp(curPos + down);
                }
            }
            break;
        case 68:
            // D key pressed
            
            break;
        case 70:
            // F key pressed
            
            break;
    }
}

/*Determine if the user can move to an area on the canvas.
 * Return a variable:
 * 0 = not a valid move or there's no block for them to move to
 */
function checkNext(direction, position) {
    var newPos;
    var numSq = brdCol * brdRow + 1;
   
    /*Calculate the position in relation to the array*/
    newPos = position + direction;
    
    /*Determine if it's within the canvas*/
    if ((newPos < 0) || (newPos > numSq)) {
        return 0;
    }
    /*Determine if there's an object on the left side*/
    else if (gameBoard[newPos] == 0) {
        return 0;
    }

    return gameBoard[newPos];
}

/***Boarder detection for boards***/
/*Check top boarder*/
function chkTopBorder(newPos) {    
    /*Determine if it's within the canvas*/
    if (newPos < 0) {
        return true;
    }
    
    /*Within range*/
    return false;
}

/*Check bottom boarder*/
function chkBottomBorder(newPos) {
    /*Determine if it's out of range*/
    if (newPos > (brdCol * brdRow)) {
        return true;
    }
    
    /*Within range*/
    return false;
}

/*Check right boarder*/
function chkRightBorder() {
    var reminder;
    
    /*Determine if the block is located at the end of the row*/
    reminder = curPos % brdCol;
    
    /*Determine if it's out of range*/
    if (reminder == 0) {
        return true;
    }
    
    /*Within range*/
    return false;
}

/*Check left boarder*/
function chkLeftBorder() {
    var reminder;
    
    /*Determine if the block is located at the end of the row*/
    reminder = (curPos - 1) % brdCol;
    
    /*Determine if it's out of range*/
    if (reminder == 0) {
        return true;
    }
    
    /*Within range*/
    return false;
}

/*Place new block on the board*/
function placeBlock() {
    var check;
    var numSq = brdCol * brdRow;
    
    /*Check if the block can be placed*/
    check = avlBlock();
    
    if (check == true ) {
        /*Update the board array*/
        updateBoardAry();

        /*Display the new permanent block*/
        removeTemp();
        makeMove(tempBlkPos);

        /*Update block list*/
        updateBlockList();
        
        /*Update Score*/
        document.getElementById('countScore').innerHTML = "Area Covered: " + areaCovered() + "/" + numSq;
    }
}

function updateBoardAry() {
    gameBoard[tempBlkPos] = blockList[0];
}