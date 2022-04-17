function lastKNumberSequence(n, k) {

    let arr = [1];
    let i = 0;
    while (arr.length !== n) {
        let element = arr.slice(-k).reduce((a, b) => a + b, 0);
        arr.push(element);
    }
    return arr;

}

console.log(lastKNumberSequence(8, 2));