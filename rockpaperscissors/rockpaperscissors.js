let humanScore = 0
let computerScore = 0 

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const humanScoreboard = document.querySelector('#humanScore');
const computerScoreboard = document.querySelector('#computerScore');

rockButton.addEventListener("click", () => {
    passToScoreboard('rock');
});
paperButton.addEventListener("click", () => {
    passToScoreboard('paper');
});
scissorsButton.addEventListener("click", () => {
    passToScoreboard('scissors');
});

function passToScoreboard(humanSelection) {
    const computerSelection = getComputerChoice();
    const roundResult = playRound(humanSelection, computerSelection);
    if (roundResult === 'human wins') {
        humanScore++
        humanScoreboard.textContent = `Human Score: ${humanScore}`
    } else if (roundResult === 'computer wins') {
        computerScore++
        computerScoreboard.textContent = `Computer Score: ${computerScore}`
    };
}

function getComputerChoice() {
    const randomVal = Math.random();
    if (randomVal >=.66) {
        return 'rock'
    } else if (randomVal <.33) {
        return 'scissors'
    } else if (randomVal >=.33 && randomVal < .66) {
        return 'paper'
    }
}

function playRound(computerChoice, humanChoice) {
    if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock')
    ) {
        console.log('computer wins');
        return 'computer wins';
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log('human wins');
        return 'human wins';
    } else if (humanChoice === computerChoice) {
        console.log('it is a tie');
        return 'tie';
    }
}