const computerChoiceDisplay = document.getElementById('compchoice')
const userDisplayDisplay = document.getElementById('yourchoice')
const resultDisplay = document.getElementById('result')
const choices = document.querySelectorAll('button')
let usersChoice
let computerChoice
let result

choices.forEach(choices=>choices.addEventListener('click', (e)=> {
   usersChoice = e.target.id
   userDisplayDisplay.innerHTML = usersChoice
   generateComputerChoice()
   getResult()
    
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 
    
    if (randomNumber === 1) {
      computerChoice = 'rock'
    }
    if (randomNumber === 2) {
      computerChoice = 'scissor'
    }
    if (randomNumber === 3) {
      computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
  }
function getResult(){
    if(computerChoice ==="rock" && usersChoice ==="rock"){
         result="its a draw"
    }
    if(computerChoice==="scissor" && usersChoice==="scissor"){
         result="its a draw"
    }
    if(computerChoice ==="paper" && usersChoice==="paper"){
         result="its a draw"
    }
    if(computerChoice ==="rock" && usersChoice ==="paper"){
         result="you win!"
    }
    if( computerChoice ==="rock" && usersChoice ==="scissor"){
         result = "you lost!"
    }
    if(computerChoice ==="paper" && usersChoice =="rock"){
         result = "you lost!"
    }
    if (computerChoice ==="paper" && usersChoice ==="scissor"){
         result ="you win!"
    }
    if (computerChoice ==="scissor" && usersChoice ==="rock"){
         result ="you win!"
    }
    if(computerChoice ==="scissor" && usersChoice ==="paper"){
         result ="you lost!"
    }
     resultDisplay.innerHTML= result
     
 }