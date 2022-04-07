function playcomputer(){
  let options = ['rock','paper','scissors']
  return options[Math.floor(Math.random()*3)];
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
  return playround(playerchoice,playcomputer)
  
}
function game(){
  
  let playerscore = 0
  let computerscore = 0
  let rounds = 5
  let computerchoice = playcomputer()
  let playerchoice = prompt('Choose rock,paper, or scissors').toLowerCase();
  for ( let i =0; i<rounds; i++){
    let computerchoice = playcomputer()
    let playerchoice = prompt('Choose rock,paper, or scissors').toLowerCase();
    let outcome = playround(playerchoice,computerchoice)
    if (outcome==="Player won!"){
      playerscore++
      
    } else if ( outcome === "Computer won!"){
      computerscore++
      
    }
    console.log(playerscore,computerscore)
  }
  if (playerscore>computerscore){
    return("you won the battle")
  } else if (playerscore<computerscore){
    return ("you lost the battle")
  }
}
game()
let final = game()
alert(final)