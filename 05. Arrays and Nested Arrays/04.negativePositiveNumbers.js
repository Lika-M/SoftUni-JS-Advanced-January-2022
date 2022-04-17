function negativePositiveNumbers(input) {

    let arr = [];
    for (let element of input) {
        if (element < 0) {
            arr.unshift(element);
        } else {
            arr.push(element)
        }
    }
    console.log(arr.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9])