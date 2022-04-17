function validityChecker(x1, y1, x2, y2) {

    let distFirstToZero = Math.sqrt(x1 ** 2 + y1 ** 2);
    let distSecondToZero = Math.sqrt(x2 ** 2 + y2 ** 2);
    let distBetween = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    let statement;
    
    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid(distFirstToZero)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid(distSecondToZero)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(distBetween)}`);
    
    function isValid(number) {
        if (number === parseInt(number)) {
            statement = 'valid';
        } else {
            statement = 'invalid';
        }
        return statement;
    }
}
validityChecker(2, 1, 1, 1)