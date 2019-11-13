/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 
class Game  {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null ;
    }
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
       
       getRandomPhrase() {
        let i = Math.floor(Math.random() * this.phrases.length);
        console.log(i);
        let randomPhrase = this.phrases[i];
    return randomPhrase;
    }
    }
   
      
      
    //   getRandomPhrase() { 
    //   const randomPhrases = Math.floor(Math.random(this.phrases.length)*4);
    //   return game.phrases[randomPhrases];
    //   console.log(randomPhrases);
    //   }
      
      
    //   };