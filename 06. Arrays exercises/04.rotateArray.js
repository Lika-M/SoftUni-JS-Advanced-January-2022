function rotateArray(array, number){

    for (let i = 0; i < number; i++) {
        let el = array.pop();
        array.unshift(el);
    }
    console.log(array.join(' '));
}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)