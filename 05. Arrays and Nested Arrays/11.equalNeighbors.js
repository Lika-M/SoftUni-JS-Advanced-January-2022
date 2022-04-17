function equalNeighbors(matrix) {

    let counter = 0;
  
    for (let i = 0; i < matrix.length; i++) {
        let array = matrix[i];
        for (let j = 0; j < array.length; j++) {
           
            if (i + 1 < matrix.length && matrix[i][j] === matrix[i + 1][j]) {
                counter++;
            } 
            if(matrix[i][j] === matrix[i][j + 1]){
                counter ++;
            }
        }
    }
    console.log(counter);

}

equalNeighbors(
        [[2, 2, 5, 7, 4],
        [4, 0, 5, 3, 4],
        [2, 5, 5, 4, 2]]

)
console.log(('-------------'));
equalNeighbors(
    [['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]

)