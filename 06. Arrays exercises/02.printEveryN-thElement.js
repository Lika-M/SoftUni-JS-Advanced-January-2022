function printEveryN_thElement(array, number) {
    let result = [];

    for (let i = 0; i < array.length; i += number){
        result.push (array[i]);
    }
    return result;
}

console.log(printEveryN_thElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2
))
console.log(printEveryN_thElement(['1', 
'2',
'3', 
'4', 
'5'], 
6

))