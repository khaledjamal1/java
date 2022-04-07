function computerPlay() {
  let options = ["rock","paper","scissors"];
  return options[Math.floor(Math.random()* 3)];
}

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

function game () {
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 5;

  for (let i = 0; i < rounds; i++) {
    let computerchoice = computerPlay();
    console.log(computerchoice)
    let playerchoice = prompt("choose paper,rock, or scissors").toLowerCase();
    console.log(playerchoice)
    let roundScore = playround(playerchoice, computerchoice)
    if (roundScore === 'Player won!') {
      playerScore += 1
    } else if (roundScore === 'Computer won!') {
      computerScore += 1
    }
    console.log(playerScore, computerScore)
  }

  if (playerScore > computerScore) {
    return 'You won the battle'
  } else if (computerScore > playerScore) {
    return 'You lost the battle'
  }
}

let battleScore = game()
alert(battleScore)