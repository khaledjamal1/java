
function playerSelection(){
    let input = prompt("enter choice");
    while (input==null){
        input = prompt("enter choice");
    }
    return input;
}
function computerSelection(){
    let options = ["rock","paper","scissor"]
    return (options[Math.floor(Math.random()*options.length)]);
}
const playerSelection1 = playerSelection()
const computerSelection1 = computerSelection()
function playRound(playerSelection,computerSelection){
     if (playerSelection1 =="rock" && computerSelection1 == 'paper'){
       console.log ('you lose');
    } else if (playerSelection1=="paper" && computerSelection1 == 'rock'){
        console.log('you win');
    } else if (playerSelection1=="scissor" && computerSelection1 == 'paper'){
        console.log('you win');
    } else if (playerSelection1=="paper" && computerSelection1 == 'scissor'){
        console.log('you lose');
    } else if (playerSelection1=="scissor" && computerSelection1 == 'rock'){
        console.log('you lose');
    } else if (playerSelection1=="rock" && computerSelection1 == 'scissor'){
        console.log('you win');
    } else if (playerSelection1=="scissor" && computerSelection1 == 'paper'){
        console.log('you win');
    } else if (playerSelection1=="paper" && computerSelection1 == 'scissor'){
        console.log('you lose');
    } else {
        console.log('ss')
    }
}
playRound()