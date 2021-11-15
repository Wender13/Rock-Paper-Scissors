// Variables

let playerScore = 0
let computerScore = 0

// Computer choice

function randomChoice() {
    const choices = ["rock", "paper", "scissor"]
    const randomize = Math.floor(Math.random() * 3)
    return choices[randomize]
}

// Restart button's functions and properties

function reset() {
    location.reload()
}

function putButton() {
    let button = document.getElementById('restart')
    button.style.display = ""
}

function removeButton() {
    let button = document.getElementById('restart')
    button.style.display = "none"
}

// Functions to check who win the game 

function checkPlayerScore(playerScore) {
    let resultMessage = document.getElementById('gameResult')
    let winnerMessage = document.getElementById('winner')
    let screen = document.getElementById('controls&results')
    if (playerScore == 5) {
        screen.style.display = "none"
        winnerMessage.innerHTML = "The player won!"
        resultMessage.innerHTML = ""
        putButton()
    }
}

function checkComputerScore(computerScore) {
    let resultMessage = document.getElementById('gameResult')
    let winnerMessage = document.getElementById('winner')
    let screen = document.getElementById('controls&results')
    if (computerScore == 5) {
        screen.style.display = "none"
        winnerMessage.innerHTML = "The computer won!"
        resultMessage.innerHTML = ""
        putButton()
    }
}

// Results' functions

function win(player, computer) {
    playerScore++
    let playerScoreDisplay = document.getElementById('yourScore')
    let resultMessage = document.getElementById('gameResult')
    resultMessage.innerHTML = `${player} beats ${computer}!`
    playerScoreDisplay.innerHTML = playerScore
    checkPlayerScore(playerScore)
}

function lose(player, computer) {
    computerScore++
    let computerScoreDisplay = document.getElementById('pcScore')
    let resultMessage = document.getElementById('gameResult')
    resultMessage.innerHTML = `${computer} beats ${player}!`
    computerScoreDisplay.innerHTML = computerScore
    checkComputerScore(computerScore)
}

function draw() {
    let resultMessage = document.getElementById('gameResult')
    resultMessage.innerHTML = "Tie!"
}

// Game function

function game(userMove) {
    let computerChoice = randomChoice()
    let result = userMove + " " + computerChoice
    if(result == "rock scissor" || result == "paper rock" || result == "scissor paper") {
        win(userMove, computerChoice)
    } else if (result == "rock paper" || result == "paper scissor" || result == "scissor rock") {
        lose(userMove, computerChoice)
    } else if (result == "rock rock" || result == "paper paper" || result == "scissor scissor") {
        draw()
    }
}

//Buttons' functions that set the player's choice

function choiceRock() {
    game("rock")
}

function choicePaper() {
    game("paper")
}

function choiceScissor() {
    game("scissor")
}