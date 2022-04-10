
function playcomputer(){
  let options = ['rock','paper','scissors']
  return options[Math.floor(Math.random()*3)];
}

  


function game(){
  let playerchoice = undefined
  let playerscore = 0
  let computerscore = 0
  let rounds =""  
  const select = document.querySelectorAll("button")
  select.forEach((button) => {
    button.addEventListener("click", () => {
      playerchoice = button.className ;
      console.log(button)
      const computerchoice = playcomputer()
      playerr.textContent = "Player win = " + playerscore ;
      computer.textContent= "Computer score = " + computerscore ;
      battler.textContent = playround(playerchoice,computerchoice)
      endgame()
    })
  }
    
  )
  function playround(playerchoice,computerchoice){
    if (playerchoice === computerchoice) {
      return 'Draw!';
    } else if ((playerchoice == "rock") && (computerchoice == "scissors")) {
      playerscore++
      return "Player won!";
      
    } else if ((playerchoice == "paper") && (computerchoice == "rock")) {
      playerscore++
      return "Player won!";
      
    } else if ((playerchoice == "scissors") && (computerchoice == "paper")) {
      playerscore++
      return "Player won!";
      playerscore++
    } else if ((playerchoice == "paper") && (computerchoice == "scissors")) {
      computerscore++
      return "Computer won!";
      computerscore++
    } else if ((playerchoice == "scissors") && (computerchoice == "rock")) {
      computerscore++
      return "Computer won!";
      computerscore++
    } else if ((playerchoice == "rock") && (computerchoice == "paper")) {
      computerscore++
      return "Computer won!";
      computerscore++
    }
    return playround(playerchoice,playcomputer)
  }
  function endgame(){
    // if player wins and siable buttons
    if (playerscore==5){
      result.textContent="Won the war"
      document.getElementById("1").disabled = true
      document.getElementById("2").disabled = true
      document.getElementById("3").disabled = true
      // we need to show a restart button
      const restart = document.createElement("button")
      result.textContent = "again?"
      container.appendChild(restart)
      restart.addEventListener("click", () =>{
        location.reload()
      })
    } else if (computerscore==5) {
      // computer wins
      result.textContent="Lost the war"
      document.getElementById("1").disabled = true
      document.getElementById("2").disabled = true
      document.getElementById("3").disabled = true
      // we need to show a restart button
      const restart = document.createElement("button")
      restart.textContent = "try again?"
      container.appendChild(restart)
      restart.addEventListener("click", () =>{
        location.reload()
      })
    }
  
  }
  // this will be the result div
const container = document.querySelector(".container")

// this will be the player result

const playerr = document.createElement("p")
playerr.style.color="blue"
playerr.textContent = "Player win = " + playerscore ;
container.appendChild(playerr)

// this will be the computer result
const computer = document.createElement("p")
computer.style.color="blue"
computer.textContent= "Computer score = " + computerscore ;
container.appendChild(computer)

// battle result
const battler = document.createElement("p")

container.appendChild(battler)

// battle lost 
const battlel = document.createElement("p")
container.appendChild(battlel)


const result = document.createElement('div')

result.style.color = "red"
result.style.fontWeight = "bolder"
container.appendChild(result)

}




game()