function biggerHalf(input) {

    let arrL = input.length;
    let sorted = input.sort((a, b) => a - b);
    if (input.length % 2 === 0) {
        arrL = arrL / 2;
    } else {
        arrL = arrL / 2 +1;
    }
    return sorted.slice(-arrL);
    
}

biggerHalf([3, 19, 14, 7, 2, 19, 6])