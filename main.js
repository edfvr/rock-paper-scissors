const computerChoiceEl = document.querySelector("#computer_choice-el")
const playerChoiceEl = document.querySelector("#player_choice-el")

const computerScoreEl = document.querySelector("#computer_score-el")
const playerScoreEl = document.querySelector("#player_score-el")

const resultEl = document.querySelector("#result-el")

const rockButton = document.querySelector("#rock-button")
const paperButton = document.querySelector("#paper-button")
const scissorsButton = document.querySelector("#scissors-button")

const choices = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex]
}


function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Tie!'
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore++
        return 'You win!'
    } else {
        computerScore++
        return 'Computer wins!'
    }
}

function updateScore() {
    playerScoreEl.textContent = "You: " + playerScore
    computerScoreEl.textContent = "Computer: " + computerScore
}


rockButton.addEventListener("click", function() {
    let playerChoice = 'rock'
    let computerChoice = getComputerChoice()
    let result = determineWinner(playerChoice, computerChoice)
    displayResult(playerChoice, computerChoice, result)

    
   // playerChoiceEl.innerHTML = `<img src="${}"/>`
    updateScore()
}) 

paperButton.addEventListener("click", function() {
    let playerChoice = 'paper'
    let computerChoice = getComputerChoice()
    let result = determineWinner(playerChoice, computerChoice)
    displayResult(playerChoice, computerChoice, result)

    updateScore()
}) 

scissorsButton.addEventListener("click", function() {
    let playerChoice = 'scissors'
    let computerChoice = getComputerChoice()
    let result = determineWinner(playerChoice, computerChoice)
    displayResult(playerChoice, computerChoice, result)
    updateScore()
}) 


function displayResult (playerChoice, computerChoice, result) {
    playerChoiceEl.innerHTML = `<h1>${playerChoice}</h1>`
    computerChoiceEl.innerHTML = `<h1>${computerChoice}</h1>`
    resultEl.innerHTML = `<h1>${result}</h1>`
}

//computerChoiceEl.innerHTML = `<h1>${computerChoice}</h1>`
    //playerChoiceEl.innerHTML = `<h1>${playerChoice}</h1>`