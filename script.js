const board = document.getElementById('board');
for (let i = 0; i < 225; i++) {
    const cell = document.createElement('div');
    cell.style.border = "1px solid #ccc";
    board.appendChild(cell);
}
