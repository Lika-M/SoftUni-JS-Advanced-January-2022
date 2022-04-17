function agregateElements(input) {
    let sum = 0;
    let sumOfInvert = 0;
    let concatenateNums = '';

    for (let i = 0; i < input.length; i++) {
        sum += input[i];
        sumOfInvert += 1 / input[i];
        concatenateNums += input[i];
    }
    console.log(sum);
    console.log(sumOfInvert);
    console.log(concatenateNums);
}
agregateElements([2, 4, 8, 16])