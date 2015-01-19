/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var c;  //Canvas variable
var ctx;    //Canvas Context
var cBlock;     //Block canvas
var ctxBlock;   //Block context

var gameBoard = []; //Array for the board game
var blockList = [];  //Array for the blocks

var blockSize = 50; //Blocksize in pixels
var brdCol = 6; //Number of columns
var brdRow = 8; //Number of rows 
var startPos = 46;  //Starting Position
var curPos; //Current position on the board
var oldPos;

var lastKey = 39;
var tempBlkNum; //Might not need
var tempBlkPos;