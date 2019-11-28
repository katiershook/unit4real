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
		this.resetGame(true);
		// this tells the game construct that getRandomPhrase will be used to for getting the random phrase
		this.activePhrase = this.getRandomPhrase();
		// this 
		this.activePhrase.addPhraseToDisplay();
	};
	resetGame() {
		$('#phrase ul').empty();
		$('.key').removeClass('chosen');
		$('.key').removeClass('wrong');
		$('.key').removeAttr('disabled');
		$('.tries img').attr('src', 'images/liveHeart.png');
	}
	//checkForWin()
	//handleInteraction();
	checkForWin() { // checks that the active phrase is correctly  guessed.
		// create two variables and compare them. one for the letter.length and show.length
		const correctPhrase = $('.letter').length; // length of the phrase
		const guessedLetters = $('.show').length; { /// length of the guessed letters 
			if (correctPhrase === guessedLetters) {
				//{ // compares the two
				this.gameOver(true)
				return true;
				//game.gameOver(true)
			}
		}
	}
	removeLife() {
		this.missed += 1; // counter
		const lives = $('.tries img'); // selects the images from the tries class
		lives[this.missed - 1].src = 'images/lostHeart.png'; // uses bracket notation to access the propertiess and subtract one. Shoutout to ernie the dog on this one ahha.
		if (this.missed === 5) { /// if there are 5 incorrect guess 
			this.gameOver('astring');
		} // trigger the game over function. When gameOver is activated it tells it it's a string // learned about this froma friend 
		//this.checkForWin(false);
	}
	gameOver(gameWon) {
		const overlay = $('#overlay') // variable to show the overlay when called
		const gameOverScreen = $('#game-over-message'); // game over message variable
		if (gameWon === true) { // if the game is won
			$(gameOverScreen).text('winner winner chicken dinner');
			//gameOverScreen.textContent = "winner winner chicken dinner";
			$(overlay).show().addClass('win'); // add the class of win
		} else {
			$(gameOverScreen).text('try again dude'); // game lost add he text content "try again dude"
			//gameOverScreen.textContent = "try again dude";
			$(overlay).show().addClass('lose'); // add  class lose
		}
	}
	handleInteraction(button) {
		const clickedLetter = game.activePhrase.checkLetter($(button.target).text()) // text content of the letter clicked in checkLetter
		if (!clickedLetter) { // if checkletter is not true
			$(button.target).addClass('wrong').attr('disabled', true); // adds class wront to the selected button
			game.removeLife(false); // removes a life
			; // disables the button clicked
		} else {
			$(button.target).addClass('chosen').attr('disabled', true); // disables the clicked button 
			game.activePhrase.showMatchedLetter($(button.target).text()); // calls the showMatchedLetter function
			game.checkForWin();
			// game.gameOver(true); // checks for win
		}
	}
}
		  
			// //   }
			

		