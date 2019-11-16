/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 // creates the game class
class Game  {
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
         new Phrase( "yikes dude"), 
         new Phrase("order a pizza "),
         new Phrase("I am tired ") 
                           ];
      
         return phrasesArray;
       } 
       // creates getRandomPhrase method by going through the phrasesArray 
       // and picking a random one. 
       getRandomPhrase() {
        let i = Math.floor(Math.random() * this.phrases.length);
        console.log(i);
        let randomPhrase = this.phrases[i];
        return randomPhrase;

        
    };
    
    
    startGame(){ // get the overlay element and hides it.
    const hideOverlay =  document.getElementById('overlay').style.display = 'none';
    // this tells the game construct that getRandomPhrase will be used to for getting the random phrase
      this.activePhrase = this.getRandomPhrase();
      // this 
     this.activePhrase.addPhraseToDisplay();
       

};
}
