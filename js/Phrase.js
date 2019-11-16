/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
   
    addPhraseToDisplay() {
      
   // select the page area where we will add content
   let phraseDiv  = document.getElementById('phrase');
   //use .split to split the string into an array
   let splitArray = this.phrase.split('');
   console.log(splitArray);
   //iterate through the phrase 
   for(let i= 0; i< splitArray.length; i+= 1){
     // this says  check if it is  a space 
      if( this.phrase.charAt(i) === ' ') {
          // this says okay it is a space so now go to the phrase ul and append the class space 
      document.getElementById('phrase').append('<li class = "space" >' + this.phrase.charAt(i) + '</li>');
      } else { // this says okay it's not a space so it is a letter. Do the same thing that but with a letter class.
         document.getElementById('phrase').append('<li class = "letter">' + this.phrase.charAt(i) + '</li>');
      
      
        }


  
    }
}}