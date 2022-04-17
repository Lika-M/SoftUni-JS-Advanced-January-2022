function sameNumbers(input) {
    let string = input.toString();
    digit = Number(string[0]);
    isEqual = true;

    for (let i = 1; i < string.length; i++) {
        digit += Number(string[i]);
        if (string[i] !== string[i-1]) {
            isEqual = false;
        }
    }
    console.log(isEqual);
    console.log(digit);
}

sameNumbers(9);

