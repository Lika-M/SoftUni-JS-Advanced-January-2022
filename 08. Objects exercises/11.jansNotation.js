function jansNotation(array) {

    function applyOperation(n, m, element) {
        const obj = {
            '+': () =>  n + m ,
            '-': () =>  n - m ,
            '*': () =>  n * m ,
            '/': () => n / m 
        }
        return obj[element]();
    }

    let result = [];
    let foundEroor = false;
    while (array.length > 0) {
        let element = array.shift();
        if (typeof element === 'number') {
            result.push(element);
        }
        if (typeof element !== 'number' && result.length >= 2) {
            let n = result[result.length - 2];
            let m = result[result.length - 1];
            let num = applyOperation(n, m, element);
            result.splice(result.length - 2, 2, num)
        } else if (typeof element !== 'number' && result.length < 2) {
            foundEroor = true;
            break;
        }
    }
    if (result.length > 1) {
        console.log(`Error: too many operands!`);
    }
    if (foundEroor && result.length <= 1) {
        console.log(`Error: not enough operands!`);
    } else if (result.length === 1) {
        console.log(result[0]);
    }
}

jansNotation([3])
jansNotation([5,
    3,
    4,
    '*',
    '-']
)
jansNotation([7,
    33,
    8,
    '-']
)
jansNotation([15,
    '/']
   )
//         this is working right!
// function applyOperation1(n, m, element) {
//     const obj = {
//         '+'() { return n + m },
//         '-'() { return n - m },
//         '*'() { return n * m },
//         '/'() {return  n / m }
//     }
//     return obj[element]();
// }
// console.log(applyOperation1(2, 3, '+'))

// function applyOperation2(n, m, element) {
//     const obj = {
//         '+': () =>  n + m ,
//         '-': () =>  n - m ,
//         '*': () =>  n * m ,
//         '/': () => n / m 
//     }
//     return obj[element]();
// }
// console.log(applyOperation2(2, 3, '+'))