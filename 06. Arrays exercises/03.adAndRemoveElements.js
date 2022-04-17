function addAndRemoveElements(array) {
    let numbers = [];

    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        let currentNumber = i + 1;

        if (command === 'add') {
            numbers.push(currentNumber);
        } else if (command === 'remove'){
                numbers.pop(); 
        }
    }
    if (numbers.length > 0) {
        console.log(numbers.join('\n'));
    } else {
        console.log('Empty');
    }

}
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
)
addAndRemoveElements(['remove', 
'remove', 
'remove']
)