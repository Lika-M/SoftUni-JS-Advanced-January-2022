function ticTacToe(input) {

    let board = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let player = 'playerX';
    for (let i = 0; i < input.length; i++) {
        let [row, col] = input[i].split(' ').map(Number);

        if (board[row][col] !== false) {
            console.log(`This place is already taken. Please choose another!`);
            continue;
        }
        if (board[row][col] === false) {
            if (player === 'playerX') {
                board[row][col] = 'X';
                player = 'playerY';
            } else {
                board[row][col] = 'O';
                player = 'playerX';
            }
        }
        if (isEnded(board)) {
            break;
        }
    }
    for (let row of board) {
        console.log(row.join('\t'));
    }

    function isEnded(board) {

        for (let row of board) {
            let isSameX = row.every(x => x === 'X');
            let isSameO = row.every(x => x === 'O');
            if (isSameX || isSameO) {
              console.log(`Player ${isSameX ? 'X' : 'O'} wins!`);
                return true;
            }
        }

        for (let col = 0; col < board.length; col++) {
            if (board[0][col] === board[1][col] && board[0][col] === board[2][col]
                && board[0][col] !== false) {
                console.log(`Player ${board[0][col]} wins!`);
                return true;
            }
        }

        if (board[0][0] === board[1][1] && board[0][0] === board[2][2]
            && board[0][0] !== false) {
            console.log(`Player ${board[0][0]} wins!`);
            return true;
        }
        if (board[0][2] === board[1][1] && board[0][2] === board[2][0]
            && board[0][2] !== false) {
            console.log(`Player ${board[0][2]} wins!`);
            return true;
        }
        let isFull = true;
        for (let row of board) {
            if (row.some(x => x === false)) {
                isFull = false;
                break;
            }
        }
        if (isFull) {
            console.log('The game ended! Nobody wins :(');
            return true;
        }
        return false;
    }
}

ticTacToe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]

);
console.log('-------------------');
ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"])
console.log('-------------------');

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
)
