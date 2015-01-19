/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*Generates a new block*/
function genBlock(){
    var type;
    
    /*Generate a new block type (corner, striaght, cross, three)*/
    type = Math.floor((Math.random() * 4) + 1); 

    /*Generate a new block for that particular type*/
    switch (type) {
        case 1: 
            //Striaght
            type = Math.floor((Math.random() * 2) + 16);
            break;
        case 2:
            type = Math.floor((Math.random() * 4) + 11); 
            break;
        case 3:
            type = Math.floor((Math.random() * 4) + 21); 
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
    
    newMax = min - max + 1;
            
    num = Math.floor((Math.random() * newMax) + min)
    
    return num;
}

/*Generate the first set of blocks*/
function getBlockList() {
    var i;
    
    for (i = 0; i < brdCol; i++) {
        blockAry[i] = genBlock();
    }
}

/*Display the available blocks*/
function displayBlockList() {
    var i, pos = 0; 
    
    for (i = brdCol-1; i >= 0; i--) {
        ctxBlock.font = "45px Arial";
        ctxBlock.fillText(blockAry[i],pos, blockSize);
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
    
    /*Get the type of block*/
    blockType = gameBoard[curPos];
    
    /*Determine available shape*/
    if (blockType == 10 || blockType == 14 || blockType == 16 || blockType == 20
            || blockType == 21 || blockType == 23 || blockType == 24) {
        /*Check down*/
        
    }   
    if (blockType == 10 || blockType == 12 || blockType == 17 || blockType == 20
            || blockType == 21 || blockType == 22 || blockType == 24) {
        /*Check right*/
    }
    
    if (blockType == 12 || blockType == 13 || blockType == 16 || blockType == 20
            || blockType == 21 || blockType == 22 || blockType == 23) {
        /*Check Up*/
        
    }
    
    if (blockType == 13 || blockType == 14 || blockType == 17 || blockType == 20
            || blockType == 22 || blockType == 23 || blockType == 24) {
        /*Check left*/
        check = curPos + left;
    }
    
    space = gameBoard[check];
        
    if (space == 0) {
        /*Display the block on the board*/
        
    }        
}


function cornerBlock() {
    
}