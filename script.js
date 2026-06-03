// बोर्ड बनाएं
const board = document.getElementById('board');
for (let i = 0; i < 225; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = 'cell-' + i;
    board.appendChild(cell);
}

// गोटी की शुरुआती स्थिति
let position = 0;

// गोटी को बोर्ड पर रखें
function placeToken() {
    const currentCell = document.getElementById('cell-' + position);
    currentCell.innerHTML = '<div class="token" style="width:20px; height:20px; background:red; border-radius:50%; margin:4px;"></div>';
}

// पासा फेंकने का फंक्शन
function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    alert("पासा आया: " + diceValue);
    
    // गोटी हटाएं
    document.getElementById('cell-' + position).innerHTML = '';
    
    // पोजीशन बदलें
    position = (position + diceValue) % 225;
    
    // गोटी को नई जगह रखें
    placeToken();
}

// बोर्ड पर क्लिक करने पर पासा घुमाएं (या बटन बनाएं)
board.addEventListener('click', rollDice);

// गेम शुरू करें
placeToken();
