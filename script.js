'use strict';


let score, rolledNumber, activePlayer, scores, roundScore, maxScore, winnerPlayer;
scores = [0,0];
roundScore = 0;
// active player
activePlayer = 0;
maxScore = 100;
// set state of the game.


// new game 
const newGame = () => {
	if((scores[0] || scores[1]) && (scores[0] > 99 || scores[1] > 99)){
		document.querySelector(`#name--${winnerPlayer}`).textContent = `Player ${winnerPlayer + 1}`		
	}else{
		document.querySelector(`#name--${activePlayer}`).textContent = `Player ${activePlayer + 1}`		
	}
	
	scores[0] = 0;
	scores[1] = 0;
	roundScore = 0;
	document.querySelector('.btn--roll').disabled = false;
	document.querySelector('.btn--hold').disabled = false;
	winnerPlayer = '';
	gameStartState()
}
const winner = (scores, activePlayer) => {
console.log(scores)
	if(scores[activePlayer] >= 100){
		console.log(activePlayer)
		winnerPlayer = activePlayer
		document.querySelector(`#name--${activePlayer}`).textContent = `Winner`
		document.querySelector('.btn--roll').disabled = true;
		document.querySelector('.btn--hold').disabled = true;
	}
}


const gameStartState = () => {
	// Total Score Holder 
	document.querySelector('#score--0').innerHTML = 0;
	document.querySelector('#score--1').innerHTML = 0;
	// Current Score Holder 
	document.querySelector('#current--0').innerHTML = 0;
	document.querySelector('#current--1').innerHTML = 0;	
}

gameStartState()


// hold current score
const holdScore = () => {
	scores[activePlayer] += roundScore
	document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
	winner(scores, activePlayer);
	document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
	roundScore = 0;
	document.querySelector('#current--0').innerHTML = 0;
	document.querySelector('#current--1').innerHTML = 0;
	document.querySelector('.dice').src = 'dice-1.png';
	activePlayer === 0? activePlayer = 1: activePlayer = 0; 
}

// roll the dice function 
const rollDice = () => {	
	// highest possible number could get
	const highestPossibleNumber = 6;
	// generate a random number from 1-6
	rolledNumber = Math.floor((Math.random() * highestPossibleNumber) + 1) 
	//set the dice image
	let diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = `dice-${rolledNumber}.png`

	// check if the rolled number or dice number is not 1
	if(rolledNumber !== 1){
		//add score
		roundScore += rolledNumber
		document.querySelector(`#current--${activePlayer}`).textContent = roundScore
		document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
	}else{
		//next player 
		document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
		activePlayer === 0? activePlayer = 1: activePlayer = 0; 
		roundScore = 0;
		document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
		document.querySelector(`#current--${activePlayer}`).textContent = roundScore;
		document.querySelector('#current--0').innerHTML = 0;
		document.querySelector('#current--1').innerHTML = 0;

	
	}
}




