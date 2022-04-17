function add(a) {
    let sum = a;

    function sumator(b) {
        sum += b;
        return sumator;
    }
    sumator.toString = () => {
        return sum;
    }
    return sumator;
}

// console.log(add(1).toString());
console.  log(add(1)(6)(-3).toString());
