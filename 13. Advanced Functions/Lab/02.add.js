
function solution(n) {
    let number = n;

    function add(a) {
        return number + a;
    }
    return add;
}

let add5 = solution(5);
console.log(add5(2)); //7
console.log(add5(3));//8


