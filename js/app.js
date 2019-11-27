/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 
  const game = new Game
  
  const start = $('#btn__reset').click(function() {// event listener m the start button
 
    game.startGame();
   // game.resetGame();
  });
  

  // add an event lsitener for the keys by calling th class keyrow.
  // disable the letter when clicked
  // if inccorrect add addClass('wrong') and call the removeLife()
  // if correct  addClass('chosen') call the showMatched Letter
  // then call checkForWin()
  /// if player has won the game call gameOver();

  $('.key').click(game.handleInteraction);
  

 

//const game = new Game();

//const phrase = new Phrase('Life is like a box of chocolates');
//console.log(`Phrase - phrase: ${phrase.phrase}`);




// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());




//console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

  