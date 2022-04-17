function gcDivisor(num1, num2) {
    let first = 0;
    let second = 0;
    let gcd = 1;
    if (num1 < num2) {
        first = num1;
        second = num2;
    } else if (num1 > num2) {
        first = num2;
        second = num1;
    }
    for (let i = 1; i <= first; i++) {
        if (first % i === 0 && second % i === 0) {
            if (i > gcd) {
                gcd = i;
            }
        }
    }
    if (num1 === num2) {
        gcd = num1;
    }
    console.log(gcd);

}
gcDivisor(2154, 458)