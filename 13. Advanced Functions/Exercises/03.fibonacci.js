function getFibonator() {

    let arr = [0, 1]
    function fib() {
        let num = arr[arr.length - 1] + arr[arr.length - 2];
         arr.push(num)
        return arr[arr.length - 2];
    }
    return fib;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
