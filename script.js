let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function handleMove(cellIndex) {
    if (gameBoard[cellIndex] === '' && !isGameOver()) {
        gameBoard[cellIndex] = currentPlayer;
        render();
        if (checkWinner(currentPlayer)) {
            alert(currentPlayer + ' wins!');
            resetGame();
            return;
        }
        if (isTie()) {
            alert('It\'s a tie!');
            resetGame();
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner(player) {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    return winConditions.some((condition) => {
        return condition.every((index) => {
            return gameBoard[index] === player;
        });
    });
}

function isTie() {
    return gameBoard.every((cell) => cell !== '');
}

function isGameOver() {
    return checkWinner('X') || checkWinner('O') || isTie();
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    render();
}

function render() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = gameBoard[index];
        cell.classList.remove('x', 'o');
        if (gameBoard[index] === 'X') {
            cell.classList.add('x');
        } else if (gameBoard[index] === 'O') {
            cell.classList.add('o');
        }
    });
}