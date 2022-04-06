
let player=0;
let computer=0;
let round = 0;
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
    let log = "";
     if (playerSelection1 =="rock" && computerSelection1 == 'paper'){
       log ='you lose';
    } else if (playerSelection1=="paper" && computerSelection1 == 'rock'){
        log= 'you win';
    } else if (playerSelection1=="scissor" && computerSelection1 == 'paper'){
        log= 'you win';
    } else if (playerSelection1=="paper" && computerSelection1 == 'scissor'){
       log ='you lose';
    } else if (playerSelection1=="scissor" && computerSelection1 == 'rock'){
        log ='you lose';
    } else if (playerSelection1=="rock" && computerSelection1 == 'scissor'){
        log ='you win';
    } else if (playerSelection1=="scissor" && computerSelection1 == 'paper'){
        log= 'you win';
    } else if (playerSelection1=="paper" && computerSelection1 == 'scissor'){
        log ='you lose';
    } else {
        log ='Tie';
    } 
    return log;
}

function game(){
    while (round<5){
        playRound;
        round=round +1
    }
}