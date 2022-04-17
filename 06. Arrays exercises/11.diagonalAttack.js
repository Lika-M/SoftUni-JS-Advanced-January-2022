function diagonalAttack(input) {

    let matrix = [];
    for (let line of input) {
        line = line.split(' ').map(Number);
        matrix.push(line);
    }
    let i = 0;
    let j = matrix.length - 1;
    let sum1 = 0;
    let sum2 = 0;
    for (let arr of matrix) {
        sum1 += arr[i++];
        sum2 += arr[j--];
    }
    if (sum1 === sum2) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row === col || row === matrix.length - 1 - col) {
                    continue;
                } else {
                    matrix[row][col] = sum1;
                }
            }
        }
        for (const line of matrix) {
            console.log(line.join(' '));
        }
    } else {
        for (const line of input) { 
            console.log(line);
        }
    }
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);
console.log('-----------');
diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0']
)