

// board key board is 10 wide by 20 cells high 
// 0 == open space
// 1 == o-piece (square)
// 2 == i-piece
// 4 == s-piece
// 5 == z-piece
// 6 == l-piece
// 7 == j-piece
// 8 == t-piece

var currentBoard = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 2, 2, 2, 2, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	];

// var board = [
// 		[0, 1, 1, 0, 0, 0, 0, 0, 2, 0],
// 		[0, 1, 1, 0, 0, 0, 0, 0, 2, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
// 		[0, 0, 3, 3, 0, 4, 4, 0, 0, 0],
// 		[0, 3, 3, 0, 0, 0, 4, 4, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 6, 0, 0, 0, 0, 0, 5, 0],
// 		[0, 0, 6, 6, 6, 0, 5, 5, 5, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 7, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 7, 7, 7, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// 	];

var speed=200;
var singles=0;
var doubles=0;
var triples=0;
var tetrises=0;
var pieceCoors = [[3,0],[4,1],[3,1],[4,0]];
var pieceClass = `oPiece`;



$(document).ready(function(){
	$('#gameBoard').html(buildBoardStr(currentBoard));

//console.log(detectClearedRows(clearedBoard));
//clearDetectedRows(board, [0]);
//$('#gameBoard').html(buildBoardStr(board));
	

	//setInterval(, speed);

		document.onkeydown = function(e){
		//keyPress(e);

		moveGame();

	}

});

function removeCurPiece(){
	currentBoard[pieceCoors[0][1]][pieceCoors[0][0]] = 0;
	currentBoard[pieceCoors[1][1]][pieceCoors[1][0]] = 0;
	currentBoard[pieceCoors[2][1]][pieceCoors[2][0]] = 0;
	currentBoard[pieceCoors[3][1]][pieceCoors[3][0]] = 0;
}

function insertCurPiece(){

	currentBoard[ pieceCoors[0][1] ] [pieceCoors[0][0]] = -1;
	currentBoard[ pieceCoors[1][1] ] [pieceCoors[1][0] ] = -1;
	currentBoard[ pieceCoors[2][1] ] [pieceCoors[2][0] ] = -1;
	currentBoard[ pieceCoors[3][1] ] [pieceCoors[3][0] ] = -1;


}

function moveGame(){
	
	removeCurPiece();

	pieceCoors = [
	[pieceCoors[0][0], pieceCoors[0][1]+1],
	[pieceCoors[1][0], pieceCoors[1][1]+1],
	[pieceCoors[2][0], pieceCoors[2][1]+1],
	[pieceCoors[3][0], pieceCoors[3][1]+1],
	];

	insertCurPiece();

	

	$('#gameBoard').html(buildBoardStr(currentBoard));

	console.log(detectStopMove(currentBoard, pieceCoors));
//console.log(pieceCoors);
	//detectStopMove(board, pieceCoors);
}

function detectStopMove(board, pieceCoors){

//console.log(pieceCoors);
console.log(board);

console.log(`${pieceCoors[1][0]} ${pieceCoors[1][1]+1}`);
console.log(`${pieceCoors[2][0]} ${pieceCoors[2][1]+1}`);
	if ( pieceCoors[0][1] == 19 || pieceCoors[1][1] == 19 || pieceCoors[2][1] == 19 || pieceCoors[3][1] == 19){
		return true;
	}


	//currentBoard[ pieceCoors[0][1] ] [pieceCoors[0][0]]



 	else if ( board[pieceCoors[0][0] ][ pieceCoors[0][1]+2 ] > 0 ){
 		return true;
 	}

	else if ( board[pieceCoors[1][0]][pieceCoors[1][1]+2] > 0 ){
		return true;
	}
	else if ( board[pieceCoors[2][0]][pieceCoors[2][1]+2] > 0 ){
		return true;
	}
	else if ( board[pieceCoors[3][0]][pieceCoors[3][1]+2] > 0 ){
		return true;
	}
	
	return false;


}

function detectClearedRows(board){
	var clearedRows=[];
	var rowCheck;

	for(var i=0; i<board.length;i++){
		rowCheck=true;
		for(var c=0;c<board[i].length;c++){
			if(board[i][c]==0){
				rowCheck=false;
				break;
			}
		}
		if(rowCheck){
			clearedRows.push(i);
		}
	}
	
	if(clearedRows.length==1){singles+=1;}
	else if(clearedRows.length==2){doubles+=1;}
	else if(clearedRows.length==3){triples+=1;}
	else if(clearedRows.length==4){tetrises+=1;}

	return clearedRows;
}

function clearDetectedRows(board, arrCleared){
	for(var i=0; i<arrCleared.length; i++){
		board[ arrCleared[i] ] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}
}

function buildBoardStr(board){
	var boardHTMLstr=``;

	for(var i=0; i<board.length;i++){
		boardHTMLstr += `<div class='row'>`;

		for(var c=0;c<board[i].length;c++){
			if(board[i][c] == 0){
				boardHTMLstr += `<div class='openSpace'></div>`
			}
			else if (board[i][c] == 1){
				boardHTMLstr += `<div class='oPiece'></div>`
			}
			else if (board[i][c] == 2){
				boardHTMLstr += `<div class='iPiece'></div>`
			}
			else if (board[i][c] == 3){
				boardHTMLstr += `<div class='sPiece'></div>`
			}
			else if (board[i][c] == 4){
				boardHTMLstr += `<div class='zPiece'></div>`
			}
			else if (board[i][c] == 5){
				boardHTMLstr += `<div class='lPiece'></div>`
			}
			else if (board[i][c] == 6){
				boardHTMLstr += `<div class='jPiece'></div>`
			}
			else if (board[i][c] == 7){
				boardHTMLstr += `<div class='tPiece'></div>`
			}
			else if (board[i][c] == -1){
				boardHTMLstr += `<div class=${pieceClass}></div>`
			}
			else{
				console.log(`error building board`);
			}
		}
		boardHTMLstr += `</div>`;
	}
	return boardHTMLstr;
}

function keyPress(e){
	console.log(`key pressed code: ${e.keyCode}`);

	//left
	if(e.keyCode == 37 ){
	
	}
	//right
	else if(e.keyCode == 39 ){

	}
	//up
	else if(e.keyCode == 38){

	}
	//down
	else if(e.keyCode == 40){

	}
}