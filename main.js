function computerPlay() {
  let options = ["rock","paper","scissor"];
  return options[Math.floor(Math.random()* 3)];
}
let computerchoice = computerPlay() ;
function game(){
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 5;
  let playerchoice = prompt("choose paper,rock, or scissors").toLowerCase();
  function playround(playerchoice,computerchoice){
    if (playerchoice === computerchoice) {
      return 'Draw!';
    } else if ((playerchoice == "rock") && (computerchoice == "scissors")) {
      return "Player won!";
    } else if ((playerchoice == "paper") && (computerchoice == "rock")) {
      return "Player won!";
    } else if ((playerchoice == "scissors") && (computerchoice == "paper")) {
      return "Player won!";
    } else if ((playerchoice == "paper") && (computerchoice == "scissors")) {
      return "Computer won!";
    } else if ((playerchoice == "scissors") && (computerchoice == "rock")) {
      return "Computer won!";
    } else if ((playerchoice == "rock") && (computerchoice == "paper")) {
      return "Computer won!";
    }
  }
  
}
function play(){
  for (let i=0; i<rounds; i++){
    if (playround=== "Player won!"){
      playerScore++;
      console.log (playerScore);
    }
  }
}
game();