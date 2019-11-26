/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}
	addPhraseToDisplay() {
		// select the page area where we will add content
		const phraseDiv = $('#phrase');
		//use .split to split the string into an array
		const splitArray = this.phrase.split('');
		console.log(splitArray);
		//iterate through the phrase 
		for (let i = 0; i < splitArray.length; i += 1) {
			// this says  check if it is  a space 
			if (this.phrase.charAt(i) === ' ') {
				// this says okay it is a space so now go to the phrase ul and append the class space 
				$('#phrase ul').append('<li class ="space">' + this.phrase.charAt(i) + '</li>');
			} else { // this says okay it's not a space so it is a letter. Do the same thing that but with a letter class.
				$('#phrase ul').append('<li class= "letter">' + this.phrase.charAt(i) + '</li>');
			}
		}
	}
	checkLetter(letter) { // create variable to check the phrase for letters
		 let splitArray = this.phrase.split('');
    const checkLetter = this.phrase.includes(letter);
    //showMatchedLetter();
		 
		
		
		return checkLetter;
	}
	showMatchedLetter(letter) {
		// gets the value of the active phrase by using class.
		const matchedLetters = $('.letter');// variable for letter class
		$.each(matchedLetters, function(i, value) { // goes through  each individual letter
			if (letter === matchedLetters[i].innerText) { // checks for match against the selected letters inner html
				$(matchedLetters[i]).addClass('show') // creates a class to show 
       // $(this).addClass('hide');
       // game.gameOver(true); 
       // game.checkForWin();// removes a class that hides 
			}
		})
	}
}
        
        
            