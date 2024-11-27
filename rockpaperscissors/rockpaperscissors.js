const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const humanScoreboard = document.querySelector('#humanScore');
    humanScoreboard.textContent = `Human Score: ${humanScore}`
const computerScoreboard = document.querySelector('#computerScore');
    computerScoreboard.textContent = `Computer Score: ${humanScore}`
let humanScore = 0
let computerScore = 0 

rockButton.addEventListener("click", () => {
    playRound(getComputerChoice(),'rock');
});
paperButton.addEventListener("click", () => {
    playRound(getComputerChoice,'paper');
});
scissorsButton.addEventListener("click", () => {
    playRound(getComputerChoice(),'scissors');
});

function passToScoreboard() {
    const roundResult = playRound(humanSelection, computerSelection);
    if (roundResult === 'human wins') {
        humanScore++
    } else if (roundResult === 'computer wins') {
        computerScore++
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

function getHumanChoice() {
    let humanChoice = prompt('Choose rock, paper, or scissors.', 'scissors');
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice!=='rock' && humanChoice!=='paper' && humanChoice!=='scissors') {
        console.log('choose a valid option')
        return getHumanChoice();
    } else {
        return humanChoice
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
function playGame() {

    let humanScore = 0
    let computerScore = 0 

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();   
        const roundResult = playRound(humanSelection, computerSelection);

        if (roundResult === 'human wins') {
            humanScore++
        } else if (roundResult === 'computer wins') {
            computerScore++
        }
    }

    if (humanScore > computerScore) {
        console.log('The human race is victorious')
    } else if (computerScore > humanScore) {
        console.log('We have fallen to the machines')
    } else if (computerScore===humanScore) {
        console.log('Indeterminate result, but we have much to fear')
    }
}

playGame();