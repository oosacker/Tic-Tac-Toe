/**
 * TIC-TAC-TOE PROGRAM BY NATSUKI HASEGAWA
 * September 20th 2019
 * SWEN 502 / MSwDev
 */

/* Get array of boxes from the web page */
let boxes = document.querySelectorAll('.box');

/* For showing the result of previous game at bottom of screen */
let result = document.querySelector('#result');
result.innerHTML = "None";

/* Colors of the squares */
let player1Color = 'orange';
let player2Color = 'blue';
let neutralColor = 'lightgrey';

/* Top message area */
let msg = document.querySelector('#msg');

/* Mode (human/CPU) selector box */
let mode_selector = document.querySelector('#mode-select');
let mode = mode_selector.value;

/* Some flags to determine game state */
let gameState = false; 	// False = player1, true = player2
let cpu_turn = false;	// CPU's turn or not

/* Random numbers (array indexes) for the CPU's turn */
let randX = 0;
let randY = 0;

/* Box class representing the squares */
class box{
	constructor(name, state){
		this.name = name;	// box-a, box-b etc
		this.state = state;	// 0, 1, 2 (neutral, player1, player2)
	}
	getName(){
		return this.name;
	}
	getState(){
		return this.state;
	}
	setState(newState){
		this.state = newState;
	}
}

/* 2d array of boxes representing the game grid */
let boxArray = [
	[new box('box-a', 0) , new box('box-b', 0), new box('box-c', 0)],
	[new box('box-d', 0) , new box('box-e', 0), new box('box-f', 0)],
	[new box('box-g', 0) , new box('box-h', 0), new box('box-i', 0)],
];

/* Set event listener for the box clicks */
boxes.forEach(element => {
	element.addEventListener('click', e=> {
			boxClickHandler(element);
})})

/* Reset button */
btn = document.querySelector('#reset-btn');
btn.addEventListener('click', e=>{
	resetGame();
})

/* For resetting the game */
function resetGame(){
	boxes.forEach(element => {
		element.style.backgroundColor = neutralColor;
	})
	resetArray();
	gameState = false;
	msg.innerHTML = 'Game reset!';
}

/* Even listener for the mode select mox */
mode_selector.addEventListener('change', function() {
	selectMode();
	resetGame();
})

/* Mode selector */
function selectMode(){
	mode = mode_selector.value;
	console.log(mode);
}

/* Need to reset the array and grid before game starts (must be declared after the function definition!) */
resetArray();

/* Event listener for the box clicks */
function boxClickHandler(input){

	/* Check if game is over */
	if( isArrayFull() || checkWin() ){
		alert('Game over!');
		msg.innerHTML = 'Game over!';
		return;
	}

	/* Player1's turn */
	if(!gameState) {

		/* Display player1 or player2 turn */
		displayStatus();

		/* Prevent clicking on a already played square */
        if(input.style.backgroundColor === player1Color ||
            input.style.backgroundColor === player2Color){
            msg.innerHTML = 'You can\'t click there!';
            return;
        }
        updateArray(input.id);
        setSquareColor(input.id, player1Color);
		gameState = true;

		/* CPU's turn  */
        if(mode === 'cpu'){
        	cpu_turn = true;
			displayStatus();
            chooseBox();
            updateArray(boxArray[randX][randY].getName());
            setSquareColor(boxArray[randX][randY].getName(), player2Color);
            gameState = false;
        }
		cpu_turn = false;
	}

	/* Player2's turn */
	else{

		/* Player2 is human */
        if (mode === 'human'){
			displayStatus();

			/* Prevent clicking on a already played square */
            if(input.style.backgroundColor === player1Color ||
                input.style.backgroundColor === player2Color){
                msg.innerHTML = 'You can\'t click there!';
                return;
            }
            setSquareColor(input.id, player2Color);
            updateArray(input.id);
        }
        gameState = false;
	}

	/* Check if game is over */
	if(checkWin() === 1){
		alert('Player 1 wins');
		msg.innerHTML = 'Player 1 wins!';
		result.innerHTML = 'Player 1 won';
	}
	else if(checkWin() === 2){
		alert('Player 2 wins');
		msg.innerHTML = 'Player 2 wins!';
		result.innerHTML = 'Player 2 won';
	}
	else if(checkWin() === 0 && isArrayFull()){
		alert('Draw');
		msg.innerHTML = 'Draw!';
		result.innerHTML = 'Draw';
	}
}

