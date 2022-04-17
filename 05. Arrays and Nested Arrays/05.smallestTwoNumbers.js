function smallestTwoNumbers(input) {

    let sorted = input.sort((a, b) => a - b);
    let result = sorted.slice(0, 2);
    console.log(result.join(' '));

}

smallestTwoNumbers([30, 15, 50, 5])