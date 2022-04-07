function game (){
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 5;
  let playerchoice = prompt("choose paper,rock, or scissors").toLowerCase();
  function computerPlay() {
    let options = ['rock','paper','scissor'];
    return (options[Math.floor(options.slice()* options.length)]);
  }
  let computerchoice = computerPlay() ;
  function playround(playerchoice,computerchoice){
    if (playerchoice === "rock"){
      if (computerchoice === 'rock'){
        console.log("Tie");
      } else if ( computerchoice === "paper"){
        console.log("you Lose");
      } else if (computerchoice === "scissor"){
        console.log ("you win");
      }
    }
    if (playerchoice === "paper"){
      if (computerchoice === 'paper'){
        console.log("Tie");
      } else if ( computerchoice === "scissor"){
        console.log("you Lose");
      } else if (computerchoice === "rock"){
        console.log ("you win");
      }
    }
    if (playerchoice === "scissor"){
      if (computerchoice === 'scissor'){
        console.log("Tie");
      } else if ( computerchoice === "rock"){
        console.log("you Lose");
      } else if (computerchoice === "paper"){
        console.log ("you win");
      }
    }
  }
}
game()