function gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = []
        for (let j = 0; j < columns; j++) {
            const element = array[index];
            board[i].push(square());
        }
    }
    return board
}

function square() {
    let square = '';
    if (humanChoices.includes(thisSquare)) {
        value = 'X'
    } else if (computerChoices.includes(thisSquare)) {
        value = 'O'
    } else {
        value = ''
    };
}

const gameState = {
    board: [['', '', ''], ['', '', ''], ['', '', '']],
    humanChoices: [],
    computerChoices: [],
    currentPlayer: 'human'
};

function computerMove() {
    let computerChoices = [];
    let filteredGameboard = board 
    for (const square of board) {
        if (humanChoices.includes(square) || computerChoices.includes(square)) {
            const indexToRemove = myArray.indexOf(square);
            if (indexToRemove !== -1) {
                myArray.splice(indexToRemove, 1);
              }
        }
    }


    const randomIndex = Math.floor(Math.random() * myArray.length);
    const computerChoice = gameboard.randomIndex;
    computerChoices = computerChoices.push(computerChoice);
}

function humanMove() {
    let validMove = false;
    while (!validMove) {
        const humanChoice = prompt("Choose a square (1-9):");
        const row = Math.floor((humanChoice - 1) / 3);
        const col = (humanChoice - 1) % 3;
        if (board[row][col] === '') {
            board[row][col] = 'X';
            humanChoices.push(parseInt(humanChoice));
            validMove = true;
        } else {
            alert("Square already taken! Choose another.");
        }
    }
}

function game() {
    const victoryOptions = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

}