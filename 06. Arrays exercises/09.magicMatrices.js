function magicMatrices(matrix) {
    
    let magicSum = matrix[0].reduce((a, b) => a + b, 0);
    let isMagic = true;

    for (let row = 0; row < matrix.length; row++) {
        let sumRows = matrix[row].reduce((a, b) => a + b, 0);
        if (magicSum !== sumRows) {
            isMagic = false;
        }
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let sumCols = 0;
            for (let row = 0; row < matrix.length; row++){
            let element = matrix[row][col];
            sumCols += element;
        }
        if(magicSum !== sumCols){
            isMagic = false;
        }
    }  
    return isMagic;

}
console.log(magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
    ]
))
console.log(magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]

))