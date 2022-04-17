function processOddPositions(input) {

    let arr = [];
    for (let index in input) {
        if (index % 2 != 0) {
            arr.push(input[index]);
        }
    }
    let result = arr.map(x => x * 2).reverse();
    return result.join(' ');

}

console.log(processOddPositions([3, 0, 10, 4, 7, 3]));