const head = document.getElementById("head");
const cont = document.getElementById("cont");
const load = document.querySelector("#load");
const message = document.getElementById("message");

setTimeout(()=>{
   load.style.display = "none"
   head.style.display = "flex"
   cont.style.display = "block"
   message.classList.add("add")
   
   setTimeout(()=>{
   message.classList.remove("add")
   }, 10000)

}, 5000);


const computerCh = document.getElementById("computer-ch");
const userCh = document.getElementById("user-ch");
const resultCh = document.getElementById("result");
const btns = document.querySelectorAll(".bt");
const yourScore = document.getElementById("you-sc");
const comScore = document.getElementById("com-sc");
const yourScor = document.getElementById("you-sco");
const comScor = document.getElementById("com-sco");
const gameOver = document.getElementById("game-over");
const restart = document.getElementById("restart");
const status = document.getElementById("status");

let userChoice 
let computerChoice
let result
let yVal = 0
let cVal = 0

btns.forEach(button => button.addEventListener("click", (e) =>{
   userChoice = e.target.id
   userCh.innerText = userChoice
   generateComputerChoice()
   getResult()
   color()
   score()
   display()
   message.classList.remove("add")
}))

function generateComputerChoice() {
   const randomNum = Math.floor(Math.random() * 3) + 1
   
   if(randomNum === 1){
      computerChoice = "Scissors"
   }
   if(randomNum === 2){
      computerChoice = "Paper"
   }
   if(randomNum === 3){
      computerChoice = "Rock"
   }
   computerCh.innerHTML = computerChoice
}
function getResult(){
   if(computerChoice === userChoice){
      result = "It's a draw!"
   }
   if(computerChoice === "Rock" && userChoice === "Paper"){
     result  = "You win!"
   }
   if(computerChoice === "Rock" && userChoice === "Scissors"){
      result = "You lost!"
   }
   if(computerChoice === "Scissors" && userChoice === "Paper"){
      result = "You lost!"
   }
   if(computerChoice === "Paper" && userChoice === "Rock"){
      result = "You lost!"
   }
   if(computerChoice === "Scissors" && userChoice === "Rock"){
      result = "You win!"
   }
   if(computerChoice === "Paper" && userChoice === "Scissors"){
      result = "You win!"
   }
   resultCh.innerHTML = result
}
function color(){
   if(resultCh.innerHTML == "It's a draw!"){
      resultCh.style.backgroundColor = "#fff";
      resultCh.style.color = "#000";
   }
   if(resultCh.innerHTML == "You lost!"){
      resultCh.style.backgroundColor = "red";
      resultCh.style.color = "#fff";
   }
   if(resultCh.innerHTML == "You win!"){
      resultCh.style.backgroundColor = "green";
      resultCh.style.color = "#fff";
   }
}
function score(){
   if(resultCh.innerHTML == "You lost!"){
      cVal += 1
   }
   if(resultCh.innerHTML == "You win!"){
      yVal += 1
   }
   yourScore.innerText = yVal
   comScore.innerText = cVal
   yourScor.innerText = yVal
   comScor.innerText = cVal
}

function display(){
   if(yourScore.innerText == 30 || comScore.innerText == 30){
      gameOver.style.display = "block"
   }
   if(yourScore.innerText < comScore.innerText){
      status.innerText = "😭 You lost! 😭"
      status.style.backgroundColor = "red"
   }
   else if(yourScore.innerText > comScore.innerText){
      status.innerText = "🎉 You win! 🎉 "
      status.style.backgroundColor = "green"
   }
   else{
      status.innerText = "It's a draw"
      status.style.backgroundColor = "#fff"
   }
}

restart.addEventListener("click", ()=>{
   document.location.reload()
})