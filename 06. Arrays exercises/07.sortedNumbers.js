function sortedNumbers(array) {
    let sortedArr = array.sort((a, b) => a - b);
    let result = [];
 
    while (sortedArr.length !== 0) {
        let smallestEl = sortedArr.shift();
        result.push(smallestEl);
        if(sortedArr.length !== 0){
            let biggestEl = sortedArr.pop();
            result.push(biggestEl);
        }
    }
    return result;
}

sortedNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 70])