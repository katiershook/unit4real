/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
   
    addPhrasetoDisplay() {
       const ul = document.querySelector('#phrase ul');
       phrase = game.getRandomPhrase();
        splitArray = this.phrase.split('')
    };
}