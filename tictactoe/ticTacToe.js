const victoryOptions = [
    ['sq1', 'sq2', 'sq3'],
    ['sq4', 'sq5', 'sq6'],
    ['sq7', 'sq8', 'sq9'],
    ['sq1', 'sq4', 'sq7'],
    ['sq2', 'sq5', 'sq8'],
    ['sq3', 'sq6', 'sq9'],
    ['sq1', 'sq5', 'sq9'],
    ['sq3', 'sq5', 'sq7']
];
let currentPlayer = 'human'

let gameboard = ['sq1','sq2','sq3','sq4','sq5','sq6','sq7','sq8','sq9']

let humanChoices = [];
let computerChoices = [];

function checkVictory(playerChoices) {
    if (playerChoices.length < 3) return false; // Not enough moves for a victory
    return victoryOptions.some((combo) => 
        combo.every((pos) => playerChoices.includes(pos))
    );
}

function computerMove() {
    const randomIndex = Math.floor(Math.random() * gameboard.length);
    const computerChoice = gameboard[randomIndex];
    gameboard.splice(randomIndex, 1);
    computerChoices.push(computerChoice);
    console.log(computerChoices);
    currentPlayer = 'human'
    if (checkVictory(computerChoices)) {
        alert("Computer wins!");
        return; // End the game
    }
}

function humanMove() {
    const humanChoice = prompt("Choose a square:", "From 1-9");
    const chosenSquare = `sq${humanChoice}`;
    const humanIndex = gameboard.indexOf(chosenSquare);
    if(gameboard.includes(`sq${humanChoice}`)) {
        gameboard.splice(humanIndex, 1);
        humanChoices.push(chosenSquare);
        console.log(humanChoices);
        if (checkVictory(humanChoices)) {
            alert("Human wins!");
            return; // End the game
        }
        currentPlayer = 'computer'
    } else {
        alert("Square already taken! Choose another.");
        return humanMove();
    }
}

function game() {
 if (currentPlayer === 'human') {
    humanMove();
    return game();
 } else if (currentPlayer === 'computer') {
    computerMove();
    return game();
 }
}
game();

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const input = button.children[0];
        if (currentPlayer==='human') {
            input.value = 'X';
        } else {
            input.value = 'O'
        }
    })
});