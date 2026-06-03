// बोर्ड बनाने का फंक्शन
function createBoard() {
    const board = document.getElementById('board');
    for (let i = 0; i < 225; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.appendChild(cell);
    }
}
createBoard();
