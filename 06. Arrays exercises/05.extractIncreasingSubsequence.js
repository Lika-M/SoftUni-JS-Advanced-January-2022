function extractIncrasingSubsequence(array) {

    let currentBigestEl = Number.MIN_SAFE_INTEGER;
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] >= currentBigestEl){
            currentBigestEl = array[i];
            arr.push(currentBigestEl);
        } else {
            continue;
        }
    }
    return arr;

}

console.log(extractIncrasingSubsequence([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
));