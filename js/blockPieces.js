/* 
 * Coder: Angela Pang
 * 
 * Assignment:
 * Date:
 * 
 * Description:
 * 
 */


/*Generates a new block*/
function genBlock(){
    var type;
    
    /*Generate a new block type (corner, striaght, cross, three)*/
    type = genNumRange(1, 4); 

    /*Generate a new block for that particular type*/
    switch (type) {
        case 1: 
            //Straight
            type = genNumRange(16, 17);   //Math.floor((Math.random() * 2) + 16);
            break;
        case 2:
            type = genNumRange(11, 14)    //Math.floor((Math.random() * 4) + 11); 
            break;
        case 3:
            type = genNumRange(21, 24)    //Math.floor((Math.random() * 4) + 21); 
            break;
        case 4:
            type = 20;
            break;
    }

    return type;
}

/*Generates a number depending on the range*/
function genNumRange(min, max) {
    var num, newMax;
    
    newMax = max - min + 1;
            
    num = Math.floor((Math.random() * newMax) + min);
    
    return num;
}

/*Generate the first set of blocks*/
function getBlockList() {
    var i;
    
    /*Get the first set of blocks*/
    for (i = 0; i < brdCol; i++) {
        blockList[i] = genBlock();
    }
    
    /*Set the first temporary position*/
    tempBlkNum = blockList[0];  //TESTING!!!!!!!!!!----MIGHT NEED TO BE REMOVED
    tempBlkPos = curPos + 1;
}

/*Display the available blocks*/
function displayBlockList() {
    var i, pos = 0; 
    
    for (i = brdCol-1; i >= 0; i--) {
        ctxBlock.font = "45px Arial";
        ctxBlock.fillText(blockList[i],pos, blockSize);
        pos += blockSize;
    }
}

/*Determine if a block can be connected*/
function avlBlock() {
    var left = -1,
            right = 1,
            up = -brdCol,
            down = brdCol;
    var blockType;
    var space, check;
    var keyRight = 39, keyLeft = 37, keyUp = 38, keyDown = 40;
    
    /*Get the type of block*/
    blockType = gameBoard[curPos];
    
    /*Determine available shape*/
    /*Check down*/
    if(keyDown == lastKey) { 
        if (blockType == 10 || blockType == 14 || blockType == 16 || blockType == 20
                || blockType == 21 || blockType == 23 || blockType == 24) {
            /*Check down*/
            if (upBlock(blockList[0]) == true) {
                return true;
            }

        }   
    }
    
    /*Check Right*/
    if(keyRight == lastKey) { 
        if (blockType == 10 || blockType == 12 || blockType == 17 || blockType == 20
                || blockType == 21 || blockType == 22 || blockType == 24) {
            /*Check left*/
            if (leftBlock(blockList[0]) == true) {
                return true;
            }
        }
    }
    
    /*if (blockType == 12 || blockType == 13 || blockType == 16 || blockType == 20
            || blockType == 21 || blockType == 22 || blockType == 23) {
    */
    /*Check Up*/
    if(keyUp == lastKey) { 
        if (upBlock(blockType) == true) {
             /*Check the possible new block*/
             if (downBlock(blockList[0]) == true) {
                 /*The blocks can link*/
                 return true;
             }
        }
    
    }
    
    /*Check Left*/
    if(keyLeft == lastKey) { 
        if (blockType == 13 || blockType == 14 || blockType == 17 || blockType == 20
                || blockType == 22 || blockType == 23 || blockType == 24) {
            /*Check Right*/
            //check = curPos + left;
            if (rightBlock(blockList[0]) == true) {
                return true;
            }
        }
    }
    
    /*
    space = gameBoard[check];
        
    if (space == 0) {
        /*Display the block on the board
        
    }*/
    
    return false;
}

/*Determine if the block has a up path*/
function upBlock(blockType) {
    /*Find matching block that has a top path*/
    if (blockType == 12 || blockType == 13 || blockType == 16 || blockType == 20
            || blockType == 21 || blockType == 22 || blockType == 23) {
        return true;
    }
    
    /*Not a matching block*/
    return false;
}

/*Determine if the block has a down path*/
function downBlock(blockType) {
    /*Find matching block that has a down path*/
    if (blockType == 10 || blockType == 14 || blockType == 16 || blockType == 20
            || blockType == 21 || blockType == 23 || blockType == 24) {
        return true;
    }
    
    /*Not a matching block*/
    return false;
}

/*Determine if the block has a left path*/
function leftBlock(blockType) {
    /*Find matching block that has a left path*/
    if (blockType == 13 || blockType == 14 || blockType == 17 || blockType == 20
            || blockType == 22 || blockType == 23 || blockType == 24) {
        return true;
    }
    
    /*Not a matching block*/
    return false;
}

/*Determine if the block has a right path*/
function rightBlock(blockType) {
    /*Find matching block that has a right path*/
    if (blockType == 10 || blockType == 12 || blockType == 17 || blockType == 20
            || blockType == 21 || blockType == 22 || blockType == 24) {
        return true;
    }
    
    /*Not a matching block*/
    return false;
}