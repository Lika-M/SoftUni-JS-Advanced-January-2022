function diagonalSums(input) {

    let sum1 = 0;
    let sum2 = 0;
    let i = 0;
    let j = input.length - 1;
    for (let row of input) {
        sum1 += row[i];
        i++;
        sum2 += row[j];
        j--;
    }
    console.log(sum1, sum2);

}

diagonalSums([
    [20, 40],
    [10, 60]
])
console.log('-----------------');
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
])