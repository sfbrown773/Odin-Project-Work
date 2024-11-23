function getComputerChoice() {
    const randomVal = Math.random();
    if (randomVal >=.66) {
        return 'rock'
    } else if (randomVal <.33) {
        return 'paper'
    } else if (.66 > randomVal >=.33) {
        return 'scissors'
    }
}

function getHumanChoice() {
    prompt('Choose rock, paper, or scissors.', 'scissors');
}

//function playGame() {

    let humanScore = 0
    let computerScore = 0

    function playRound(computerChoice, humanChoice, computerScore, humanScore) {
        if (
            (computerChoice === 'rock' && humanChoice === 'scissors') ||
            (computerChoice === 'scissors' && humanChoice === 'paper') ||
            (computerChoice === 'paper' && humanChoice === 'rock')
        ) {
            computerScore++;
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            humanScore++;
        }
        return { computerScore, humanScore };
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();    

    for (let i = 1; i <= 5; i++) {
        playRound(humanSelection, computerSelection);
    }
//}