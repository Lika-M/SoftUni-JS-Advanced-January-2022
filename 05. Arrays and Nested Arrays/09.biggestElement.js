function biggestElement(input) {

    let biggestNum = Number.MIN_SAFE_INTEGER;
    for (row of input) {
        let sortedRow = row.sort((a, b) => a - b);
        if (sortedRow[sortedRow.length - 1] > biggestNum) {
            biggestNum = sortedRow[sortedRow.length - 1];
        }
    }
    return biggestNum;

}

console.log(biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
))