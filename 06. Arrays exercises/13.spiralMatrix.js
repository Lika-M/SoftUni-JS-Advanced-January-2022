// not mine!
function spiraleMatrirow(n) {
    let total = n * n; 
    let result = [];

    for (let rows = 0; rows < n; rows++) {
        let rows = [];
        result.push(rows)
        for (let col = 0; col < n; col++) {
            rows.push(0);
        }
    }

    let row = 0;
    let col = 0;
    let step = 0;
    for (let i = 0; i < total;) {
        while (col + step < n) {
            i++;
            result[row][col] = i;
            col++;
        }
        col--;
        row++;

        while (row + step < n) {
            i++;
            result[row][col] = i;
            row++;
        }
        row--;
        col--;

        while (col >= step) {
            i++;
            result[row][col] = i;
            col--;
        }
        col++;
        row--;
        step++;

        while (row >= step) {
            i++;
            result[row][col] = i;
            row--;
        }
        row++;
        col++;
    }
    console.log(result);
}

spiraleMatrirow(3, 3)