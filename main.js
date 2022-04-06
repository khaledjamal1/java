
let player=0;
let computer=0;
let round = 5;
function game(){
    for (let i=0; i<round; i++){
        if (playRound =='you win'){
            player++;
            console.log("you win");
        } else if (playRound=='you lose'){
            computer++;
            console.log("you lose");
        } else { 
            console.log("It's a tie");
        }
        }
        if (player>computer){
            console.log('congrats you won '+ player +' to '+ computer);
        } else {
            console.log('you lost :( '+ player+'to'+computer);
        }
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
        return 'you lose';
        } else if (playerSelection1=="paper" && computerSelection1 == 'rock'){
            return 'you win';
        } else if (playerSelection1=="scissor" && computerSelection1 == 'paper'){
            return 'you win';
        } else if (playerSelection1=="paper" && computerSelection1 == 'scissor'){
        return 'you lose';
        } else if (playerSelection1=="scissor" && computerSelection1 == 'rock'){
            return 'you lose';
        } else if (playerSelection1=="rock" && computerSelection1 == 'scissor'){
            return 'you win';
        } else if (playerSelection1=="scissor" && computerSelection1 == 'paper'){
            return 'you win';
        } else if (playerSelection1=="paper" && computerSelection1 == 'scissor'){
            return 'you lose';
        } else {
            return 'Tie';
        }
        
        
    }
}

game()