function cookingByNumbers(number, op2, op3, op4, op5, op6) {

    let num = Number(number);
    let arr = [op2, op3, op4, op5, op6];

    for (let operation of arr) {
        switch (operation) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num += 1; break;
            case 'bake': num *= 3; break;
            case 'fillet': num *= 0.8; break;
        }
        console.log(num);
    }
}
//cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

function cookingByNumbers_2(number, op2, op3, op4, op5, op6) {
    let num = Number(number);
    let arr = [op2, op3, op4, op5, op6];

    function action(num, op) {
        const obj = {
            'chop': () => num /= 2,
            'dice': () => num = Math.sqrt(num),
            'spice': () => num += 1,
            'bake': () => num *= 3,
            'fillet': () => num *= 0.8
        }
        return obj[op]();
    }
    let array = [];
    for (const op of arr) {
        let result = action(num, op);
        num = result;
        array.push(result);
    }
    array.forEach(x => console.log(x));
}


cookingByNumbers_2('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
