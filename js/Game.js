

  //
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
// creates the game class
class Game {
	constructor() {
		this.missed = 0;
		this.phrases = this.createPhrases();
		this.activePhrase = null;
	}
	// creates the createPhrases method to create an array of phrases.
	createPhrases() {
		const phrasesArray = [
			new Phrase("dunder mifflin paper co "),
			new Phrase("electric city"),
			new Phrase("yikes dude"),
			new Phrase("order a pizza "),
			new Phrase("I am tired ")
		];
		return phrasesArray;
	}
	// creates getRandomPhrase method by going through the phrasesArray 
	// and picking a random one. 
	getRandomPhrase() {
		let x = Math.floor(Math.random() * this.phrases.length);
		console.log(x);
		let randomPhrase = this.phrases[x];
		return randomPhrase;
	};
	startGame() { // get the overlay element and hides it.
		const hideOverlay = $('#overlay').css('display', 'none');
		// this tells the game construct that getRandomPhrase will be used to for getting the random phrase
		this.activePhrase = this.getRandomPhrase();
		// this 
		this.activePhrase.addPhraseToDisplay();
	};
	//checkForWin()
	//handleInteraction();
	checkForWin() { // checks that the active phrase is correctly  guessed.
		// create two variables and compare them. one for the letter.length and show.length
		const correctPhrase = $('.letter').length; // length of the phrase
		const guessedLetters = $('.show').length; { /// length of the guessed letters 
			if (correctPhrase === guessedLetters) { // compares the two
				return true
			} else {
				return false
			}
		}
	}
	// grab the heart images by class
	// if a guess is incorrect use addClass to remove a heart. 
	// if the incorrect guessed are 5 the game will be over 
	removeLife() {
		this.missed ++
		const lives = $('.tries img'); // selects the images from the tries class
	 {
			lives[this.missed - 1].src = 'images/lostHeart.png'; // uses bracket notation to access the propertiess and subracts one
		}
		    if(this.missed === 5) { /// if there are 5 incorrect guess 
			gameOver(); // trigger the game over function
		} 
	}
	gameOver(gameWon) {
		const overlay = $('#overlay');
		const gameOverScreen = $('#game-over-message');
		if (gameWon === true) {
			gameOverScreen.textContent = "winner winner chicken dinner";
			$(overlay).addClass('win');
		} else {
			gameOverScreen.textContent = "try again dude";
			$(overlay).addClass('lose');
		}
	}
}