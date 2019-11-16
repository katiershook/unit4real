/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 
  const startButton = document.getElementById
  ('btn__reset');
  startButton.addEventListener('click',function() {
 
 
 //game.startGame(); 

 const game = new Game();
 game.getRandomPhrase().addPhraseToDisplay();


 

//const game = new Game();

//const phrase = new Phrase('Life is like a box of chocolates');
//console.log(`Phrase - phrase: ${phrase.phrase}`);


console.log('ok boomer');

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());



game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

  });