/* For checking if the game is won by a player */
function checkWin(){

	/* Row check */
	for(let x=0; x<3; x++){
		for(let y=0; y<1; y++){
			if (( boxArray[x][y].getState() === boxArray[x][y+1].getState()) && (boxArray[x][y].getState() !== 0) && (boxArray[x][y+1].getState() ===
				boxArray[x][y+2].getState())) {
				console.log('Row completed');
				return boxArray[x][y].getState();	// 1 is player 1, 2 is player 2, you can tell from the value here
			}
		}
	}

	/* Column check */
	for(let x=0; x<1; x++){
		for(let y=0; y<3; y++){
			if (( boxArray[x][y].getState() === boxArray[x+1][y].getState()) && (boxArray[x][y].getState() !== 0) && boxArray[x+1][y].getState() ===
				boxArray[x+2][y].getState()) {
				console.log('Column completed');
				return boxArray[x][y].getState();	// 1 is player 1, 2 is player 2, you can tell from the value here
			}
		}
	}

	/* Diagonal check */
	if (boxArray[0][0].getState() === boxArray[1][1].getState() && (boxArray[0][0].getState() === boxArray[2][2].getState()) && (boxArray[0][0].getState() !== 0) ||
			(boxArray[0][2].getState() === boxArray[1][1].getState()) && (boxArray[0][2].getState() === boxArray[2][0].getState()) && (boxArray[0][2].getState() !== 0)) {
			console.log('Diagonal completed');
			return boxArray[1][1].getState();	// Middle cell (1,1) is always set
	}
	return 0;	// Result is draw
}

/* Reset the game array */
function resetArray(){
	for(let x = 0; x < 3; x++){
		for(let y = 0; y < 3; y++){
			boxArray[x][y].setState(0);
		}
	}
    boxes.forEach(element => {
        element.style.backgroundColor = neutralColor;
    })
}

/* Check if the array is full */
function isArrayFull(){
	for(let i = 0; i < 3; i++){
		for(let j = 0; j < 3; j++) {
			if(boxArray[i][j].getState() === 0){
				return false;
			}
		}
	}
	return true;
}

/* Update the game array */
function updateArray(input){

	if(isArrayFull()){
		return;
	}

	if(input === 'box-a'){
		if(!gameState) {
			boxArray[0][0].setState(1);
			console.log('0,0 set to 1');
		}
		else{
			boxArray[0][0].setState(2);
            console.log('0,0 set to 2');
		}
	}

	else if(input === 'box-b'){
		if(!gameState) {
			boxArray[0][1].setState(1);
            console.log('0,1 set to 1');
		}
		else{
			boxArray[0][1].setState(2);
            console.log('0,1 set to 2');
		}
	}

	else if(input === 'box-c'){
		if(!gameState) {
			boxArray[0][2].setState(1);
            console.log('0,2 set to 1');
		}
		else{
			boxArray[0][2].setState(2);
            console.log('0,2 set to 2');
		}
	}

	else if(input === 'box-d'){
		if(!gameState) {
			boxArray[1][0].setState(1);
            console.log('1,0 set to 1');
		}
		else{
			boxArray[1][0].setState(2);
            console.log('1,0 set to 2');
		}
	}

	else if(input === 'box-e'){
		if(!gameState) {
			boxArray[1][1].setState(1);
			console.log('1,1 set to 1');
		}
		else{
			boxArray[1][1].setState(2);
			console.log('1,1 set to 2');
		}
	}

	else if(input === 'box-f'){
		if(!gameState) {
			boxArray[1][2].setState(1);
			console.log('1,2 set to 1');
		}
		else{
			boxArray[1][2].setState(2);
			console.log('1,2 set to 2');
		}
	}
	else if(input === 'box-g'){
		if(!gameState) {
			boxArray[2][0].setState(1);
			console.log('2,0 set to 1');
		}
		else{
			boxArray[2][0].setState(2);
			console.log('2,0 set to 2');
		}
	}

	else if(input  === 'box-h'){
		if(!gameState) {
			boxArray[2][1].setState(1);
			console.log('2,1 set to 1');
		}
		else{
			boxArray[2][1].setState(2);
			console.log('2,1 set to 2');
		}
	}

	else if(input  === 'box-i'){
		if(!gameState) {
			boxArray[2][2].setState(1);
			console.log('2,2 set to 1');
		}
		else{
			boxArray[2][2].setState(2);
			console.log('2,2 set to 2');
		}
	}
}

/* Check if given space is filled or not (used for CPU's turn) */
function isSpaceFilled(x, y){

	if(boxArray[x][y].getState() !== 0){
		return true;
	}
	else{
		return false;
	}
}

/* Randomly choose a free square */
function chooseBox(){

    let limit = 8;
    let attempt = 0;

    /* Generate a random number  0 - 2 for array index */
	randX = Math.round(Math.random() * 2);
	randY = Math.round(Math.random() * 2);

	while(isSpaceFilled(randX, randY)){

		/* If cannot find empty space after 9 tries, give up (else will freeze up!) */
	    if(attempt === limit){
	        break;
        }
		randX = Math.round(Math.random() * 2);
		randY = Math.round(Math.random() * 2);
        attempt++;
	}
}

/* Display the current game status */
function displayStatus(){

	/* Note that logic must be reversed as we are talking about the 'next' turn (not current) */
	if(!(!gameState && !cpu_turn)){
		msg.innerHTML = 'Player 1\'s turn';
	}
	else if(!(gameState || cpu_turn)){
		msg.innerHTML = 'Player 2\'s turn';
	}
}

/* Sets the color of the squares */
function setSquareColor(name, color){
    boxes.forEach(element => {
        if(element.id === name){
            element.style.backgroundColor = color;
            return;
        }
    })
}