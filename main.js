let computerChoiceEl = document.querySelector("#computer_choice-el")
let computerScoreEl = document.querySelector("#computer_score-el")
let playerScoreEl = document.querySelector("#player_score-el")
let choices = ["✊", "🖐", "✌"]
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
        (playerChoice === '✊' && computerChoice === '✌') ||
        (playerChoice === '✌' && computerChoice === '🖐') ||
        (playerChoice === '🖐' && computerChoice === '✊')
    ) {
        playerScore++
        return 'You win!'
    } else {
        computerScore++
        return 'Computer wins!'
    }
}

function updateScore() {
    playerScoreEl.textContent = "Your Score: " + playerScore
    computerScoreEl.textContent = "CPU Score: " + computerScore
}

function playRock() {
    let playerChoice = '✊'
    let computerChoice = getComputerChoice()
    let result = determineWinner(playerChoice, computerChoice)
    computerChoiceEl.textContent = "You chose " + playerChoice + ", Computer chose " + computerChoice + ". " + result  
    updateScore()
}

function playPaper() {
    let playerChoice = '🖐'
    let computerChoice = getComputerChoice()
    let result = determineWinner(playerChoice, computerChoice)
    computerChoiceEl.textContent = "You chose " + playerChoice + ", Computer chose " + computerChoice + ". " + result
    updateScore()
}

function playScissors() {
    let playerChoice = '✌'
    let computerChoice = getComputerChoice()
    let result = determineWinner(playerChoice, computerChoice)
    computerChoiceEl.textContent = "You chose " + playerChoice + ", Computer chose " + computerChoice + ". " + result  
    updateScore()
}


/**
 * three buttons
 */