/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
   
    addPhraseToDisplay() {
        //phrase = game.getRandomPhrase();
         const li = document.createElement('li');
       let  splitArray = this.phrase.split('');
        const ul = $('#phrase ul').append('Phrase ul');
        ul.append('li');
   
        console.log(splitArray);
    }

  

 
}
